/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function HomePage() {
  let pageHeader = React.createRef();

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
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/home-bg.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        {/* <div className="cloud-image-1">
          <img src={require("assets/img/cloud1.png")}></img>
        </div>
        <div className="cloud-image-2">
          <img src={require("assets/img/cloud2.png")}></img>
        </div>
        <div className="cloud-image-3">
          <img src={require("assets/img/cloud3.png")}></img>
        </div>
        <div className="cloud-image-4">
          <img src={require("assets/img/cloud4.png")}></img>
        </div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png")}
            ></img>
              <h1 className="h1-seo">CLUB PENGUIN</h1>
            <h3>Fun P2E game. Anyone can become rich. TRY IT</h3>
          </div>
        </Container> */}
      </div>
    </>
  );
}

export default HomePage;
