import React from "react";

import "./style.css";
import logo from "./logo.png";

function DevBar() {
  return (
    <div className="devBar">
      <img className="logo" alt="atlas logo" src={logo} />
      <h2>
        developed by:{" "}
        <a href="https://twitter.com/willvozeirao">Willian Almeida</a>
      </h2>
      <h2>
        Qualquer erro ou bug
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/forms/d/1I4IcnIXNJ3Qc1hWW8tmP0EoipUM-amwGtCkSGpdqozY/viewform?edit_requested=true"
        >
          Reporte
        </a>
      </h2>
    </div>
  );
}

export default DevBar;
