import React from 'react';
import {Form, Col,Row,Image} from "react-bootstrap";
import './formTranslaters.css'
import { Link } from "react-router-dom";
function showForm () {
 
  
  return (
      <React.Fragment>
    <Row>
      {/* left side */}
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

          <Form.Check inline label="Male" type="checkbox" />
          <Form.Check inline label="Female" type="checkbox" />
          <Form.Check inline label="Other" type="checkbox" />

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Country</Form.Label>
            <Form.Control placeholder="Country" />
          </Form.Group>
          <Form.Group controlId="formGridAddress3">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control placeholder="yyyy/mm/dd" />
          </Form.Group>

          <Form.Group controlId="exampleForm.SelectCustomSizeSm">
            <Form.Label>Experience</Form.Label>
            <Form.Control as="select" size="sm">
              <option>0-1 year</option>
              <option>1-3 years</option>
              <option>3-5 years</option>
              <option> More than 5 years</option>
              <option></option>
            </Form.Control>
          </Form.Group> 

          <Form.Group controlId="formGridAddress3">
            <Form.Label>Language</Form.Label>
            <Form.Control placeholder="List your languages that you can provide " />
          </Form.Group>
          <Form.Group controlId="formGridAddress3">
            <Form.Label>Certificate</Form.Label>
            <Form.Control placeholder="List your certificates" /> 
          </Form.Group>
        </Form> 
      </Col>


      {/* right side */}

      <Col className=" imageEdit">
        <Image src="https://picsum.photos/171/180" roundedCircle />
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="textEdit">Tell us more about you</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
      </Col>
    </Row>
    <Row className="ButtonEdit">
        <button variant="primary">
    <Link  to ="/list"  size="lg" block>
              save
            </Link>
            
            
</button>
    </Row>
    </React.Fragment>
  );
};

export default showForm;