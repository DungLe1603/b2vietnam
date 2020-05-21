import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Business from "../../component/Industry/Business";
import Sidebar from "../../component/Industry/Sidebar";
import Header from '../../component/Header/Header';
import Modal from '../../component/UI/Modal';
import LoginPage from '../../component/Login/LoginPage';
import { Row, Col, Container, Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";


function Industry() {
  const [show, setShow] = useState(false);

  const showCancelHandler = () => {
    setShow(false);
  }

  const showHandler = () => {
    setShow(true);
  }

  return (
    <React.Fragment>
      <Modal show={show} modalClosed={showCancelHandler}>
        <LoginPage />
      </Modal>
      <Header modalOpened={showHandler} />

      <Navbar bg="light" variant="light" className="mt-4 px-5">
        <Nav className="mr-auto">
          <p>what are you interested in?</p>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
              
      <div className="m-5">
        <Row>
          <Col md="3">
            <Sidebar />
          </Col>
          <Col md="9">
            <div className="business-session">
              <h3 className="mb-3">List Businesses</h3>
              <div className="business-menu">
                <Business/>
                <Business/>
                <Business/>
                <Business/>
                <Business/>
                <Business/>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}

export default Industry;
