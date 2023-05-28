import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/pages/_about.scss";

function About() {
  const [aboutData, setaboutData] = useState([]);
  useEffect(() => {
    axios.get("../data_about.json").then(function (res) {
      setaboutData(res.data);
    });
  }, []);
  if (!aboutData.length) {
    return <div className="loader"></div>;
  }
  return (
    <>
      <div className="content__rules">
        <Header />
        <Banner bannerClass={"banner__aPropos-pic"} />
        {aboutData.map((item, i) => {
          return (
            <Collapse
              key={item.title + i}
              title={item.title}
              content={item.content}
              i={i}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}
export default About;
