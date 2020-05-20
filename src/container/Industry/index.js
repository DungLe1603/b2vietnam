import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Business from "../../component/Industry/Business";
import Header from '../../component/Header/Header';
import Modal from '../../component/UI/Modal';
import LoginPage from '../../component/Login/LoginPage';import { Row, Col, Container } from "react-bootstrap";


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
      
      <Container>
        <Row>
          <Col md="3">            
            This is side bar
          </Col>
          <Col md="9">
            <div className="business-session">
              <h3>List businesses</h3>
              <div className="business-menu">
                <Row>
									<Business/>
									<Business/>
									<Business/>
									<Business/>
									<Business/>
									<Business/>
								</Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Industry;
