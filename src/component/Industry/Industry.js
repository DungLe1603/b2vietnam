import React from "react";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Itimage from "../../assets/image/IT image.jpg";
import Agricultureimage from "../../assets/image/Agriculture imge.jpg";
import Apparelimage from "../../assets/image/apprel image.jpg";
import Educationimage from "../../assets/image/Education.jpg";
import manufacturingimage from "../../assets/image/manufacturing image.jpg";
import medicalimage from "../../assets/image/Medical image.jpg";
import serviceimage from "../../assets/image/Service image.jpg";
import textileimage from "../../assets/image/Textile image.jpg";
import "../../assets/stylesheet/Industry.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';

function Industry() {
  return (
    <div className="Container">
      <div className="Header">
        <h1>Industry</h1>
        <p>Communicate and find the needs that are right for you</p>
      </div>
      <div className="IndustryList">
        <ul className="list-category">
          <li>
            <Link to="/information-technology" className="list-category__link">
              <div className="list-category__img">
                <img src={Itimage} />
              </div>
              <div className="list-category__info">
                <h3>Information Technology</h3>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/agriculture" className="list-category__link">
              <div className="list-category__img">
                <img src={Agricultureimage} />
              </div>
              <div className="list-category__info">
                <h3>Agriculture</h3>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/apparel" className="list-category__link">
              <div className="list-category__img">
                <img src={Apparelimage} />
              </div>
              <div className="list-category__info">
                <h3>Apparel</h3>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/" className="list-category__link">
              <div className="list-category__img">
                <img src={Educationimage} />
              </div>
              <div className="list-category__info">
                <h3>Education</h3>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/" className="list-category__link">
              <div className="list-category__img">
                <img src={manufacturingimage} />
              </div>
              <div className="list-category__info">
                <h3>Manufacturing</h3>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/" className="list-category__link">
              <div className="list-category__img">
                <img src={serviceimage} />
              </div>
              <div className="list-category__info">
                <h3>Service</h3>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/" className="list-category__link">
              <div className="list-category__img">
                <img src={textileimage} />
              </div>
              <div className="list-category__info">
                <h3>Textile</h3>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/" className="list-category__link">
              <div className="list-category__img">
                <img src={medicalimage} />
              </div>
              <div className="list-category__info">
                <h3>Medical</h3>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Industry;
