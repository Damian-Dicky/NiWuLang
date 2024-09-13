"use client";

import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "../../CSS/Components/Navbar.css";
import "../../CSS/Components/Footer.css";
import {useRouter} from "next/navigation";
import "../../CSS/type.css"
import Button from "../../Components/Button";
import "../../CSS/Components/Button.css";
import services from "../../static/Services";
import Image from "next/image";

export default function ServiceType({params}){
    
    
    return(
        <div>
            <Navbar />
            {services.map((service, index) => {
               
                if(service.path == params.type){
                    const contentWithBreaks = service.content.split('\n');
                    return(
                        <div className="service-parent">
                            <div className="service-head">
                                <h2>{service.name}</h2>
                            </div>
                        <div key={index} className="service-card">
                            
                             <div className="service-body">
                                <Image src={service.image} alt={service.name} className="service-image"/>
                            </div>
                            <div className="service-header">
                                {/* <span className="service-icon">{service.icon}</span> */}
                                {contentWithBreaks.map((line, lineIndex) => {
                                    const lineWithBold = line.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");

                                    return line.trim() ? (
                                    <p key={lineIndex} dangerouslySetInnerHTML={{ __html: lineWithBold }} />
                                    ) : (
                                    <br key={lineIndex} />
                                    );
                                })}
                                <Button text={"Contact Us"} onClick={
                                () => {
                                    window.location.href = "/Contact";
                                } }/>
                            </div>
                           
                        </div>
                        </div>
                    )
                }
            }
            )}
            <Footer/>
        </div>
    )
}