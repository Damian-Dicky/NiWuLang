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
import Material4 from "../assets/2514_1.jpg";
import Material5 from "../assets/2514_2.jpg";
import Material6 from "../assets/2514_3.jpg";

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
            <div className="about-profile-image">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/C4yYIm-VwhQ?si=Sjn-O0-OImz4fnFD"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/IOzCLhobIQg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>

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
                come from China . We're SiChuan zonglianshengtuo mineral limited
                company China,professional in multi-function protective products
                "Niwulang” manufacturing, and purely private enterprise, without
                background of military and state-owned enterprise, Keep
                innovating in new materials and technologies for many years ,Now
                we have ability of producing more than 800,000 pieces per year.
                Far infrared thermal image and radar stealth products benefits
                for the right now and the future warfares One of the things the
                current wars have taught us is that the military hard wares were
                used to ,especially tanks and troop carries…camouflage suits are
                utterly useless when no Infrared thermal image and radar stealth
                products sport is around. The sky is filled with drones attached
                Infrared thermal image optimal reconniassance devices and
                penetration of radio waves from satellite radiation ， loitering
                munitions and other type of aerial threats.That were less the
                case a few years back. Therefore "Niwulang" far infrared thermal
                image and radar stealth products to give the soldiers and
                military equipments protection in any missions
                <br />
                <br />
                Our products have far Infrared thermal image stealth effect
                through surface of "Niwulang"'s diffuse reflection for the
                surrounding environments (included jungle… forest …desert and
                other environment s ) emissions Infrared waves in order to keep
                subjects are integrated completely with surrounding environment
                , range: from 3~14um Infrared band ；Anti-radar effect which
                prevention of radio wave radiation,radio frequency
                electromagnetic field (frequency range : from 10 Megahertz to 38
                Gigahertz ) ,Damping decibles (95-85 decibles ) ,to prevent the
                penetration of radio waves from satellite radiation ,any source
                of electronic equipment…Wi-Fi …2G…3G…4G…5G…mobile phone
                isolation…radar system…
                <br />
                <br />
                Our product categories including :
                <br />
                1. infantry suits of Far Infrared thermal image stealth
                <br />
                2. war vehicle suits of far Infrared thermal image stealth and
                anti-radar
                <br />
                3. battlefield rents of far Infrared thermal image stealth and
                anti-radar
                <br />
                4.drones suits of far Infrared thermal image stealth and
                anti-radar ………
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
                <div className="management-card">
                  <div className="management-icon">
                    <Image src={Material4} alt="Road" />
                  </div>
                </div>
                <div className="management-card">
                  <div className="management-icon">
                    <Image src={Material5} alt="Road" />
                  </div>
                </div>
                <div className="management-card">
                  <div className="management-icon">
                    <Image src={Material6} alt="Road" />
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
