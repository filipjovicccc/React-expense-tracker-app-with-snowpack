import React from "react";
import "./App.css";
import Form from "./components/Form.jsx";
import Expences from "./components/Expences.jsx";
function App() {
  return (
    <div className="App">
      <h1>Expence tracker app</h1>
      <Form />
      <Expences />
    </div>
  );
}
export default App;
