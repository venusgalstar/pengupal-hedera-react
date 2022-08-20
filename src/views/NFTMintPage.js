import React from "react";
// reactstrap components
import { Button, Container, Row, Col, Input } from "reactstrap";

import Slider from '@mui/material/Slider';

// import ReactDOM from 'react-dom';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// core components

function NFTMintPage() {

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


  function valuetext(value) {
    return `${value}°C`;
  }


  return (
    <>
      <div
        className="section section-nucleo-icons pb-5"
        style={{ backgroundColor: "#ffd4ff" }}>
        <Container>
          <Row
            className="mt-5 pt-5 pb-4 mr-0 ml-0"
            style={{
              backgroundColor: "#ffe681",
              borderRadius: "32px",
              border: "3px solid rgba(53, 29, 53, 0.5)"
            }}>
            <Col lg="6" md="12">
              <Carousel className="mb-4" showArrows={false} showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} showIndicators={false}>
                <div>
                  <img src={require("assets/img/team-avatar-1.png")} />
                </div>
                <div>
                  <img src={require("assets/img/team-avatar-2.png")} />
                </div>
                <div>
                  <img src={require("assets/img/team-avatar-3.png")} />
                </div>
                <div>
                  <img src={require("assets/img/team-avatar-4.png")} />
                </div>
              </Carousel>
            </Col>
            <Col lg="6" md="12">
              <Row className="m-0">
                <h1 className="mini-title" style={{ margin: "0 auto", width: "auto" }}>Mint Penguin NFTs</h1>
              </Row>
              <Row className="m-0">
                <h2 className="title" style={{ margin: "20px 50px 20px auto", width: "auto" }}>0/100</h2>
              </Row>
              <Row className="m-0 pl-5 pr-5">
                <Slider
                  aria-label="Temperature"
                  defaultValue={30}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={1}
                  max={10}
                />
              </Row>
              <Row
                className="m-0 mt-4"
                style={{
                  display: "block",
                  width: "100%",
                  height: "30px"
                }}>
                <p className="mr-5" style={{ float: "right", color: "#351d35", fontWeight: "700" }}>5000PAL</p>
                <p className="mr-4" style={{ float: "right", color: "#351d35", fontWeight: "700" }}>Price</p>
              </Row>
              <Row className="m-0 mt-4"
                style={{ width: "100%" }}>
                <Button
                  color="info"
                  size="lg"
                  target="_blank"
                  style={{
                    borderRadius: "32px",
                    width: "180px",
                    margin: "0 auto"
                  }}
                >Mint</Button>
              </Row>
            </Col>
          </Row>
          <Row
            className="mt-5 pt-5 pb-4 mr-0 ml-0"
            style={{
              backgroundColor: "#ffe681",
              borderRadius: "32px",
              border: "3px solid rgba(53, 29, 53, 0.5)"
            }}>
            <Col lg="6" md="12">
              <Carousel className="mb-4" showArrows={false} showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} showIndicators={false}>
                <div>
                  <img src={require("assets/img/team-avatar-1.png")} />
                </div>
                <div>
                  <img src={require("assets/img/team-avatar-2.png")} />
                </div>
                <div>
                  <img src={require("assets/img/team-avatar-3.png")} />
                </div>
                <div>
                  <img src={require("assets/img/team-avatar-4.png")} />
                </div>
              </Carousel>
            </Col>
            <Col lg="6" md="12">
              <Row className="m-0">
                <h1 className="mini-title" style={{ margin: "0 auto", width: "auto" }}>Mint Penguin NFTs</h1>
              </Row>
              <Row className="m-0">
                <h2 className="title" style={{ margin: "20px 50px 20px auto", width: "auto" }}>0/100</h2>
              </Row>
              <Row className="m-0 pl-5 pr-5">
                <Slider
                  aria-label="Temperature"
                  defaultValue={30}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={1}
                  max={10}
                />
              </Row>
              <Row
                className="m-0 mt-4"
                style={{
                  display: "block",
                  width: "100%",
                  height: "30px"
                }}>
                <p className="mr-5" style={{ float: "right", color: "#351d35", fontWeight: "700" }}>5000PAL</p>
                <p className="mr-4" style={{ float: "right", color: "#351d35", fontWeight: "700" }}>Price</p>
              </Row>
              <Row className="m-0 mt-4"
                style={{ width: "100%" }}>
                <Button
                  color="info"
                  size="lg"
                  target="_blank"
                  style={{
                    borderRadius: "32px",
                    width: "180px",
                    margin: "0 auto"
                  }}
                >Mint</Button>
              </Row>
            </Col>
          </Row>
        </Container >
      </div >
    </>
  );
}

export default NFTMintPage;

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
