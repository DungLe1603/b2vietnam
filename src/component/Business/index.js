import React from "react";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import OtherBusiness from "../../component/Business/other";

function Business() {
  return (
    <div>
      <h1>ST United</h1>
      <Row>
        <Col md="9">
          <p className="lead">
            Bùi Ngọc Vinh
          </p>
        </Col>
        <Col md="3">              
          <Button variant="primary" href="/">
            Catch up
          </Button>
        </Col>
      </Row>
      <Card>
        <Card.Img variant="top" src="http://placehold.it/800x400" />
        <Card.Body>
          <Card.Title>ST UNITED COMPANY LTD</Card.Title>
          <Card.Text>
            <p> Tax code: 0401982434
            <br/> Industry: Information Technology
            <br/> Phone: 0905182013
            <br/> Address: 14 An Thuong 18, My An, Ngu Hanh Son District, Da Nang City
            <br/> Products: Website and mobile application</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="info-description mt-4">
        <h5>Collaborate to kick-start your software project </h5>
        <p>We create beautifully designed web apps precisely tailored to your situationWe deliver web systems of any size and complexity — from budding startup products to hi-end enterprise solutions.</p>
        <p>ST provides custom mobile application development across different platforms such as iOS and Android for consumer-facing and enterprise environment.</p>
        <p>ST provides high quality, cost-effective and reliable software development services match your specific needs, budget and timeframe. We love to competes with other firms on the grounds of quality, creativity, n' dedication.</p>
        <p>Looking for the best resources to compliment your existing team? Our talented developers are available to augment your team on a short or long term basis.</p>
      </div>
      <hr />                
      <div className="info-map mt-4">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.3119087967048!2d108.23770091433656!3d16.04929614423609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421762ef47bfbf%3A0x94a43a4a2ea325f5!2zMTQgQW4gVGjGsOG7o25nIDE4LCBC4bqvYyBN4bu5IFBow7osIE5nxakgSMOgbmggU8ahbiwgxJDDoCBO4bq1bmcgNTUwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1589951626496!5m2!1svi!2s" width="100%" height={350} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
      </div>
    </div>        
  );
}
export default Business;
