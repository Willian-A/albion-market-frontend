import React from "react";
import "./style.css";

function ResultBoxes({ data }) {
  var enchantType;

  /*if (data.quality === 1) {
    enchantType = "green";
  } else if (data.quality === 2) {
    enchantType = "blue";
  } else if (data.quality === 3) {
    enchantType = "purple";
  } else {
    enchantType = "null";
  }*/

  document.getElementById("city-container").style.visibility = "visible";
  document.getElementById("city-container").style.opacity = "1";

  return (
    <div className="city">
      <h2>{data.city}</h2>
      <h3> {data.sell_price_min}</h3>
      <mark className={enchantType}>encantamento nível {data.quality}</mark>
    </div>
  );
}

export default ResultBoxes;
