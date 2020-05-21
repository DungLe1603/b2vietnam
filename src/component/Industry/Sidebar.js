import React from "react";
import { Row, Col, Image } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/stylesheet/HomePage.scss";

function Sidebar() {
  return (
    <div className="industry-menu">
      <h5>Categories</h5>
      <ul className="industry-list">
        <li className="active"><a href="/">Information technology</a></li>
        <li className><a href="/">Agriculture</a></li>
        <li className><a href="/">Apparel</a></li>
        <li className><a href="/">Education</a></li>
        <li className><a href="/">manufacturing</a></li>
        <li className><a href="/">Service</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
