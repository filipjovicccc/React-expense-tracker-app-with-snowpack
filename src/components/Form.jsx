import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="wrapper">
      <div>
        <label>Title</label>
        <input type="text" />
      </div>
      <div>
        <label>Amount</label>
        <input type="number" min="0.00" step="1.0" />
      </div>
      <div>
        <label>Date</label>
        <input type="date" min="2020-01-01" max="2022-11-11" />
      </div>
    </div>
  );
}

export default Form;
