import React from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = styled(ToastContainer).attrs({
  position: "bottom-center",
  autoClose: 3000,
  hideProgressBar: true,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnVisibilityChange: true,
  draggable: false,
  pauseOnHover: true
})`
  font-weight: bold;
  text-align: center;
`;

const ToastComponent = ({ ...props }) => <Toast {...props} />;

export default ToastComponent;
