import React from "react";
import { Col, Row, Image,Navbar,Nav,Button } from "react-bootstrap";

function personalInfo() {
  return (
    <React.Fragment>
      
          <Navbar style={{backgroundColor:"#006064"}} variant="dark">
    <Navbar.Brand  style={{fontSize:"30px"}} href="#home">B2Vietnam</Navbar.Brand>
    <Nav className="mr-auto">
     
    </Nav>
    {/* <Form inline>
      <FormControl  style={{ paddingRight:"100px"}}type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
  </Navbar>
      <Row>
   
      </Row>
      <Row>
      
        <Col>
          <div className="container">
            <Image
              style={{ paddingTop: "50px", marginLeft:"60px"}}
              width="400"
              height="400"
              variant="top"
              src="https://i.pinimg.com/originals/8d/e7/ed/8de7ed3e624a5f4bdf3ffaaca02ea52a.jpg"
             
            />
          </div>
          <Button style={{marginTop:"70px", marginLeft:"160px"}}> MESSAGE NOW </Button>
        </Col>
        <Col>
          <div className="container">
            <h1 style={{ paddingTop: "40px" }}> Luong Thi Thuy</h1>
            <h4>PERSONAL SUMMARY</h4>
            <p>
              A multi-skilled, reliable & talented translator with a proven
              ability to translate written documents from a source language to a
              target language. A quick learner who can absorb new ideas & can
              communicate clearly & effectively with people from all social &
              professional backgrounds. Well mannered, articulate & fully aware
              of diversity & multicultural issues. Flexible in the ability to
              adapt to challenges when they arise & at the same time remaining
              aware of professional roles & boundaries.
            </p>
            <h4> WORK EXPERIENCE : More than 5 years</h4>

            <p>
              <strong>
                Interpreting Company – Coventry TRANSLATOR June 2008 - Present{" "}
              </strong>
              <p></p>
              Working freelance for a translation agency providing a translation
              and interpretation service to clients where needed. Involved
              converting documents and articles from one language into another
              and ensuring that the finished converted articles relay the
              intended message as clearly as possible.
            </p>

            <h4>ACADEMIC QUALIFICATIONS</h4>
            <p>BA (Hons) Translation Media & French Nuneaton University</p>
            <p> Ielts Academy: 8.0</p>
            <h4>LANGUAGES</h4>
            <p>German, Spanish, Italian,French, English</p>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default personalInfo;
