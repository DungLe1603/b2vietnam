import React from "react";
import { ButtonGroup, DropdownButton, Button } from "react-bootstrap";

import Header from "../../component/Header/Header";
import Sidebar from "../../component/UI/ButtonGroup";
import Card from "../../component/UI/card";
import StunitedImage from "../../assets/image/stUnited.image.png";
import AppleImage from "../../assets/image/apple.image.jpg";
import "../../assets/stylesheet/IndustryContainer.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const CompanyInfo = {
  company1: {
    name: "ST United",
    representative: "AAAAAAA",
    introduction: "Hello",
    image: { StunitedImage },
  },
  company2: {
    name: "Apple",
    representative: "Steve Jobs",
    introduction: "Hello from Los Angels",
    image: { AppleImage },
  },
};

function Industry() {
  const companyCard = Object.keys(CompanyInfo).map((cInfo) => {
    return [...Array(CompanyInfo[cInfo])].map((CI, i) => {
      return (
        <Card
          key={cInfo + i}
          name={CI.name}
          representative={CI.representative}
          introduction={CI.introduction}
          image={CI.image}
        />
      );
    });
  });

  return (
    <React.Fragment>
      <Header />
      <div className="IndustryContainer">
        <div className="Sidebar">
          <Sidebar />
        </div>
        <div className="companyCard">
          <h1>Information about Apparel</h1>
          <div className="CompanyList">{companyCard}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Industry;
