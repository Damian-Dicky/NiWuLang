"use client";

import "../CSS/about.css";
import "../CSS/Components/Navbar.css";
import React, { useState, useEffect } from 'react';
import { Tool, Truck, Users, Leaf, Mail, Phone, MapPin } from 'lucide-react';
import Navbar from "../Components/Navbar";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('expertise');
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectCount(prevCount => (prevCount < 500 ? prevCount + 1 : prevCount));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const TabContent = ({ id, title, items }) => (
    <div className={`tab-content ${activeTab === id ? 'active' : ''}`}>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="parent">
       <Navbar />
       <div className="about-us-container">
      <h1 className="page-title">About LTPS INFRA PVT. LTD.</h1>
      
      <div className="info-grid">
        <div className="info-card">
          <h2 className="card-title">Our Expertise</h2>
          <ul className="expertise-list">
            <li>Earth-Filling and Earth-Cutting</li>
            <li>Excavation Works</li>
            <li>Dam and Canal Works</li>
            <li>Road Works and Highways</li>
            <li>SEZ's Development</li>
            <li>Township Development</li>
            <li>Mining Transportation Works</li>
          </ul>
        </div>
        
        <div className="info-card">
          <h2 className="card-title">Our Commitment</h2>
          <ul className="commitment-list">
            <li>Quality projects delivered on time and within budget</li>
            <li>Prioritizing safety of employees, subcontractors, and the public</li>
            <li>Commitment to sustainable practices and materials</li>
            <li>15+ years experience with 10 million+ cubic meter earth filling</li>
          </ul>
        </div>
      </div>
      
      <div className="go-green-section">
        <h2 className="card-title">Our Go-Green Policy</h2>
        <p>
          We are committed to protecting our environment. As part of our go-green initiative, 
          we plant 100 trees for every completed project.
        </p>
      </div>
      
     
    </div>
    </div>
  );
};

export default AboutUs;
