import React from "react";
import "./Expences.css";

function Expences() {
  return (
    <div className="expences">
      <div className="expences-area">
        <div className="date-area">November 3th 2021</div>
        <div className="price-area">$50</div>
      </div>
      <div className="expences-area">
        <div className="date-area">Octobar 28 2021</div>
        <div className="price-area">$25</div>
      </div>
      <div className="expences-area">
        <div className="date-area">June 5 2021</div>
        <div className="price-area">$42</div>
      </div>
    </div>
  );
}

export default Expences;
