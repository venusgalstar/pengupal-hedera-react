/*eslint-disable*/
import { padding } from "@mui/system";
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
      <div
        className="page-header clear-filter"
        filter-color="blue"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "57px",
          backgroundColor: "#ffd4ff"
        }}>
        <img
          className="mt-0"
          alt="..."
          src={require("assets/img/home-bg.jpg")}
          style={{
            height: "calc(100vh - 57px)",
            margin: "0",
            maxWidth: "none"
          }}
        ></img>
      </div>
    </>
  );
}

export default HomePage;
