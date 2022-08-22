import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Input
} from "reactstrap";


function ShopPage() {

  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);

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
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ShopPage;
