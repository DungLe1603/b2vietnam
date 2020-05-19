import React from "react";
import { Link } from "react-router-dom";
import { CardDeck, Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/stylesheet/Card.scss";

function card(props) {
  console.log(props);

  const { name, representative, introduction, image } = props;
  return (
    <div className="Card">
      <Card border="primary">
        <Link to="">
          <Card.Header>Company : {name}</Card.Header>
        </Link>
        <Card.Body>
          <Card.Img src={image} />
          <Card.Title>Representative : {representative}</Card.Title>
          <Card.Text> Introduction : {introduction}</Card.Text>
          <button>Let's chat</button>
        </Card.Body>
      </Card>

      <br />
    </div>
  );
}

export default card;
