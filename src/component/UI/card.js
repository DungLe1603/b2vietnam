import React from "react";
import { Link } from "react-router-dom";
import { CardDeck, Card, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/stylesheet/Card.scss";

function card(props) {
  const { name, representative, introduction, image } = props;
  return (
    <Card border="primary" className="Card">
      <Link to="/IntroductionComapny">
        <Card.Header style={{fontSize:"20px",color:"#004d40"}}>Company : {name}</Card.Header>
      </Link>
      <Card.Body>
        <Card.Img src={image} />
        
        <Card.Title> Products : {introduction}</Card.Title>
        <Card.Text>Address : {representative}</Card.Text>
        <button >
          <Link to=""> Let's chat</Link>
        </button>
      </Card.Body>
    </Card>
  );
}

export default card;
