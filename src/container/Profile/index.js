import React from "react";
import { useHistory } from "react-router-dom";
import './formTranslaters.css'
import { Row, Col, Form, Image, Button } from "react-bootstrap";


// import "bootstrap/dist/css/bootstrap.min.css";

function ShowForm(props) {
  let history = useHistory();

  const saveHandler = () => {
    history.push("/");
  };

  return (
    <React.Fragment>
      <Row>
        {/* {/ left side /} */}
        <Col className="left-form">
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="password" placeholder="Enter your Name" />
              </Form.Group>
            </Form.Row>


            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Country</Form.Label>
              <Form.Control placeholder="Country" />
            </Form.Group>
            <Form.Group controlId="formGridAddress3">
              <Form.Label>Product</Form.Label>
              <Form.Control placeholder="yyyy/mm/dd" />
            </Form.Group>

            <Form.Group controlId="formGridAddress3">
              <Form.Label>Industry</Form.Label>
              <Form.Control placeholder="List your Industry" />
            </Form.Group>
            
            <Form.Group controlId="formGridAddress3">
              <Form.Label>Business Type</Form.Label>
              <Form.Control placeholder="List your cBusiness" />
            </Form.Group>
            

            <Form.Group controlId="formGridAddress3">
              <Form.Label>tax ID</Form.Label>
              <Form.Control placeholder="List your tax ID" />
            </Form.Group>
          </Form>
        </Col>

        {/* {/ right side /} */}

        <Col className=" imageEdit">
          <Image src="https://picsum.photos/171/180" roundedCircle />
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="textEdit">Tell us more about you</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="ButtonEdit">
        <Button variant="primary" onClick={saveHandler}>
          Save
        </Button>
      </Row>
    </React.Fragment>
  );
}

export default ShowForm;
