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
        <Link to="/" className="B2Vietnamese"><h2>B2Vietnam</h2></Link>
      </div>
      <div className="DropdownMenu">
       
      </div>
      <div className="Selection">
        <button className="Button" onClick={modalOpened}>
          Login
        </button>
      
        <Link to="/profile" className="editProfile">
         Create Account
        </Link>
      </div>
    </header>
  );
}

export default Header;
