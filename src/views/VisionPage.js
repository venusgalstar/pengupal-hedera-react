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

// core components
// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
// import LandingPageHeader from "components/Headers/LandingPageHeader.js";
// import DefaultFooter from "components/Footers/DefaultFooter.js";

function BlueprintPage() {

  const [open, setOpen] = React.useState(false);
  const [visionNum, setVisionNum] = React.useState(1);

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
                display: "flex"
              }}>
              <Button className="vision-image-btn" onClick={() => onVisionClicked(1)}>
                <img
                  style={{ height: "100%" }}
                  alt="..."
                  src={require("assets/img/vision-mini-1.png")}
                ></img>
              </Button>
            </Col>
            <Col lg="3" md="12"
              style={{
                display: "flex"
              }}>
              <Button className="vision-image-btn" onClick={() => onVisionClicked(2)}>
                <img
                  style={{ height: "100%" }}
                  alt="..."
                  src={require("assets/img/vision-mini-2.png")}
                ></img>
              </Button>
            </Col>
            <Col lg="3" md="12"
              style={{
                display: "flex"
              }}>
              <Button className="vision-image-btn" onClick={() => onVisionClicked(3)}>
                <img
                  style={{ height: "100%" }}
                  alt="..."
                  src={require("assets/img/vision-mini-3.png")}
                ></img>
              </Button>
            </Col>
            <Col lg="3" md="12"
              style={{
                display: "flex"
              }}>
              <Button className="vision-image-btn" onClick={() => onVisionClicked(4)}>
                <img
                  style={{ height: "100%" }}
                  alt="..."
                  src={require("assets/img/vision-mini-4.png")}
                ></img>
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
              marginTop: "20px",
              width: "fit-content"
            }}>
            <img
              style={{
                height: "calc(100vh - 40px)",
                maxWidth: "none"
              }}
              alt="..."
              src={require("assets/img/vision-" + visionNum + ".png")}
            ></img>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default BlueprintPage;
