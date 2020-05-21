import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/stylesheet/HomePage.scss";

function Business() {
  return (
    <div classname="mt-4">
      <Row>
        <Col md="2">
            <img src="http://placehold.it/130x130" />
        </Col>
        <Col md="4">
          <h5><Link src="/">Business name</Link></h5>
          <p>
            Phone: 1234567890 <br/>
            Email: helo@business.com <br/>
            Address: 14 An thuong 18, da Nang <br/>
            Demand: Sell
          </p>
        </Col>
        <Col md="6">
          <div className="product-menu">
            <Row className="product-item">
              <Col md="2">
                <Link src="/">
                  <Image src="http://placehold.it/300x300" thumbnail />
                </Link>
              </Col>
              <Col md="10">
                <p>This is a new product abczyx, introduce something about it</p>
              </Col>
            </Row>
            <Row className="product-item">
              <Col md="2">
                <Image src="http://placehold.it/300x300" thumbnail />
              </Col>
              <Col md="10">
                <p>This is a new product abczyx, introduce something about it</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <hr/>
    </div>
  );
}

export default Business;
