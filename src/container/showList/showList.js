import React from "react";
import { Form, Col, CardColumns, Image, Button, Card} from "react-bootstrap";
import './showList.css'
import { Link } from "react-router-dom";


function showLists() {
  return (
    <React.Fragment>
      <h1 mt-3>Search User</h1>
      <div className="container-fluid">
      <Form.Row className="o-header">
        <Col>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Certification</Form.Label>
            <Form.Control />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Experience</Form.Label>
            <Form.Control as="select">
              <option>0-1 year</option>
              <option>1-3 years</option>
              <option>3-5 years</option>
              <option> More than 5 years</option>
            </Form.Control>
          </Form.Group>
        </Col>

        <Col>
         
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>
        </Col>
        <Col className=" ButtonEdit  d-flex align-self-center pl">
        
          <Button variant="primary" type="submit" >   
            APLLY
          </Button>
        </Col>
      </Form.Row>
      </div>
     

{/* List of translators */}
<div className="container"> 
    <CardColumns>
  <Card className=" personInfo">
    <Image  className="text-center p-2"variant="top"src="https://picsum.photos/150/150" roundedCircle  />
    <Card.Body>
      <Card.Title>Name</Card.Title>
      <Card.Footer>
      <small className="text-muted"> 
      <p> Come from </p>
       <p> Experience </p></small>
       <button> <Link to ="/infor"> learn More</Link></button>
    </Card.Footer>
    </Card.Body>
  </Card>
  <Card>
    <Image  className="text-center p-3" variant="top"src="https://picsum.photos/151/150" roundedCircle  />
    <Card.Body>
      <Card.Title>Name</Card.Title>    
    
    <Card.Footer>
      <small className="text-muted"> 
      <p> Come from </p>
       <p> Experience </p></small>
       <button> learn More</button>
    </Card.Footer>
    </Card.Body>
  </Card>
  <Card>
    <Image variant="top"src="https://picsum.photos/150/149" roundedCircle  />
    <Card.Body>
      <Card.Title>Name</Card.Title>    
    
    <Card.Footer>
      <small className="text-muted"> 
      <p> Come from </p>
       <p> Experience </p></small>
       <button> learn More</button>
    </Card.Footer>
    </Card.Body>
  </Card>
  <Card>
    <Image variant="top"src="https://picsum.photos/149/150"roundedCircle  />
    <Card.Body>
      <Card.Title>Name</Card.Title>    
    
    <Card.Footer>
      <small className="text-muted"> 
      <p> Come from </p>
       <p> Experience </p></small>
       <button> learn More</button>
    </Card.Footer>
    </Card.Body>
  </Card>
  <Card>
    <Image variant="top"src="https://picsum.photos/171/180" style={{ widht:'150px', height:'150px' }}roundedCircle  />
    <Card.Body>
      <Card.Title>Name</Card.Title>    
    
    <Card.Footer>
      <small className="text-muted"> 
      <p> Come from </p>
       <p> Experience </p></small>
       <button> learn More</button>
    </Card.Footer>
    </Card.Body>
  </Card>
  <Card>
    <Image variant="top"src="https://picsum.photos/171/180"style={{ widht:'150px', height:'150px' }} roundedCircle  />
    <Card.Body>
      <Card.Title>Name</Card.Title>    
    
    <Card.Footer>
      <small className="text-muted"> 
      <p> Come from </p>
       <p> Experience </p></small>
       <button> learn More</button>
    </Card.Footer>
    </Card.Body>
  </Card>
</CardColumns>
</div>
    </React.Fragment>
  );
}

export default showLists;
