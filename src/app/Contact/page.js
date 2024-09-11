"use client";

import Navbar from "../Components/Navbar";
import "../CSS/Components/Navbar.css";
import "../CSS/contact.css";

export default function Contact(){
    return(
        <div>
            <Navbar />
            <div className="contact-container">
                <h1 className="page-title">Contact Us</h1>
                <div className="contact-grid">
                    <div className="contact-card">
                        <h2 className="card-title">LTPS INFRA PVT. LTD.</h2>
                        <p className="card-description">Address: 1234 Main St, New Delhi, India</p>
                        <p className="card-description">Phone: +91 123-456-7890</p>
                        <p className="card-description">Email:</p>
                    
                    </div>
                    <div className="contact-card">
                        <h2 className="card-title">General Inquiries</h2>
                        <p className="card-description">For general inquiries, please email us at
                        </p>
                    </div>
                    <div className="contact-card">
                        <h2 className="card-title">Sales</h2>
                        <p className="card-description">For sales inquiries, please email us at
                        </p>
                    </div>
                    <div className="contact-card">
                        <h2 className="card-title">Support</h2>
                        <p className="card-description">For support inquiries, please email us at
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}