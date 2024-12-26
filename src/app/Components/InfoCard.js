import React from "react";
import { BarChart2, Infinity } from "lucide-react";
import "../CSS/Components/InfoCard.css";

const InfoGrid = () => {
  return (
    <div className="info-grid-container">
      <div className="info-grid"></div>
    </div>
  );
};

const InfoCard = ({ title, icon, items }) => {
  return (
    <div className="info-card">
      <div className="info-card-header">
        {React.cloneElement(icon, { className: "info-icon" })}
        <h2 className="info-card-title">{title}</h2>
      </div>
      <ul className="info-card-list">
        {items.map((item, index) => (
          <li key={index} className="info-list-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoGrid;
