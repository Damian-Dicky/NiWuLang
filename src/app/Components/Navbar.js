import Image from "next/image";
import company_logo from "../assets/company_logo.png";
import '../CSS/Components/Navbar.css';
import list from "../assets/menu.png";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import MobileMenu from "./Menu";
  

export default function Navbar() {
    return(
        <nav className="nav">
        <div className="nav-container">
            <div className="nav-content">
                <div className="logo">
                    <Image src={company_logo} width={35} height={30} alt="LTPS INFRA PVT. LTD." />
                    <span>LTPS INFRA PVT. LTD.</span>
                </div>
                <div className="nav-links">
                    <a href="#">Home</a>
                    <a href="Services">Services</a>
                    <a href="Projects">Projects</a>
                    <a href="About">About Us</a>
                    <a href="Contact">Contact</a>
                    
                </div>
                <div className="nav-sheet">
                <MobileMenu/>


                </div>
            </div>
        </div>
       

    </nav>
    );
}