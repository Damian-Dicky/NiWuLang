import React from 'react';
import { BarChart2, Infinity } from 'lucide-react';
import "../CSS/Components/InfoCard.css";

const InfoGrid = () => {
  return (
    <div className="info-grid-container">
      <div className="info-grid">
        <InfoCard 
          title="Our Expertise" 
          icon={<BarChart2 size={48} />}
          items={[
            "Earth-Filling and Earth-Cutting",
            "Excavation Works",
            "Dam and Canal Works",
            "Road Works and Highways",
            "SEZ's Development",
            "Township Development",
            "Mining Transportation Works"
          ]}
        />
        <InfoCard 
          title="Our Commitment" 
          icon={<Infinity size={48} />}
          items={[
            "Quality projects delivered on time and within budget",
            "Prioritizing safety of employees, subcontractors, and the public",
            "Commitment to sustainable practices and materials",
            "15+ years experience with 10 million+ cubic meter earth filling"
          ]}
        />
      </div>
    </div>
  );
};

const InfoCard = ({ title, icon, items }) => {
  return (
    <div className="info-card">
      <div className="info-card-header">
        {React.cloneElement(icon, { className: 'info-icon' })}
        <h2 className="info-card-title">{title}</h2>
      </div>
      <ul className="info-card-list">
        {items.map((item, index) => (
          <li key={index} className="info-list-item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default InfoGrid;