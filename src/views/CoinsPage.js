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

function CoinsPage() {
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
          className="section section-coin-landing"
          style={{
            backgroundImage: "url(" + require("assets/img/coin-landing.jpg") + ")"
          }} />
        {/* <LandingPageHeader /> */}
        <div className="section section-about-us mt-3">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h3 className="mini-title mb-2 mt-0">THE FOUNDERS COIN</h3>
                <h2 className="title mb-2">we build together</h2>
                <h2 className="title mb-4">we grow together</h2>
                <h5 className="description">
                  10,000 Founders Coins celebrating you; our history-making, record-breaking, culture-shifting community.
                </h5>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="section section-digital-collect mt-3"
          style={{
            backgroundImage: "url(" + require("assets/img/bg12.jpg") + ")"
          }}>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h3
                  className="mini-title mb-2 mt-0"
                  style={{ color: "#bb9772" }}
                >DIGITAL COLLECTIBLES</h3>
                <h2
                  className="title mb-4"
                  style={{ color: "#f3eadb" }}
                >worth their weight in gold</h2>
                <img
                  alt="..."
                  src={require("assets/img/coins.png")}
                ></img>
                <h5
                  className="description mt-4"
                  style={{ color: "#f3eadb" }}
                >
                  Penguin Drops is an experimental collection of NFT numismatic* gold coins; gifted to Okay Penguins holders in celebration of key milestones and special occasions.
                </h5>
                <h5
                  className="description"
                  style={{ color: "#f3eadb" }}
                >
                  *IRL, Numismatic coins are rare collectibles that have an external value above and beyond the base value of the gold they are made of.
                </h5>
                <h5
                  className="description"
                  style={{ color: "#f3eadb" }}
                >
                  Penguin Drops are basically that, on the blockchain.
                </h5>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="section section-about-us mt-0 pt-5 pb-5"
          style={{ backgroundColor: "#f3eadb" }}>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title mb-2">Leave your mark</h2>
                <h3 className="mini-title mb-2 mt-0">WITH CHARITABLE ROYALTIES</h3>
                <h5 className="description">
                  All royalties earned on Coin sales in the first 8 weeks will be donated to Okay Cares in support of mental health causes voted for by the community.
                </h5>
                <img
                  alt="..."
                  src={require("assets/img/mark.png")}
                  style={{ maxWidth: "10vw" }}
                ></img>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="section section-about-us mt-0 pt-5 pb-5"
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title mb-2">faqs</h2>
              </Col>
            </Row>
            <Row>
              <Col lg="6" md="12">
                <h3 className="title mb-2 mt-4">
                  Are Founders Coins the only Bear Drop?
                </h3>
                <h5 className="description">
                  Yes, every Penguin Drop has an attributed weight, the value of which is equivalent to that of gold.
                </h5>
                <h3 className="title mb-2">
                  What happens to my NFT when I redeem it for gold?
                </h3>
                <h5 className="description">
                  When a Penguin Drop is redeemed for gold, the NFT gets burned, and the supply is reduced.
                </h5>
                <h3 className="title mb-2">
                  Do these coins exist in the real world?
                </h3>
                <h5 className="description">
                  We are exploring a limited run of physical gold coins featuring Penguin Drop designs, exclusive to Coin holders. More details will be made available when redemption goes live in Q4, 2022.
                </h5>
              </Col>
              <Col lg="6" md="12">
                <h3 className="title mb-2 mt-4">
                  Are Founders Coins the only Bear Drop?
                </h3>
                <h5 className="description">
                  There will be future Bear Drops with unique art and will vary in collection size and weight, depending on the milestone or occasion.
                </h5>
                <h3 className="title mb-2">
                  Do I own IP of those Founders Coins?
                </h3>
                <h5 className="description">
                  No, IP is not granted on Founders Coins. Okay Bears holders will receive their own graphic pack of their bears as part of our IP pack.
                </h5>
                <h3 className="title mb-2">
                  How are coins distributed?
                </h3>
                <h5 className="description">
                  Coins are distributed randomly. Design attributes and gold values are not assigned in relation to the original Okay Bear NFT.
                </h5>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default CoinsPage;
