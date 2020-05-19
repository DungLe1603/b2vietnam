import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row, Form, Col, Container, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/stylesheet/HomePage.scss";
import IndustryComponent from "../../component/Industry/Industry";
import Header from '../../component/Header/Header';
import Modal from '../../component/UI/Modal';
import LoginPage from '../../component/Login/LoginPage';

function Homepage(props) {
  const [show, setShow] = useState(false);

  const showCancelHandler = () => {
    setShow(false);
  }

  const showHandler = () => {
    setShow(true);
  }

  console.log(props);
  return (
    <React.Fragment>
      <Modal show={show} modalClosed={showCancelHandler}>
        <LoginPage />
      </Modal>
      <Header modalOpened={showHandler} />
      <IndustryComponent />

      <Container>
        <Row>
          <Col style={{marginTop:"10px"}}>
            <h2> Tranlater Community</h2>
            <p>
              There are <strong>150</strong> translaters in <strong>10</strong>{" "}
              languages
            </p>
            <Form>
              <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                <Form.Label>From</Form.Label>
                <Form.Control as="select" size="sm">
                  <option>Vietnamese</option>
                  <option>Enlish</option>
                  <option>Japanese</option>
                  <option>Chinese</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                <Form.Label>To</Form.Label>
                <Form.Control as="select" size="sm">
                  <option>Vietnamese</option>
                  <option>Enlish</option>
                  <option>Japanese</option>
                  <option>Chinese</option>
                </Form.Control>
              </Form.Group>
            </Form>
            <Link  to ="/form" variant="primary" size="lg" block>
              Let's connect
            </Link>
          </Col>

          {/* right side */}
          <Col  className="listTrans">
            <Row className="imageEdit"  style={{marginTop:"10px"}}>
              <Col >
                <Image src="https://picsum.photos/150/151" roundedCircle />
                <p>Wayne Russell</p>
              </Col>
              <Col>
                <Image src="https://picsum.photos/149/149" roundedCircle />
                <p>Taylor</p>
              </Col>
              <Col>
                <Image src="https://picsum.photos/150/149"  roundedCircle />
                <p> Mia MilanMilan </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Image src="https://picsum.photos/149/150" roundedCircle />
                <p> Mia Milan</p>
              </Col>
              <Col>
                <Image src="https://picsum.photos/149/152" roundedCircle />
                <p>Jame Nguyen</p>
              </Col>
              <Col>
                <Image src="https://picsum.photos/150/152" roundedCircle />
                <p>Tony Tran</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Homepage;
