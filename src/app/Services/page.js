"use client";

import Button from "../Components/Button";
import Navbar from "../Components/Navbar";
import "../CSS/Components/Navbar.css";
import "../CSS/services.css";
import "../CSS/Components/Button.css";
import { Building2, Truck, Leaf } from "lucide-react";
import Footer from "../Components/Footer";
import "../CSS/Components/Footer.css";
import { Link } from "next/link";
import services from "../static/Services";

export default function Services() {

  return (
    <div>
      <Navbar />

      <div className="container">
  <h1>Our Services</h1>
  
  <div className="services-grid">
    {services.map((service, index) => (
      <div key={index} className="service-card">
        <div className="service-header">
          <span className="service-icon">{service.icon}</span>
          <h3>{service.name}</h3>
        </div>
        <div className="service-body">
          
        <Button text={"Learn More"} onClick={
          () => {
            window.location.href = service.link;
        } }>

        </Button>
        
        </div>
      </div>
    ))}
  </div>

</div>

<Footer />
               
    </div>
  );
}
