"use client";

import ReactPlayer from "react-player";
import Image from "next/image";
import dynamic from "next/dynamic";
import "./CSS/home.css";
import React, { useState, useEffect, useRef } from "react";
import {
  HardHat,
  Truck,
  Building,
  CheckCircle,
  AwardIcon,
  MapIcon,
  PhoneIcon,
  MailIcon,
  KeyRound,
  Leaf,
  BugOff,
  FlameKindling,
  DropletOff,
  Coins,
  DollarSign,
} from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import TypingAnimation from "@/components/magicui/typing-animation";
import MarqueeCard from "./Components/Marquee";
import WorkingAreas from "./static/WorkingAreas";
import SlideCard from "./Components/SlideCard";
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";
import railway from "./assets/railway.png";
import lake from "./assets/lake-beautification.png";
import road from "./assets/warning1.png";
import fifteen from "./assets/15+.png";
import gogreen from "./assets/go_green.png";
import Link from "next/link";
import Footer from "./Components/Footer";
import slides from "./static/Slides";
import warning from "./assets/warning1.png";
import effect from "./assets/effect1.png";
import cloth from "./assets/cloth1.png";

const Maps = dynamic(() => import("./map"), {
  ssr: false,
});

export default function Home() {
  const [map, setMap] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const LazyLoadImage = ({ src, alt, className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(imgRef.current);
          }
        },
        { threshold: 0.1 }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
      };
    }, []);

    return (
      <div ref={imgRef} className={className}>
        {isVisible ? (
          <Image src={src} alt={alt} className={className} placeholder="blur" />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
      </div>
    );
  };

  return (
    <div className="container">
      <Navbar />

      <div className="hero">
        <div className="carousel-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === currentSlide ? "active" : ""
              }`}
            >
              <div className="hero-content">
                <TypingAnimation
                  className="text-4xl font-bold text-black dark:text-white"
                  text={slide.title}
                />
                <p>{slide.description}</p>
                <Link href={slide.page} className="hero-button">
                  {slide.buttonText}
                </Link>
                {/* Add the image with lower opacity */}
                {/* <Image src={slide.image} alt={slide.title} className="carousel-image" /> */}

                <LazyLoadImage
                  src={slide.image}
                  alt={slide.title}
                  className="carousel-image"
                />

                {/* <LazyLoadImage 
                src={slide.image} 
                alt={slide.title} 
                className="carousel-image" 
                placeholderSrc={blurImage}
                
                /> */}
              </div>
            </div>
          ))}
          {/* <div className="carousel-buttons">
            <button className="prev-btn" onClick={() => moveSlide(-1)}>
              &#10094;
            </button>
            <button className="next-btn" onClick={() => moveSlide(1)}>
              &#10095;
            </button>
          </div> */}
        </div>
      </div>

      <BlurFade delay={0.25} inView>
        <div className="info">
          <div className="info-container">
            <div className="info-head">
              <Image src={fifteen} alt="15+" width={100} height={100} />
              <Image src={gogreen} alt="Go Green" width={100} height={100} />
            </div>

            <p>
              We're SiChuan zonglianshengtuo mineral limited company China,
              professional in multi-function protective products Niwulang
              manufacturing, and purely private enterprise, without background
              of military and state-owned enterprise, Keep innovating in new
              materials and technologies for many years ,Now we have ability of
              producing more than 800,000 pieces per year.Our product categories
              including : Infantry suits; War vehicle suits; Battlefield rents;
              Drones suits...
              <br></br>
              <br></br>
              Contact us today, we'll get back to you with NiWuLang tactical
              gear ordering information and additional details!
            </p>
            <div className="info-btn">
              <Link href="Contact">
                <Button text={"Start Now!"}></Button>
              </Link>
            </div>
            <br></br>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.25} inView>
        <div className="services">
          <div className="services-container">
            <h2>Additional Protection</h2>
            <div className="service-cards">
              <div className="service-card">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-flame-kindling"
                  >
                    <path d="M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z" />
                    <path d="m5 22 14-4" />
                    <path d="m5 18 14 4" />
                  </svg>
                </div>
                <h3>Flame Retardancy</h3>
                <p>Can resist temperatures up to 250°C</p>
              </div>
              <div className="service-card">
                <div className="icon">
                  <BugOff />
                </div>
                <h3>Insect Protection</h3>
                <p>Resist various insects in the wild</p>
              </div>
              <div className="service-card">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-droplet-off"
                  >
                    <path d="M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586" />
                    <path d="m2 2 20 20" />
                    <path d="M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208" />
                  </svg>
                </div>
                <h3>Protection Against Elements</h3>
                <p>Windproof, waterproof, and cold-resistant</p>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.25} inView>
        <div className="projects">
          <div className="projects-container">
            <h2>More Details</h2>
            <div className="project-cards">
              <div className="project-card">
                <div className="project-image">
                  <Image src={cloth} alt="Project 1" />
                </div>
                <h3>Apparel style</h3>
                <p>Display the shape and color of the clothing</p>
                <Button
                  text={"View More"}
                  onClick={() => {
                    window.location.href = "/Services/apparel-style";
                  }}
                ></Button>
              </div>
              <div className="project-card">
                <div className="project-image">
                  <Image src={effect} alt="Project 1" />
                </div>
                <h3>Effect display</h3>
                <p>
                  Video of wearing an invisibility suit shot with a far-infrared
                  thermal imager
                </p>
                <Button
                  text={"View More"}
                  onClick={() => {
                    window.location.href = "/Services/effect-display";
                  }}
                ></Button>
              </div>
              <div className="project-card">
                <div className="project-image">
                  <Image src={warning} alt="Project 1" />
                </div>
                <h3>Warning!</h3>
                <p>
                  The consequences of being identified by a far-infrared thermal
                  imager on the battlefield
                </p>
                <Button
                  text={"View More"}
                  onClick={() => {
                    window.location.href = "/Services/warning";
                  }}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.25} inView>
        <div className="about-us">
          <div className="about-us-container">
            <h2>Why Choose Us</h2>

            <br></br>
            <div className="feature-cards">
              <div className="feature-card">
                <div className="icon">
                  <KeyRound />
                </div>
                <h3>Safety</h3>
                <p>
                  VIS? NIR? SWIR? NiWuLang has you covered. Literally. NiWuLang
                  hides your near-infrared signature.{" "}
                </p>
              </div>
              <div className="feature-card">
                <div className="icon">
                  <DollarSign />
                </div>
                <h3>Price</h3>
                <p>
                  Due to China's economies of scale and mature supply chain, we
                  can offer competitive prices.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.25} inView>
        <div className="contact">
          <div className="contact-container">
            <h2>Contact Us</h2>
            <div className="contact-sub-container">
              <div className="map">
                <Maps />
              </div>
              <div className="contact-info">
                <div className="sub-contact-info">
                  <div className="icon">
                    <MapIcon />
                  </div>
                  <p>
                    Number five JingKouHeCountry industrial park LeiShangCity
                    SiChuan provence China
                  </p>
                </div>
                <div className="sub-contact-info">
                  <div className="icon">
                    <PhoneIcon />
                  </div>
                  <p>+86-0833-2716300 / +86-13880073321</p>
                </div>
                <div className="sub-contact-info">
                  <div className="icon">
                    <MailIcon />
                  </div>
                  <p>wlg10940@vip.sina.cn</p>
                </div>
              </div>
            </div>
            <br></br>
          </div>
        </div>
      </BlurFade>

      <Footer />
    </div>
  );
}
