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
      <div className="section section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <Row>
                <h3 className="mini-title mb-0">MANIFESTO</h3>
              </Row>
              <Row>
                <h2 className="title">Penguin With Us</h2>
              </Row>
              <Row>
                <h5 className="description">
                  Come unrefined, as long as you’re kind.
                  Progress takes patience, our needs are aligned.
                  So bear with the grind, kick-back and unwind -
                  Good vibes and community, it’s one hell of a ride!
                </h5>
              </Row>
              <Row>
                <h5 className="description">
                  Life in the city, it's okay for me:
                  Work for tomorrow, we all agree.
                  There’s time to sip coffee, dance and roam free,
                  Catch up at the Park, or relax on a tree.
                </h5>
              </Row>
              <Row>
                <h5 className="description">
                  Carefree living, our style is be true
                  Bearing no grudge, no judgement, no spew
                  Live for tonight, the twilight anew
                  Bear with me, friend, and I’ll bear with you.
                </h5>
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
                  src={require("assets/img/hand-penguin.png")}
                ></img>
              </div>
              {/* <div className="icons-container">
                <i className="now-ui-icons ui-1_send"></i>
                <i className="now-ui-icons ui-2_like"></i>
                <i className="now-ui-icons transportation_air-baloon"></i>
                <i className="now-ui-icons text_bold"></i>
                <i className="now-ui-icons tech_headphones"></i>
                <i className="now-ui-icons emoticons_satisfied"></i>
                <i className="now-ui-icons shopping_cart-simple"></i>
                <i className="now-ui-icons objects_spaceship"></i>
                <i className="now-ui-icons media-2_note-03"></i>
                <i className="now-ui-icons ui-2_favourite-28"></i>
                <i className="now-ui-icons design_palette"></i>
                <i className="now-ui-icons clothes_tie-bow"></i>
                <i className="now-ui-icons location_pin"></i>
                <i className="now-ui-icons objects_key-25"></i>
                <i className="now-ui-icons travel_istanbul"></i>
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ManifestoPage;
