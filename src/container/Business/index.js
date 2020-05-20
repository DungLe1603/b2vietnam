import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BusinessComponent from "../../component/Business";
import OtherBusiness from "../../component/Business/other";
import Header from '../../component/Header/Header';
import Modal from '../../component/UI/Modal';
import LoginPage from '../../component/Login/LoginPage';import { Row, Col, Container } from "react-bootstrap";


function Business(props) {
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
          <Col md="8">            
            <BusinessComponent />
          </Col>
          <Col md="4" className="mt-4">
            <div className="business-sidebar">
              <div className="panel-heading">              
                <h3>Related business</h3>
              </div>
              <div className="panel-body">
                <OtherBusiness/>
                <OtherBusiness/>
                <OtherBusiness/>
                <OtherBusiness/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Business;
