import React, { useEffect } from "react";

import Backdrop from "./Backdrop";
import '../../assets/stylesheet/Modal.scss';  

function Modal(props) {
  const { show, modalClosed } = props;
  
  // useEffect() {

  // }
  return (
    <React.Fragment>
      <Backdrop show={show} clicked={modalClosed} />
      <div 
        className="Modal"
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0'
        }}  
      >{props.children}</div>
    </React.Fragment>
  );
}

export default Modal;
