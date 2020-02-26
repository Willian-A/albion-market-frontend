import React from "react";
import "./styles.css";

import ResultBoxes from "../resultBox";

function ErrorParse(response) {
  if (response !== undefined) {
    if (response === false) {
      document.getElementById("city-container").style.visibility = "visible";
      document.getElementById("city-container").style.opacity = "1";

      return (
        <div className="error-alert">
          <h2>Algum Erro Foi Encontrado</h2>
          <h3>O nome do item e/ou a qualidade estão erradas</h3>
        </div>
      );
    } else {
      return response.map(search => (
        <ResultBoxes key={Math.random()} data={search} />
      ));
    }
  }
}

export default ErrorParse;
