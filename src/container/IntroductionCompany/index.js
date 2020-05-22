import React from "react";
import { Button,Navbar,Nav } from "react-bootstrap";

import STUnitedImage from "../../assets/image/stUnited.jpg";

import "../../assets/stylesheet/IntroductionIndustry.scss";

function IntroductionCompany() {
  return (
    <React.Fragment>
      <Navbar style={{backgroundColor:"#006064"}} variant="dark">
    <Navbar.Brand  style={{fontSize:"30px"}} href="/">B2Vietnam</Navbar.Brand>
    <Nav className="mr-auto">
     
    </Nav>
    {/* <Form inline>
      <FormControl  style={{ paddingRight:"100px"}}type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
  </Navbar>
    <div className="container">
         
      <div className="middleContainer">
        

        
        <div className="CompanyName">
          <h1 style={{marginTop:"20px"}}>ST United</h1>
        </div>
        <div className="SubTitle">
          <p>
            ST SOFTWARE WE OFFER A WEALTH OF SERVICES TO ADDRESS YOUR TECHNOLOGY
            NEEDS
          </p>
          <Button className="Button">Let's chat</Button>
        </div>
        <img src={STUnitedImage} alt="software company" />
        <hr />
        <h3>Welcome to our company</h3>
        <h5>*Web App Development</h5>
        <p>
          We create beautifully designed web apps precisely tailored to your
          situationWe deliver web systems of any size and complexity — from
          budding startup products to hi-end enterprise solutions.
        </p>
        <h5>*Mobile App Development</h5>
        <p>
          ST provides custom mobile application development across different
          platforms such as iOS and Android for consumer-facing and enterprise
          environment.
        </p>
        <h5>*Custom Software Development</h5>
        <p>
          ST provides high quality, cost-effective and reliable software
          development services match your specific needs, budget and timeframe.
          We love to competes with other firms on the grounds of quality,
          creativity, n’ dedication.
        </p>
        <h5>*Dedicated Team</h5>
        <p>
          Dedicated Team model of cooperation provides high-quality software
          development services for our clients. Our Dedicated Teams offer
          clients a simple, affordable answer to build-up of any software
          development project. Team sizes are adjusted to accommodate changing
          requirements and other needs.
        </p>
        <h5>*Technology Consulting</h5>
        <p>
          Whether you are optimizing costs, rolling out new IT initiatives, or
          identifying new growth opportunities, ST offers technology and
          software consulting services to help you respond to change and
          transform your business.
        </p>
        <h5>*AI/Machine Learning</h5>
        <p>
          Using the power of machine learning tools and technologies, our AI
          experts and development team offer comprehensive and cutting-edge
          solutions to your current or potential business needs.
        </p>
        <br />
        <div className="GoogleMap">
          <iframe
            className="GMComponent"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15336.935160114166!2d108.2410054!3d16.0533534!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf8f0c2b2ffd3aa2e!2sST%20UNITED%20SOFTWARE%20COMPANY!5e0!3m2!1sja!2s!4v1590048054139!5m2!1sja!2s"
          ></iframe>
        </div>
      </div>
      <div className="SecondVersion">
        <div>
          
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}

export default IntroductionCompany;
