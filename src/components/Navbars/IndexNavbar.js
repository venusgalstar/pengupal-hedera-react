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
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
  Modal
} from "reactstrap";
// import Modal from "@material-ui/core/Modal";
import QRCode from "react-qr-code";
import { useHashConnect } from "../../assets/api/HashConnectAPIProvider.tsx";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);


  const { connect, disconnect, walletData, balanceData, installedExtensions } = useHashConnect();

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
                  <p>COMING SOON</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/penguland">
                  <p>PENGULAND</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/penguins">
                  <p>PENGUINS</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/park">
                  <p>PARK</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/manifesto">
                  <p>MANIFESTO</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/blueprint">
                  <p>BLUEPRINT</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/shop">
                  <p>SHOP</p>
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
                  href="https://twitter.com/CreativeTim?ref=creativetim"
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
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
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
              {/* <NavItem className="wallet-connect-btn" onClick={onClickConnectWallet}>
                <NavLink>
                  <p>Connect Wallet</p>
                </NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Container>
        <Modal
          isOpen={open}
          onClose={handleClose}
          className="wallet-bar__top"
        >
          <div className="wallet-bar__modal">
            <div className="wallet-bar__in_modal">
              <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/53504-200.png' className="wallet-bar__modal_close" onClick={handleClose} />
              {!installedExtensions && <p>Wallet is not installed in your browser</p>}
              <p><Button className="wallet-bar__button" label="ConnectWithExtension" onClick={handleClick} /></p>
              <p>ParingKey : {walletData.pairingString.substring(0, 15)}...</p>
              <p><Button className="wallet-bar__button" label="Copy Paring String" onClick={handleCopy} /></p>
              <p>QR Code</p>
              <QRCode value={walletData.pairingString} />
            </div>
          </div>
        </Modal>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
