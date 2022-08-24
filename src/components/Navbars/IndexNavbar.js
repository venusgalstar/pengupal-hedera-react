import React from "react";
// import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // UncontrolledDropdown,
  // NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
  Row,
  Input
} from "reactstrap";

import Modal from '@mui/material/Modal';
import QRCode from "react-qr-code";
import { useHashConnect } from "../../assets/api/HashConnectAPIProvider.tsx";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [connectModalView, setWalletConnectModalOpen] = React.useState(false);
  const [disconnectModalView, setWalletDisconnectModalOpen] = React.useState(false);

  const { connect, disconnect, walletData, installedExtensions } = useHashConnect();
  // const { accountIds, netWork, id } = walletData;
  const { accountIds, id } = walletData;

  // const conCatAccounts = (lastAccs: string, Acc: string) => {
  //   return lastAccs + " " + Acc;
  // };

  const onClickCopyPairingStr = () => {
    navigator.clipboard.writeText(walletData.pairingString);
  };

  const onClickConnectHashPack = () => {
    if (installedExtensions) connect();
    else
      alert(
        "Please install hashconnect wallet extension first. from chrome web store."
      );
  };

  const onClickDisconnectHashPack = () => {
    disconnect();
    setWalletDisconnectModalOpen(false);
  }

  const onClickOpenConnectModal = () => {
    setWalletConnectModalOpen(true);
  };

  const onClickOpenDisConnectModal = () => {
    setWalletDisconnectModalOpen(true);
  };

  const onClickModalClose = () => {
    setWalletConnectModalOpen(false);
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            {/* <NavbarBrand
              href="/"
              target="_blank"
              id="navbar-brand"
            >
              PENGUPALS
            </NavbarBrand> */}
            {/* <UncontrolledTooltip target="#navbar-brand">
              Designed by Invision. Coded by Creative Tim
            </UncontrolledTooltip> */}
            <button
              className="navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink href="/">
                  <p>WELCOME</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/penguland">
                  <p>PENGULAND</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/rarity-tool">
                  <p>RARITY TOOL</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/manifesto">
                  <p>MANIFESTO</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/vision">
                  <p>VISION</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/shop">
                  <p>SHOP</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/claim">
                  <p>CLAIM</p>
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                  <p>Download</p>
                </NavLink>
              </NavItem> */}
              {/* <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>Components</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    All components
                  </DropdownItem>
                  <DropdownItem
                    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    Documentation
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              {/* <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href="https://www.creative-tim.com/product/now-ui-kit-pro-react?ref=nukr-index-navbar"
                  id="upgrade-to-pro"
                  target="_blank"
                >
                  <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                  <p>Upgrade to PRO</p>
                </Button>
                <UncontrolledTooltip target="#upgrade-to-pro">
                  Cooming soon!
                </UncontrolledTooltip>
              </NavItem> */}
              <NavItem>
                <NavLink
                  href="https://mobile.twitter.com/pengupals"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://t.co/CawMg82Gkv"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-discord"></i>
                  <p className="d-lg-none d-xl-none">Discord</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Discord
                </UncontrolledTooltip>
              </NavItem>
              <NavItem className="mr-5">
                <NavLink
                  href="https://zuse.market/collection/0.0.1122159"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <img style={{width: "21px"}} alt="..." src={require("assets/img/zuse-logo.png")} />
                  <p className="d-lg-none d-xl-none">Zuse Market</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Follow us on Zuse Market
                </UncontrolledTooltip>
              </NavItem>
              {/* <UncontrolledDropdown nav
                style={{
                  textAlign: "center",
                  minWidth: "150px"
                }}>
                <DropdownToggle
                  caret={accountIds?.length > 0 ? true : false}
                  color="default"
                  nav
                  style={{
                    border: "1px solid #351d35",
                    borderRadius: "32px",
                    maxHeight: "42px"
                  }}
                  onClick={accountIds?.length > 0 ? () => emptyFunction() : () => onClickConnectWallet()}
                >
                  <p>{accountIds?.length > 0 ? "Connected" : "Connect Wallet"}</p>
                </DropdownToggle>
                <DropdownMenu>
                  {accountIds?.length > 0 && accountIds.map((item, key) =>
                    <DropdownItem>
                      {item}
                    </DropdownItem>
                  )}
                  {accountIds?.length > 0 &&
                    <DropdownItem
                      onClick={() => onClickDisconnectWallet()}>
                      Disconnect
                    </DropdownItem>
                  }
                </DropdownMenu>
              </UncontrolledDropdown> */}
              <NavItem className="wallet-connect-btn" onClick={accountIds?.length > 0 ? () => onClickOpenDisConnectModal() : () => onClickOpenConnectModal()}>
                <NavLink>
                  <p>{accountIds?.length > 0 ? accountIds[0] : "Connect Wallet"}</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
        <Modal
          open={connectModalView && !id}
          onClose={() => onClickModalClose()}
          centered={true}
          className="hashpack-connect-modal"
        >
          <div>
            {!installedExtensions && <p className="warning-message">Wallet is not installed in your browser!</p>}
            {installedExtensions && <div>
              <p className="modal-title">Pair Wallet</p>
              <p className="modal-mini-title">PAIR WITH WALLET</p>
              <Button className="hashpack-connect-btn" onClick={() => onClickConnectHashPack()}>
                <img alt="..." src="https://wallet.hashpack.app/assets/favicon/favicon.ico" />
                <p>HashPack</p>
              </Button>
              <p className="modal-mini-title">PAIR WITH CODE</p>
              <Row className="pair-with-code-wrapper">
                <Input value={walletData.pairingString} readOnly={true} />
                <Button onClick={() => onClickCopyPairingStr()}>Copy</Button>
              </Row>
              <p className="modal-mini-title">PAIR WITH QR CODE</p>
              <QRCode value={walletData.pairingString} />
            </div>}
          </div>
        </Modal>
        <Modal
          open={disconnectModalView && id}
          onClose={() => onClickModalClose()}
          centered={true}
          className="hashpack-connect-modal"
        >
          <div>
            <p className="modal-title">Disconnect Wallet</p>
            <Button
              className="hashpack-connect-btn"
              onClick={() => onClickDisconnectHashPack()}
              style={{ margin: "10px auto" }}>
              Disconnect
            </Button>
          </div>
        </Modal>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
