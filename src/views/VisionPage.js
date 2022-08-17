import React from "react";

// reactstrap components
import {
  Button,
  Input,
  // InputGroupAddon,
  // InputGroupText,
  // InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";


import Modal from '@mui/material/Modal';
import { render } from "react-dom";

// core components
// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
// import LandingPageHeader from "components/Headers/LandingPageHeader.js";
// import DefaultFooter from "components/Footers/DefaultFooter.js";

function BlueprintPage() {

  const [open, setOpen] = React.useState(false);
  const [visionNum, setVisionNum] = React.useState(1);

  const visionTitle = ["ART", "PENGULAND", "APPAREL", "TOKEN"];

  const visionDescription = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Penguland will be the core of Pengupals. A decentralised application allowing our holders to enter an online multiplayer realm. In-game wearables(NFTs) will be purchasable with our $PAL token. New wearables, pets and items will be released consistently.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  ];

  const onVisionClicked = (selNum) => {
    console.log("Vision clicked!");
    setOpen(true);
    setVisionNum(selNum);
  };

  const handleClose = () => {
    setOpen(false);
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
        className="section"
        style={{ backgroundColor: "#ffd4ff" }}>
        <Container>
          <Row>
            <h2 className="title mt-5 ml-3">
              We're Building this together
            </h2>
          </Row>
          <Row>
            <Col lg="3" md="12"
              style={{
                display: "flex",
                flexDirection: "column"
              }}>
              <Button
                className="vision-image-btn"
                onClick={() => onVisionClicked(1)}
                style={{ backgroundColor: "transparent" }}>
                <img
                  style={{ height: "100%" }}
                  alt="..."
                  src={require("assets/img/vision-mini-1.png")}
                ></img>
                <p className="vision-item-title">{visionTitle[0]}</p>
              </Button>
            </Col>
            <Col lg="3" md="12"
              style={{
                display: "flex",
                flexDirection: "column"
              }}>
              <Button
                className="vision-image-btn"
                onClick={() => onVisionClicked(2)}
                style={{ backgroundColor: "transparent" }}>
                <img
                  style={{ height: "100%" }}
                  alt="..."
                  src={require("assets/img/vision-mini-2.png")}
                ></img>
                <p className="vision-item-title">{visionTitle[1]}</p>
              </Button>
            </Col>
            <Col lg="3" md="12"
              style={{
                display: "flex",
                flexDirection: "column"
              }}>
              <Button
                className="vision-image-btn"
                onClick={() => onVisionClicked(3)}
                style={{ backgroundColor: "transparent" }}>
                <img
                  style={{ height: "100%" }}
                  alt="..."
                  src={require("assets/img/vision-mini-3.png")}
                ></img>
                <p className="vision-item-title">{visionTitle[2]}</p>
              </Button>
            </Col>
            <Col lg="3" md="12"
              style={{
                display: "flex",
                flexDirection: "column"
              }}>
              <Button
                className="vision-image-btn"
                onClick={() => onVisionClicked(4)}
                style={{ backgroundColor: "transparent" }}>
                <img
                  style={{ height: "100%" }}
                  alt="..."
                  src={require("assets/img/vision-mini-4.png")}
                ></img>
                <p className="vision-item-title">{visionTitle[3]}</p>
              </Button>
            </Col>
          </Row>
        </Container>
        <Modal
          open={open}
          onClose={handleClose}
          centered={true}
        >
          <div
            style={{
              backgroundColor: "#ffd4ff",
              height: "80vh",
              width: "80vw",
              margin: "10vh 10vw",
              border: "2px solid #6a3d5c",
              overflow: "auto"
            }}>
            <Row>
              <Col lg="6" md="12" className="pl-4">
                <h3 className="title mt-5 mb-2">{visionTitle[visionNum - 1]}</h3>
                <h5 className="description mb-4">
                  {visionDescription[visionNum - 1]}
                </h5>
              </Col>
              <Col
                lg="6" md="12"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}>
                <img
                  style={{
                    marginTop: "50px",
                    maxWidth: "calc(100% - 20px)"
                  }}
                  alt="..."
                  src={require("assets/img/vision-" + visionNum + ".png")}
                ></img>
              </Col>
            </Row>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default BlueprintPage;
