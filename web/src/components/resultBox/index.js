import React from "react";
import "./style.css";

function ResultBoxes({ data }) {
  var enchantType;

  if (data.quality === 2) {
    enchantType = "iron ";
    data.quality = "Bom - " + data.quality;
  } else if (data.quality === 3) {
    enchantType = "bronze";
    data.quality = "Excepcional - " + data.quality;
  } else if (data.quality === 4) {
    enchantType = "silver";
    data.quality = "Excelente - " + data.quality;
  } else if (data.quality === 5) {
    enchantType = "gold";
    data.quality = "Obra-prima - " + data.quality;
  } else {
    enchantType = "null";
    data.quality = "Padrão - " + data.quality;
  }

  document.getElementById("city-container").style.visibility = "visible";
  document.getElementById("city-container").style.opacity = "1";

  return (
    <div className="city">
      <h2>{data.city}</h2>
      <h3> {data.sell_price_min}</h3>
      <mark className={enchantType}>Item de qualidade {data.quality}</mark>
    </div>
  );
}

export default ResultBoxes;
