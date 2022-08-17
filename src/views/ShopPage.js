import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Input
} from "reactstrap";


import Modal from '@mui/material/Modal';

import QRCode from "react-qr-code";
import { useHashConnect } from "../assets/api/HashConnectAPIProvider.tsx";

function ShopPage() {

  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);


  const { connect, disconnect, walletData, infoData, installedExtensions } = useHashConnect();

  const { accountIds, netWork, id } = walletData;

  const [open, setOpen] = React.useState(false);

  const onClickConnectWallet = () => {
    console.log("===connect wallet===");
    setOpen(true);
  };

  const onClickDisconnectWallet = () => {
    console.log("===disconnect wallet===");
    disconnect();
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const conCatAccounts = (lastAccs: string, Acc: string) => {
  //   return lastAccs + "   " + Acc;
  // };

  const handleCopy = () => {
    navigator.clipboard.writeText(walletData.pairingString);
  };

  const handleClick = () => {
    if (installedExtensions) connect();
    else
      alert(
        "Please install hashconnect wallet extension first. from chrome web store."
      );
  };


  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  return (
    <>
      <div
        className="section section-nucleo-icons"
        style={{ backgroundColor: "#ffe681" }}>
        <Container>
          <Row>
            <Col lg="6" md="12" className="mt-5">
              <img
                alt="..."
                src={require("assets/img/default-item-img.png")}
              ></img>
            </Col>
            <Col lg="6" md="12" className="mt-5">
              <h2 className="mini-title">Coming soon!</h2>
              <img
                alt="..."
                src={require("assets/img/pengupalsapparel-logo.png")}
              ></img>
              {/* 
              {id &&
                <Button
                  className="mr-1 mt-4 ml-0"
                  color="info"
                  size="lg"
                  target="_blank"
                  onClick={onClickDisconnectWallet}
                >
                  Disconnect Wallet
                </Button>
              }
              {!id &&
                <Button
                  className="mr-1 mt-4 ml-0"
                  color="info"
                  size="lg"
                  target="_blank"
                  onClick={onClickConnectWallet}
                >
                  Connect Wallet
                </Button>
              }
              {accountIds && accountIds?.length > 0 &&
                accountIds.map(item =>
                  <div>
                    {item}
                  </div>
                )
              }
              {infoData && infoData?.length > 0 &&
                infoData.map(item =>
                  <div>
                    {item}
                  </div>
                )
              } */}
            </Col>
          </Row>
        </Container>
        <Modal
          open={open && !id}
          onClose={handleClose}
          centered={true}
          className="wallet-bar-top"
          style={{
            top: "50px",
            left: "auto",
            right: "20px",
            width: "300px"
          }}
        >
          <div
            className="wallet-bar-modal"
            style={{
              backgroundColor: "#031018",
              maxWidth: "fit-content",
              padding: "20px 20px",
              border: "2px solid #479ed0"
            }}>
            <div className="wallet-bar-in_modal">
              <Row>
                <h3
                  className="mini-title"
                  style={{
                    maxWidth: "fit-content",
                    float: "left",
                    margin: "0 80px 0 20px",
                    color: "white"
                  }}>
                  Pair Wallet
                </h3>
                <img
                  src={require("assets/img/close.png")}
                  className="wallet-bar-modal-close"
                  onClick={handleClose}
                  style={{
                    width: "38px",
                    height: "38px",
                    float: "right",
                    cursor: "pointer"
                  }} />
              </Row>
              {!installedExtensions &&
                <p
                  className="mt-2"
                  style={{
                    color: "white"
                  }}>
                  Wallet is not installed in your browser
                </p>
              }
              {installedExtensions &&
                <div>
                  <p
                    className="mt-2 mb-1"
                    style={{
                      color: "white",
                      fontWeight: "500"
                    }}>
                    PAIR WITH WALLET
                  </p>
                  <Button
                    className="wallet-bar-button"
                    style={{
                      width: "100%",
                      color: "white",
                      fontWeight: "500",
                      backgroundColor: "#479ed0"
                    }}
                    onClick={handleClick}>
                    HashPack
                  </Button>
                  <p
                    className="mt-2 mb-1"
                    style={{
                      color: "white",
                      fontWeight: "500"
                    }}>
                    PAIR WITH CODE
                  </p>
                  <Input
                    style={{
                      width: "100%",
                      color: "white",
                      fontWeight: "500",
                      borderRadius: "5px",
                      backgroundColor: "transparent"
                    }}
                    value={walletData.pairingString} />
                  {/* <Button className="wallet-bar-button" label="Copy Paring String" onClick={handleCopy} /> */}
                  <p
                    className="mt-2 mb-1"
                    style={{
                      color: "white",
                      fontWeight: "500"
                    }}>
                    PAIR WITH QR CODE
                  </p>
                  <QRCode value={walletData.pairingString} />
                </div>
              }

            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default ShopPage;
