import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/stylesheet/HomePage.scss";

function Header(props) {
  const {modalOpened, clicked} = props
  return (
    <header>
      <div className="headerTitle">
        <Link to="/" className="B2Vietnamese"><h2>B2Vietnamese</h2></Link>
      </div>
      <div className="DropdownMenu">
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Select Country / Region
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/">Vietnam</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/">Japan</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/">Korea</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/">Chaina</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/">Europe</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="Selection">
        <button className="Button" onClick={modalOpened}>
          Login
        </button>
        <Link to="/" className="Button">
          Logout
        </Link>
        <Link to="/profile" className="editProfile">
         Create Account
        </Link>
      </div>
    </header>
  );
}

export default Header;
