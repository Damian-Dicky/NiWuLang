"use client";

import "../CSS/about.css";
import "../CSS/Components/Navbar.css";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Navbar from "../Components/Navbar";
import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";
import Footer from "../Components/Footer";
import InfoGrid from "../Components/InfoCard";
import Material1 from "../assets/material-01.jpg";
import Material2 from "../assets/material-02.jpg";
import Material3 from "../assets/material-03.jpg";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("expertise");
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectCount((prevCount) =>
        prevCount < 500 ? prevCount + 1 : prevCount
      );
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const TabContent = ({ id, title, items }) => (
    <div className={`tab-content ${activeTab === id ? "active" : ""}`}>
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
        <BlurFade delay={0.25} inView>
          <h2>Company Profile</h2>
          <div className="about-profile">
            <div className="about-profile-image"></div>

            <div className="about-profile-text">
              <p>
                According to Moore's Law ,the computing and processing power
                inside radar systems continue to increase at an exponential rate
                ,the advanced far Infrared thermal image optimal technology are
                used nomorly in current wars, Maybe, there will be no stealth
                technology that can hide from the most advanced systems, When
                the day just have been coming,soldiers and vehicles will have to
                relay on other methods of avoiding detection or destruction.The
                battlefield is always changing and evolving, more advanced
                technology and new materials have been taking by a company who
                come from China.
                <br />
                <br />
                We're SiChuan zonglianshengtuo mineral limited company
                China,professional in multi-function protective products
                "Niwulang” manufacturing, and purely private enterprise, without
                background of military and state-owned enterprise, Keep
                innovating in new materials and technologies for many years ,Now
                we have ability of producing more than 800,000 pieces per year.
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={0.25} inView>
          <div className="about-management">
            <div className="management-lead">
              <h2>More Details</h2>
              <div className="management-grid">
                <div className="management-card">
                  <div className="management-icon">
                    <Image src={Material1} alt="Road" />
                  </div>
                </div>
                <div className="management-card">
                  <div className="management-icon">
                    <Image src={Material2} alt="Road" />
                  </div>
                </div>
                <div className="management-card">
                  <div className="management-icon">
                    <Image src={Material3} alt="Road" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.25} inView>
          <InfoGrid />
        </BlurFade>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
