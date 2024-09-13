"use client";

import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "../../CSS/Components/Navbar.css";
import "../../CSS/Components/Footer.css";
import {useRouter} from "next/navigation";
import "../../CSS/type.css"
import services from "../../static/Services";
import Image from "next/image";

export default function ServiceType({params}){
    
    return(
        <div>
            <Navbar />
            {services.map((service, index) => {
                if(service.path == params.type){
                    return(
                        <div key={index} className="service-card">
                             <div className="service-body">
                                <Image src={service.image} alt={service.name} className="service-image"/>
                            </div>
                            <div className="service-header">
                                <span className="service-icon">{service.icon}</span>
                                <h3>{service.name}</h3>
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