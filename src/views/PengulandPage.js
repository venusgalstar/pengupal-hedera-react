import React from "react";

// reactstrap components
import {
  // Button,
  // Input,
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

function PengulandPage() {
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
      <div className="wrapper">
        <div
          className="section section-about-us"
          style={{ backgroundColor: "#ffd4ff" }}>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <img
                  className="mt-5"
                  alt="..."
                  src={require("assets/img/penguland-logo.png")}
                ></img>
                <h5 className="description mt-5">
                  Penguland will be the core of Pengupals. A decentralised application allowing our holders to enter an online multiplayer realm. In-game wearables(NFTs) will be purchasable with our $PAL token. New wearables, pets and items will be released consistently.
                </h5>
                <img
                  className="mt-4"
                  alt="..."
                  src={require("assets/img/penguland1.jpg")}
                ></img>
                <img
                  className="mt-5"
                  alt="..."
                  src={require("assets/img/penguland2.jpg")}
                ></img>
                <img
                  className="mt-5"
                  alt="..."
                  src={require("assets/img/penguland3.jpg")}
                ></img>                
                <img
                  className="mt-5 mb-5"
                  alt="..."
                  src={require("assets/img/penguland4.jpg")}
                ></img>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default PengulandPage;
