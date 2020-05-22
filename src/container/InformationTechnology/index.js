import React from "react";
      
import { CardColumns ,Navbar, Nav,Form, Button,FormControl} from "react-bootstrap";

import Header from "../../component/Header/Header";
import Card from "../../component/UI/card";
import StunitedImage from "../../assets/image/stUnited.image.png";
import AppleImage from "../../assets/image/apple.image.jpg";
import "../../assets/stylesheet/IndustryContainer.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const CompanyInfo = {
  company1: {
    name: "ST United",
   
    introduction:
    "produce software: android, IOS, Web Pages",
    representative: "14 An Thuong 18, Danang",
    image: { StunitedImage },
  },
  company2: {
    name: "FPT Software (FSoft)",
   
    introduction: "produce software: android, IOS, Web, AI, Desktop",
    representative: "268B Nam Ky Khoi Nghia, Ward 8, District 3, Ho Chi Minh City",
    image: { AppleImage },
  },
  company3: {
    name:  "HCA Software",
    introduction: "Develop Web Pages",
    representative: "33 Nam Ky Khoi Nghia, Ward 8, District 3, Ho Chi Minh City",
    
    image: { AppleImage },
  },
  company4: {
    name: "Global CyberSoft Company",
    introduction: "Develop Android",
    representative: "2 , Le Ba Ward 8, District 3, Ha Noi City",
   
    image: { AppleImage },
  },
  company5: {
    name:"GlobalCompany",
    representative:"268B Nam Ky Khoi Nghia, Ward 8, District 3, Ha Noi City",
    introduction:  "produce software: android, IOS, Web",
    image: { AppleImage },
  },
  company6: {
    name: "ACV CyberSoft Company",
    representative: "268B Nam Ky Khoi Nghia, Ward 8, District 3, Ho Chi Minh City",
    introduction: "Software: Desktop",
    image: { AppleImage },
  },
  company7: {
    name:"ACV CyberSoft Company",
    representative: "268B Nam Ky Khoi Nghia, Ward 8, District 3, Ho Chi Minh City",
    introduction:  "Software : IOS",
    image: { AppleImage },
  },
  company8: {
    name: "BPO CyberSoft Company",
    representative:  "268 Nam Ky, Ward 8, District 3, Ho Chi Minh City",
    introduction: "Software : AI, Software: Web",
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
        />
      );
    });
  });

  return (
    <React.Fragment>
      {/* <Header /> */}
      <Navbar style={{paddingTop:"0px"}} bg="light" variant="light" className="mt-4 px-5">
        <Nav className="mr-auto">
          <p>what are you interested in?</p>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
      <div className="IndustryContainer">
        <div className="companyCard">
          <h1>Information about Information Technology</h1>
          <div className="CompanyList">
            <CardColumns>{companyCard}</CardColumns>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Industry;
