import React from "react";
import {  Col, Row, Image } from "react-bootstrap";

function personalInfo() {
  return (
    <React.Fragment>
      <Row>
      <Col>
        <div className="container"> 
        <Image  style={{paddingTop:"50px"}}variant="top"src="https://picsum.photos/371/380" roundedCircle  />
         </div></Col>
         <Col>
        <div className="container">
        
        <h1 style={{paddingTop:"40px"}}> Genny Nguyen</h1>
        <h4>PERSONAL SUMMARY</h4>
        <p>A multi-skilled, reliable & talented translator with a proven ability to translate
written documents from a source language to a target language. A quick learner who
can absorb new ideas & can communicate clearly & effectively with people from all
social & professional backgrounds. Well mannered, articulate & fully aware of
diversity & multicultural issues. Flexible in the ability to adapt to challenges when
they arise & at the same time remaining aware of professional roles & boundaries.</p>
        <h4> WORK EXPERIENCE : More than 5 years</h4>

<p><strong>Interpreting Company – Coventry
TRANSLATOR June 2008 - Present </strong><p></p>
Working freelance for a translation agency providing a translation and interpretation
service to clients where needed. Involved converting documents and articles from
one language into another and ensuring that the finished converted articles relay the
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
