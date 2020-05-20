import React from "react";
import { Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/stylesheet/HomePage.scss";

function OtherBusiness() {
  return (
    <div className="mt-4">
      <Row>
        <Col md="3">
            <img src="http://placehold.it/80x80" />
        </Col>
        <Col md="9">
          <h5>Business name</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Col>
      </Row>
      <hr/>
    </div>
  );
}

export default OtherBusiness;
