import React, { useState } from "react";

import "./style.css";

function SearchForm({ onSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemQuality, setItemQuality] = useState("");

  async function submitData(e) {
    e.preventDefault();
    await onSubmit({
      itemName,
      itemQuality
    });
  }
  return (
    <div className="form">
      <strong>MARKETPLACE</strong>
      <form onSubmit={submitData}>
        <div className="input-box">
          <label>Nome do Item</label>
          <input
            type="text"
            className="inputs"
            placeholder="EX: Arco de Guerra do Mestre"
            name="itemName"
            id="itemName"
            value={itemName}
            onChange={e => setItemName(e.target.value)}
          />
        </div>
        <div className="input-box">
          <label>Qualidade do Item</label>
          <input
            className="inputs"
            type="number"
            placeholder="EX: De 1 a 5"
            name="itemQuality"
            id="itemQuality"
            value={itemQuality}
            onChange={e => setItemQuality(e.target.value)}
          />
        </div>

        <button type="submit">Pesquisar</button>
      </form>
    </div>
  );
}

export default SearchForm;
