import React from "react";
// reactstrap components
import { Button, Container, Row, Col, Input } from "reactstrap";

// core components

function ManifestoPage() {
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
        style={{ backgroundColor: "black" }}>
        <Container>
          <Row>
            <Col lg="6" md="12">
              <img
                className="mt-4"
                alt="..."
                src={require("assets/img/manifesto1.jpg")}
              ></img>
            </Col>
            <Col lg="6" md="12">
              <img
                className="mt-5"
                alt="..."
                src={require("assets/img/manifesto2.png")}
              ></img>
            </Col>
          </Row>
          <Row className="mt-5 pb-5">
            <Container className="mt-5">
              <h2 className="title">TEAM</h2>
              <div className="team mt-5">
                <Row>
                  <Col md="3">
                    <div className="team-player">
                      <img
                        alt="..."
                        className="img-fluid img-raised"
                        src={require("assets/img/team-avatar-1.png")}
                      ></img>
                      <h4 className="title">PRINALE</h4>
                      <p className="category text-info">CO-FOUNDER</p>
                    </div>
                  </Col>
                  <Col md="3">
                    <div className="team-player">
                      <img
                        alt="..."
                        className="img-fluid img-raised"
                        src={require("assets/img/team-avatar-2.png")}
                      ></img>
                      <h4 className="title">LERA</h4>
                      <p className="category text-info">ART DIRECTOR</p>
                    </div>
                  </Col>
                  <Col md="3">
                    <div className="team-player">
                      <img
                        alt="..."
                        className="img-fluid img-raised"
                        src={require("assets/img/team-avatar-3.png")}
                      ></img>
                      <h4 className="title">GLINTON</h4>
                      <p className="category text-info">WEB DEVELOPER</p>
                    </div>
                  </Col>
                  <Col md="3">
                    <div className="team-player">
                      <img
                        alt="..."
                        className="img-fluid img-raised"
                        src={require("assets/img/team-avatar-4.png")}
                      ></img>
                      <h4 className="title">AREM</h4>
                      <p className="category text-info">WEB DEVELOPER</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </Row >
        </Container >
      </div >
    </>
  );
}

export default ManifestoPage;
