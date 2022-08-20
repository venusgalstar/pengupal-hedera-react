/*

=========================================================
* Now UI Kit React - v1.5.1
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2022 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/main/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

import "assets/scss/pengupals-new.css";

// pages for this kit
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";

import HomePage from "views/HomePage.js";
import PengulandPage from "views/PengulandPage.js";
import PenguinsPage from "views/PenguinsPage.js";
import RarityToolPage from "views/RarityToolPage.js";
import ManifestoPage from "views/ManifestoPage.js";
import VisionPage from "views/VisionPage.js";
import ShopPage from "views/ShopPage.js";
import NFTMintPage from "views/NFTMintPage.js";
import ClaimPage from "views/ClaimPage.js";
// nav var
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import HashConnectProvider from "assets/api/HashConnectAPIProvider.tsx";
import { HashConnect } from "hashconnect";

const hashConnect = new HashConnect(true);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashConnectProvider hashConnect={hashConnect} debug>
    <BrowserRouter>
      <IndexNavbar />
      <Switch>
        <Route path="/home" render={(props) => <HomePage {...props} />} />
        <Route
          path="/penguland"
          render={(props) => <PengulandPage {...props} />}
        />
        <Route
          path="/penguins"
          render={(props) => <PenguinsPage {...props} />}
        />
        <Route
          path="/rarity-tool"
          render={(props) => <RarityToolPage {...props} />}
        />
        <Route
          path="/manifesto"
          render={(props) => <ManifestoPage {...props} />}
        />
        <Route
          path="/vision"
          render={(props) => <VisionPage {...props} />}
        />
        <Route
          path="/shop"
          render={(props) => <ShopPage {...props} />}
        />
        <Route
          path="/nft-mint"
          render={(props) => <NFTMintPage {...props} />}
        />
        <Route
          path="/claim"
          render={(props) => <ClaimPage {...props} />}
        />
        <Route
          path="/nucleo-icons"
          render={(props) => <NucleoIcons {...props} />}
        />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route
          path="/login-page"
          render={(props) => <LoginPage {...props} />}
        />
        <Redirect to="/home" />
        <Redirect from="/" to="/home" />
      </Switch>
    </BrowserRouter>
  </HashConnectProvider>
);
