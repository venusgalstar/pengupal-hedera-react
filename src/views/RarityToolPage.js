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

function RarityToolPage() {
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
        className="section section-nucleo-icons"
        style={{ backgroundColor: "#ffd4ff" }}>
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h3 className="mini-title mb-2">Penguin Rarity Tool</h3>
              {/* <h2 className="title">Penguin Rarity Tool</h2> */}
              <h5 className="description mb-4">
                Enter penguin number to check rarity!
              </h5>
              <Input
                className="penguin-num-input"
                placeholder="Enter Penguin Number"
              ></Input>
              <Button
                className="mr-1 mt-3"
                color="info"
                size="lg"
                target="_blank"
              >
                Search Penguin
              </Button>
            </Col>
            <Col lg="6" md="12">
              <div className="cpg-hibernation-penguin">
                <img
                  alt="..."
                  src={require("assets/img/soda-penguin.png")}
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default RarityToolPage;
