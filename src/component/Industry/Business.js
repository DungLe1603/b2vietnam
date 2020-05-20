import React from "react";
import { Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/stylesheet/HomePage.scss";

function Business() {
  return (
    <Col md="6" classname="mt-4">
      <h3>Business name</h3>
      <Row>
        <Col md="4">
            <img src="http://placehold.it/130x130" />
        </Col>
        <Col md="8">
          <h5>Business name</h5>
          <p>
            Phone: 1234567890 <br/>
            Email: helo@business.com <br/>
            Address: 14 An thuong 18, da Nang <br/>
            Other informations 
          </p>
        </Col>
      </Row>
      <hr/>
    </Col>
  );
}

export default Business;
