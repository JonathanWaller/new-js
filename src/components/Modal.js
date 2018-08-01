import React from "react";
import { createPortal } from "react-dom";

const Modal = props =>
  createPortal(props.children, document.getElementById("portal-container"));

export default Modal;
