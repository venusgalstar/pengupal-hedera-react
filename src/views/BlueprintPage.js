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

// core components
// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
// import LandingPageHeader from "components/Headers/LandingPageHeader.js";
// import DefaultFooter from "components/Footers/DefaultFooter.js";

function BlueprintPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
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
        className="section section-nucleo-icons mt-0 pt-5"
        style={{
          backgroundColor: "#003467",
          height: "100vh"
        }}>
        <Container>
          <Row>
            <h3
              className="mini-title mb-2"
              style={{
                color: "#7eaeff"
              }}>
              BLUEPRINT
            </h3>
            <h2
              className="title"
              style={{
                color: "#7eaeff"
              }}>
              We're Building this together
            </h2>
          </Row>
          <Row>
            <Col lg="3" md="12">
              <img
                alt="..."
                src={require("assets/img/bp1.png")}
              ></img>
            </Col>
            <Col lg="3" md="12">
              <img
                alt="..."
                src={require("assets/img/bp2.png")}
              ></img>
            </Col>
            <Col lg="3" md="12">
              <img
                alt="..."
                src={require("assets/img/bp3.png")}
              ></img>
            </Col>
            <Col lg="3" md="12">
              <img
                alt="..."
                src={require("assets/img/bp4.png")}
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default BlueprintPage;
