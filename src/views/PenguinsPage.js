import React from "react";

import styled from "styled-components";
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
import NftCard from '../components/NftCard.js';

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
      <div
        className="section section-nucleo-icons"
        style={{ backgroundColor: "#ffd4ff" }}>
        <Container className="mt-5">
          <Row>
            <NftCard nftUrl={require("assets/img/team-avatar-2.png")} nftId="Penguin #872" ownerId="0.0.1094442" nftPrice={5000} ></NftCard>
            <NftCard nftUrl={require("assets/img/team-avatar-2.png")} nftId="Penguin #872" ownerId="0.0.1094442" nftPrice={5000} ></NftCard>
            <NftCard nftUrl={require("assets/img/team-avatar-2.png")} nftId="Penguin #872" ownerId="0.0.1094442" nftPrice={5000} ></NftCard>
            <NftCard nftUrl={require("assets/img/team-avatar-2.png")} nftId="Penguin #872" ownerId="0.0.1094442" nftPrice={5000} ></NftCard>
            <NftCard nftUrl={require("assets/img/team-avatar-2.png")} nftId="Penguin #872" ownerId="0.0.1094442" nftPrice={5000} ></NftCard>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default PenguinsPage;
