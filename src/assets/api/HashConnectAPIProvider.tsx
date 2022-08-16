import { HashConnect, HashConnectTypes, MessageTypes } from "hashconnect";
import React, { useEffect, useState } from "react";
import {
  AccountId,
  PrivateKey,
  Client,
  ContractFunctionParameters,
  ContractCallQuery,
  Hbar,
  ContractExecuteTransaction,
  AccountBalanceQuery,
  FileCreateTransaction,
  ContractCreateTransaction,
  AccountInfoQuery
} from "@hashgraph/sdk";
import TokenBalanceMap from "@hashgraph/sdk/lib/account/TokenBalanceMap";

//Type declarations
interface SaveData {
  topic: string;
  pairingString: string;
  privateKey: string;
  pairedWalletData: HashConnectTypes.WalletMetadata | null;
  pairedAccounts: string[];
  netWork?: string;
  id?: string;
  accountIds?: string[];
}

type Networks = "mainnet" | "mainnet" | "previewnet";

interface PropsType {
  children: React.ReactNode;
  hashConnect: HashConnect;
  netWork: Networks;
  metaData?: HashConnectTypes.AppMetadata;
  debug?: boolean;
}

export interface HashConnectProviderAPI {
  connect: () => void;
  disconnect: () => void;
  walletData: SaveData;
  accountData: string[];
  netWork: Networks;
  metaData?: HashConnectTypes.AppMetadata;
  installedExtensions: HashConnectTypes.WalletMetadata | null;
}

const OPERATOR_ID = "0.0.1107757";
const OPERATOR_KEY = "302e020100300506032b657004220420534417011be91a6b1fac69d6759b923b413d48e8828e39e7e0f81923e63e7579";

const availableExtensions: HashConnectTypes.WalletMetadata[] = [];

const operatorId = AccountId.fromString(OPERATOR_ID);
const operatorKey = PrivateKey.fromString(OPERATOR_KEY);

const client = Client.forMainnet();

client.setOperator(operatorId, operatorKey);

const INITIAL_SAVE_DATA: SaveData = {
  topic: "",
  pairingString: "",
  privateKey: "",
  pairedAccounts: [],
  pairedWalletData: null,
};

const EMPTY_APPROVE_PAIRING_MSG: MessageTypes.ApprovePairing = {
  topic: "",
  metadata: null,
  accountIds: [],
  network: "",
};

let APP_CONFIG: HashConnectTypes.AppMetadata = {
  name: "dApp Example",
  description: "An example hedera dApp",
  icon: "https://absolute.url/to/icon.png",
};

const loadLocalData = (): null | SaveData => {
  let foundData = localStorage.getItem("hashconnectData");

  if (foundData) {
    const saveData: SaveData = JSON.parse(foundData);
    // setSaveData(saveData);
    return saveData;
  } else return null;
};

export const HashConnectAPIContext =
  React.createContext<HashConnectProviderAPI>({
    connect: () => null,
    disconnect: () => null,
    walletData: INITIAL_SAVE_DATA,
    accountData: [],
    netWork: "mainnet",
    installedExtensions: null,
  });

export default function HashConnectProvider({
  children,
  hashConnect,
  metaData,
  netWork,
  debug,
}: PropsType) {
  //Saving Wallet Details in Ustate
  const [saveData, SetSaveData] = useState<SaveData>(INITIAL_SAVE_DATA);
  const [accountsInfo, SetInfo] = useState<string[] | null>(null);
  const [installedExtensions, setInstalledExtensions] =
    useState<HashConnectTypes.WalletMetadata | null>(null);

  //? Initialize the package in mount
  const initializeHashConnect = async () => {
    console.log("initializeHashConnect");
    const saveData = INITIAL_SAVE_DATA;
    const localData = loadLocalData();
    try {
      if (!localData) {
        if (debug) console.log("===Local data not found.=====");

        //first init and store the private for later
        let initData = await hashConnect.init(metaData ?? APP_CONFIG);
        saveData.privateKey = initData.privKey;

        //then connect, storing the new topic for later
        const state = await hashConnect.connect();
        saveData.topic = state.topic;

        //generate a pairing string, which you can display and generate a QR code from
        saveData.pairingString = hashConnect.generatePairingString(
          state,
          netWork,
          debug ?? false
        );

        //find any supported local wallets
        hashConnect.findLocalWallets();
      } else {
        if (debug) console.log("====Local data found====", localData);
        //use loaded data for initialization + connection
        hashConnect.init(metaData ?? APP_CONFIG, localData?.privateKey);
        hashConnect.connect(
          localData?.topic,
          localData?.pairedWalletData ?? metaData
        );
      }
    } catch (error) {
      console.log(error);
    } finally {
      if (localData) {
        SetSaveData((prevData) => ({ ...prevData, ...localData }));
      } else {
        SetSaveData((prevData) => ({ ...prevData, ...saveData }));
      }

      if (debug) console.log("====Wallet details updated to state====");
    }
  };

  const saveDataInLocalStorage = async (data: MessageTypes.ApprovePairing) => {
    if (debug)
      console.info("===============Saving to localstorage::=============");
    const { metadata, ...restData } = data;
    SetSaveData((prevSaveData) => {
      prevSaveData.pairedWalletData = metadata;
      return { ...prevSaveData, ...restData };
    });

    var infos: string[] = [];
    var i = 0;
    await Promise.all(restData.accountIds.map(async item => {
      await (new AccountInfoQuery().setAccountId(item).execute(client).then((res) => {
        infos[i++] = res.toString();
        console.log('account info =>', res);
      }).catch(err => {
        console.log(err);
      }));
    }));

    console.log(infos);

    SetInfo(infos);

    let dataToSave = JSON.stringify(data);
    if (data.topic == "") localStorage.removeItem("hashconnectData");
    else localStorage.setItem("hashconnectData", dataToSave);
  };

  const additionalAccountResponseEventHandler = (
    data: MessageTypes.AdditionalAccountResponse
  ) => {
    if (debug) console.debug("=====additionalAccountResponseEvent======", data);
    // Do a thing
  };

  const foundExtensionEventHandler = (
    data: HashConnectTypes.WalletMetadata
  ) => {
    if (debug) console.debug("====foundExtensionEvent====", data);
    // Do a thing
    setInstalledExtensions(data);
  };

  const pairingEventHandler = (data: MessageTypes.ApprovePairing) => {
    if (debug) console.log("====pairingEvent:::Wallet connected=====", data);
    // Save Data to localStorage
    saveDataInLocalStorage(data);
  };

  useEffect(() => {

    firstWork();
  }, []);

  const firstWork = () => {

    console.log("===firstWork===");
    //Intialize the setup
    initializeHashConnect();

    // Attach event handlers
    hashConnect.additionalAccountResponseEvent.on(
      additionalAccountResponseEventHandler
    );
    hashConnect.foundExtensionEvent.on(foundExtensionEventHandler);
    hashConnect.pairingEvent.on(pairingEventHandler);

    return () => {
      // Detach existing handlers
      hashConnect.additionalAccountResponseEvent.off(
        additionalAccountResponseEventHandler
      );
      hashConnect.foundExtensionEvent.off(foundExtensionEventHandler);
      hashConnect.pairingEvent.off(pairingEventHandler);
    };
  };

  const connect = () => {
    if (installedExtensions) {
      if (debug) console.log("Pairing String::", saveData.pairingString);
      hashConnect.connectToLocalWallet(saveData?.pairingString);
    } else {
      if (debug) console.log("====No Extension is not in browser====");
      return "wallet not installed";
    }
  };

  const disconnect = async () => {
    console.log("===disconnectHashConnect===");
    await SetSaveData(INITIAL_SAVE_DATA);
    await SetInfo([]);
    await saveDataInLocalStorage(EMPTY_APPROVE_PAIRING_MSG);
    firstWork();
  };

  return (
    <HashConnectAPIContext.Provider
      value={{ connect, disconnect, walletData: saveData, infoData: accountsInfo, netWork, installedExtensions }}
    >
      {children}
    </HashConnectAPIContext.Provider>
  );
}

const defaultProps: Partial<PropsType> = {
  metaData: {
    name: "dApp Example",
    description: "An example hedera dApp",
    icon: "https://absolute.url/to/icon.png",
  },
  netWork: "mainnet",
  debug: false,
};

HashConnectProvider.defaultProps = defaultProps;

export function useHashConnect() {
  const value = React.useContext(HashConnectAPIContext);
  console.log("useHashConnect");
  return value;
}