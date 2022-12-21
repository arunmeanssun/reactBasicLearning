import React from 'react';
import ReactDOM from 'react-dom';

import "../App.css";
import "./appStyles.css";

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>Portal's Demo</h1>, document.getElementById("portal-root")
  )
}

export default PortalDemo;