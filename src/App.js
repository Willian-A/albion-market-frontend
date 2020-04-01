import React, { useState } from "react";
import api from "./services/api.js";

import SearchForm from "./components/searchForm";
import DevBar from "./components/devBar";
import ErrorParse from "./components/error";

function App() {
  const [result, setResult] = useState([]);

  async function sendData(data) {
    const response = await api.post("/search", data);
    setResult(response.data.search);
  }

  return (
    <div className="App">
      <SearchForm onSubmit={sendData} />
      <div id="city-container" className="city-container">
        {ErrorParse(result)}
      </div>
      <DevBar />
    </div>
  );
}

export default App;
