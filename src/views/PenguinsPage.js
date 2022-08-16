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

function PenguinsPage() {
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
      <div className="section section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <Row>
                <h3 className="mini-title mb-2">Penguins</h3>
              </Row>
              <Row>
                <h2 className="title">Founders Coin Check</h2>
              </Row>
              <Row>
                <h5 className="description">
                  Enter Bear number to check Founders Coin claim status!
                </h5>
              </Row>
              <Row>
                <Input
                  className="penguin-num-input"
                  placeholder="Enter Penguin Number"
                ></Input>
              </Row>
              <Row>
                <Button
                  className="mr-1 mt-4"
                  color="info"
                  size="lg"
                  target="_blank"
                >
                  Search Penguin
                </Button>
              </Row>
              {/* <Button
                className="btn-round"
                color="info"
                href="https://nucleoapp.com/?ref=1712"
                outline
                size="lg"
                target="_blank"
              >
                View All Icons
              </Button> */}
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

export default PenguinsPage;
