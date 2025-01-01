"use client";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../CSS/Components/Navbar.css";
import "../CSS/contact.css";
import dynamic from "next/dynamic";
import "../CSS/Components/Footer.css";
import {
  FileQuestionIcon,
  HelpCircleIcon,
  Locate,
  MapIcon,
  PhoneCallIcon,
} from "lucide-react";

const Map = dynamic(() => import("../map"), { ssr: false });

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <h2 className="page-title">Contact Us</h2>
        <p className="page-description">
          We'd love to hear from you! Please contact us using the information
          below.
        </p>
        <div className="map-container">
          <Map />
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <MapIcon size={48} />
            <h3 className="card-title">Address</h3>
            <p className="card-description">
              Number five JingKouHeCountry industrial park LeiShangCity SiChuan
              provence China
            </p>
          </div>
          <div className="contact-card">
            <FileQuestionIcon size={48} />
            <h3 className="card-title">General Inquiries</h3>
            <p className="card-description">
              For general inquiries, please email us at{" "}
              <b>niwulang@gmail.com</b>
            </p>
          </div>
          <div className="contact-card">
            <PhoneCallIcon size={48} />
            <h3 className="card-title">Sales</h3>
            <p className="card-description">
              For sales inquiries, please email us at <b>niwulang@gmail.com</b>
            </p>
          </div>
          <div className="contact-card">
            <HelpCircleIcon size={48} />
            <h3 className="card-title">Support</h3>
            <p className="card-description">
              For support inquiries, please call us at{" "}
              <b>+86-0833-2716300 / +86-13880073321</b>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
