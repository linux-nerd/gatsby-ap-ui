import React from "react";
import "../theme/index.scss";
import Layout from "../components/layout/Layout";

const LandingPage = () => {
  const social = [
    { url: "#", icon: "linkedin" },
    { url: "#", icon: "github" },
    { url: "#", icon: "twitter" },
    { url: "#", icon: "fb" }
  ];
  return <Layout social={social} />;
};
export default LandingPage;
