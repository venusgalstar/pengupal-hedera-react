import React from "react";
// import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
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
  const [open, setOpen] = React.useState(false);


  const { connect, disconnect, walletData, installedExtensions } = useHashConnect();
  const { accountIds, netWork, id } = walletData;

  

  const onClickConnectWallet = () => {
    console.log("===connect wallet===");
    onClickDisconnectWallet();
    setOpen(true);
  };

  const emptyFunction = () => {
    console.log("===Empty Function===");
  };

  const onClickDisconnectWallet = () => {
    console.log("===disconnect wallet===");
    setOpen(false);
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
                <NavLink href="/nft-mint">
                  <p>NFT MINT</p>
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
              {/* <NavItem>
                <NavLink
                  href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Instagram
                </UncontrolledTooltip>
              </NavItem> */}
              <NavItem className="mr-5">
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
              <NavItem className="wallet-connect-btn" onClick={accountIds?.length > 0 ? () => onClickDisconnectWallet() : () => onClickConnectWallet()}>
                <NavLink>
                  <p><p>{accountIds?.length > 0 ? accountIds[0] : "Connect Wallet"}</p></p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
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
                    margin: "0 70px 0 20px",
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
      </Navbar>
    </>
  );
}

export default IndexNavbar;
