"use client";

import Button from "../Components/Button";
import Navbar from "../Components/Navbar";
import "../CSS/Components/Navbar.css";
import "../CSS/services.css";
import "../CSS/Components/Button.css";
import Footer from "../Components/Footer";
import "../CSS/Components/Footer.css";
import services from "../static/Services";
import { useState } from "react";

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 9);

  return (
    <div>
      <Navbar />

      <div className="container">
        <h1>Our Services</h1>

        <div className="services-grid">
          {visibleServices.map((service, index) => (
            <div
              key={index}
              className="service-card"
              onClick={() => {
                window.location.href = service.link;
              }}
            >
              <div className="service-header">
                <span className="service-icon">{service.icon}</span>
                <h3>{service.name}</h3>
                <div className="service-body"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="show-all-button">
          <Button
            text={showAll ? "Show Less" : "Show All"}
            onClick={() => setShowAll(!showAll)}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
