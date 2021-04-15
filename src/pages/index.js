import React from "react";

import StoreLayout from "../components/Layout/StoreLayout";
import Home from "../components/Home/Home";
import SEO from "../components/SEO";

import "typeface-roboto";
import "../styles/index.scss";
import "../styles/tailwind.css";

const IndexPage = () => (
  <StoreLayout>
    <SEO title="Home" keywords={[`wood working`, `life-style`, `cool`]} />
    <Home />
  </StoreLayout>
)

export default IndexPage
