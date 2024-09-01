"use client";

import Image from "next/image";
import styles from "./page.module.css";
import company_logo from "./assets/company_logo.png";
import './CSS/home.css'
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import React, { useState, useEffect } from "react";
import { HardHat, Truck, Building, CheckCircle, Award, MapPin, Phone, Mail, AwardIcon, MapIcon, PhoneIcon, MailIcon } from 'lucide-react';
import Map from "./map";

export default function Home() {
  const [map, setMap] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of slides to be displayed in the carousel
  const slides = [
    {
      title: "Building the Future, One Project at a Time",
      description: "LTPS INFRA PVT. LTD. - Your trusted partner in infrastructure development",
      buttonText: "Get Started",
      image: img1,
      page: "Services",
    },
    {
      title: "Expert Infrastructure Solutions",
      description: "Delivering quality projects for over 15 years",
      buttonText: "Learn More",
      image: img2,
      page: "Projects",
    },
    {
      title: "Innovative Engineering Services",
      description: "Committed to safety, quality, and sustainability",
      buttonText: "Contact Us",
      image: img3,
      page: "Contact",
    },
  ];

  // Function to move to the next or previous slide
  const moveSlide = (direction) => {
    const newSlide = (currentSlide + direction + slides.length) % slides.length;
    setCurrentSlide(newSlide);
  };

  // Effect to auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 5000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentSlide]);

  return (
    <div class="container">

    <nav class="nav">
        <div class="nav-container">
            <div class="nav-content">
                <div class="logo">
                    <Image src={company_logo} width={35} height={30} alt="LTPS INFRA PVT. LTD." />
                    <span>LTPS INFRA PVT. LTD.</span>
                </div>
                <div class="nav-links">
                    <a href="/">Home</a>
                    <a href="Services">Services</a>
                    <a href="Projects">Projects</a>
                    <a href="About">About Us</a>
                    <a href="Contact">Contact</a>
                </div>
            </div>
        </div>
    </nav>

    <div className="hero">
        <div className="carousel-container">
        {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentSlide ? "active" : ""}`}
            >
              <div className="hero-content">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <a href={slide.page} className="hero-button">{slide.buttonText}</a>
                {/* Add the image with lower opacity */}
                <Image src={slide.image} alt={slide.title} className="carousel-image" />
              </div>
            </div>
          ))}
          <div className="carousel-buttons">
            <button className="prev-btn" onClick={() => moveSlide(-1)}>
              &#10094;
            </button>
            <button className="next-btn" onClick={() => moveSlide(1)}>
              &#10095;
            </button>
          </div>
        </div>
      </div>

    <div class="info">
        <div class="info-container">
            <h2>Welcome to LTPS INFRA</h2>
            <p>LTPS INFRA PVT. LTD. is a leading infrastructure development company based in Panvel, Maharashtra. We specialize in earth works, transportation, and infrastructure projects. Our team of experienced professionals is committed to delivering projects on time, within budget, and exceeding client expectations.</p>
            <p>Our premier infrastructure development company has over 15 years of experience in delivering high-quality projects across various sectors. Specializing in earthworks, road construction, dam works, and infrastructure development for highways and townships, we provide comprehensive solutions tailored to meet the unique needs of our clients. Our expertise extends to heavy-duty transportation, excavation, canal and port works, and advanced civil engineering projects, including scientific and eco-friendly methods for land reclamation and compaction.</p>
            <p>
            With a commitment to quality, safety, sustainability, and client satisfaction, we strive to exceed expectations on every project. Our skilled team, equipped with state-of-the-art machinery, ensures timely and budget-conscious delivery. At LTPS INFRA PVT. LTD., we are dedicated to building a better future, one project at a time, while actively promoting eco-friendly practices through our Go-Green initiatives.</p>
        </div>
    </div>

    <div class="services">
        <div class="services-container">
            <h2>Our Services</h2>
            <div class="service-cards">
                <div class="service-card">
                    <div class="icon">
                      <HardHat />
                    </div>
                    <h3>Earth Works</h3>
                    <p>Earth-filling, excavation, and hill cutting</p>
                </div>
                <div class="service-card">
                    <div class="icon">
                      <Truck />
                    </div>
                    <h3>Transportation</h3>
                    <p>Heavy duty transportation of soil, murum, and sand</p>
                </div>
                <div class="service-card">
                    <div class="icon">
                      <Building/>
                    </div>
                    <h3>Infrastructure</h3>
                    <p>Roads, highways, dams, and canals</p>
                </div>
            </div>
        </div>
    </div>

    <div class="projects">
        <div class="projects-container">
            <h2>Featured Projects</h2>
            <div class="project-cards">
                <div class="project-card">
                    <h3>Lake Beautification</h3>
                    <p>Development and beautification of Lendale Lake</p>
                </div>
                <div class="project-card">
                    <h3>Road Construction</h3>
                    <p>Construction of concrete roads in Panvel Municipal Corporation</p>
                </div>
                <div class="project-card">
                    <h3>Railway Station Maintenance</h3>
                    <p>Cleaning and sanitation services for multiple railway stations</p>
                </div>
            </div>
        </div>
    </div>

    <div class="about-us">
        <div class="about-us-container">
            <h2>Why Choose Us</h2>
            <div class="feature-cards">
                <div class="feature-card">
                    <div class="icon"><CheckCircle/></div>
                    <h3>Quality Assurance</h3>
                    <p>Committed to delivering projects on time, within budget, and exceeding client expectations</p>
                </div>
                <div class="feature-card">
                    <div class="icon"><AwardIcon/></div>
                    <h3>15+ Years Experience</h3>
                    <p>Over a decade of expertise in infrastructure development</p>
                </div>
            </div>
        </div>
    </div>
    
  
    <div class="contact">
        <div class="contact-container">
            <h2>Contact Us</h2>
            <div class="contact-info">
                <div class="info">
                    <div class="icon"><MapIcon/></div>
                    <p>
                        113, A-Wing, Sai Arcade, Opp. Panvel ST Stand, Panvel, Dist. Raigad
                    </p>
                    <Map/>
                    
                </div>
                <div class="info">
                    <div class="icon"><PhoneIcon/></div>
                    <p>9323823009 / 9537577777</p>
                </div>
                <div class="info">
                    <div class="icon"><MailIcon/></div>
                    <p>ltpsinfra@gmail.com</p>
                </div>
            </div>
        </div>
    </div>

    <footer class="footer">
        <div class="footer-container">
            <p>&copy; 2024 LTPS INFRA PVT. LTD. All rights reserved.</p>
        </div>
    </footer>
</div>
  );
}
