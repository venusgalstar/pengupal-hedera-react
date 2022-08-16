import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function ParkPage() {
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
          <Row className="d-block">
            <Row className="ml-0 mr-0">
              <h3 className="mini-title mb-0">THE PARK</h3>
            </Row>
            <Row className="ml-0 mr-0">
              <h2 className="title mb-0">A place to fit in.</h2>
            </Row>
            <Row className="ml-0 mr-0">
              <h2 className="title">A space to stand out.</h2>
            </Row>
          </Row>
          <div className="section section-about-us mt-1">
            <Container>
              <div className="section-story-overview pt-0">
                <Row>
                  <Col md="6">
                    <div
                      className="image-container image-left"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/login.jpg") + ")"
                      }}
                    >
                      <p className="blockquote blockquote-info">
                        "You can buy pets from pet shop. If you buy a pet, we provide one month's worth of food for free. Have fun." <br></br>
                        <br></br>
                        <small>-PSM</small>
                      </p>
                    </div>
                    <div
                      className="image-container"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/bg3.jpg") + ")"
                      }}
                    ></div>
                  </Col>
                  <Col md="5">
                    <div
                      className="image-container image-right mt-5"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/bg1.jpg") + ")"
                      }}
                    ></div>
                    <h3>
                      Rules to be observed by penguins
                    </h3>
                    <p>
                      Respect other penguins. NewCP does not tolerate any swearing, bullying, or mean behavior toward other penguins.
                    </p>
                    <p>
                      Never reveal personal information. The best way to stay safe online is to never share your real name, phone number, email address, or passwords.
                    </p>
                    <p>
                      No inappropriate discussion. References to racially charged language, drugs, or alcohol, or any otherwise inappropriate talk is not permitted.
                    </p>
                    <p>
                      No cheating. Use of third party programs to cheat is prohibited. Players who use any third party programs while playing risk being permanently banned.
                    </p>
                  </Col>
                </Row>
              </div>
              <div className="section section-team mt-3 mb-5">
                <Container>
                  <h2 className="title">Penguin with us</h2>
                  <div className="team mt-5">
                    <Row>
                      <Col md="4">
                        <div className="team-player">
                          <img
                            alt="..."
                            className="img-fluid img-raised"
                            src={require("assets/img/avatar.jpg")}
                          ></img>
                          <h4 className="title">KAIS</h4>
                          <p className="category text-info">CO-FOUNDER</p>
                          <p className="description">
                            With tertiary degrees in graphic design, art history and branding, Kais brings his strategic experience in building and leading design projects for many global brands including Unicef, United Nations, Unilever, Greenpeace, Ford, Dell and Olympus.{" "}
                          </p>
                          <Button
                            className="btn-icon btn-round"
                            color="info"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-twitter"></i>
                          </Button>
                          <Button
                            className="btn-icon btn-round"
                            color="info"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-instagram"></i>
                          </Button>
                          <Button
                            className="btn-icon btn-round"
                            color="info"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-facebook-square"></i>
                          </Button>
                        </div>
                      </Col>
                      <Col md="4">
                        <div className="team-player">
                          <img
                            alt="..."
                            className="img-fluid img-raised"
                            src={require("assets/img/ryan.jpg")}
                          ></img>
                          <h4 className="title">MANDY</h4>
                          <p className="category text-info">ART DIRECTOR</p>
                          <p className="description">
                            After completing her Masters of Fine Arts from NYU, Mandy worked on a diverse range of global creative projects including illustration for established international toy companies and financial institutions before joining our Okay Bears team.{" "}
                          </p>
                          <Button
                            className="btn-icon btn-round"
                            color="info"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-twitter"></i>
                          </Button>
                          <Button
                            className="btn-icon btn-round"
                            color="info"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-linkedin"></i>
                          </Button>
                        </div>
                      </Col>
                      <Col md="4">
                        <div className="team-player">
                          <img
                            alt="..."
                            className="img-fluid img-raised"
                            src={require("assets/img/eva.jpg")}
                          ></img>
                          <h4 className="title">TEEQ</h4>
                          <p className="category text-info">WEB DIRECTOR</p>
                          <p className="description">
                            With a background in industrial design and extensive certification in UX practice, teeQ has worked on a wide range of design and creative projects including UX, UI and web development for global startups and government agencies.{" "}
                          </p>
                          <Button
                            className="btn-icon btn-round"
                            color="info"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-google-plus"></i>
                          </Button>
                          <Button
                            className="btn-icon btn-round"
                            color="info"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-youtube"></i>
                          </Button>
                          <Button
                            className="btn-icon btn-round"
                            color="info"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-twitter"></i>
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Container>
              </div>
            </Container>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ParkPage;
