import Image from "next/image";
import company_logo from "../assets/company_logo.png";
import '../CSS/Components/Navbar.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname

import MobileMenu from "./Menu";

export default function Navbar() {
  const pathname = usePathname(); // Get current path
  
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-content">
          {/* Wrap the logo with Link to redirect to Home */}
          <Link href="/" className="logo">
            <Image src={company_logo} width={35} height={30} alt="LTPS INFRA PVT. LTD." />
            <span>LTPS INFRA</span>
          </Link>
          
          <div className="nav-links">
            <Link href="/" className={pathname === "/" ? "active" : ""}>
              Home
            </Link>
            <Link href="/Services" className={pathname === "/Services" ? "active" : ""}>
              Services
            </Link>
            <Link href="/Projects" className={pathname === "/Projects" ? "active" : ""}>
              Projects
            </Link>
            <Link href="/About" className={pathname === "/About" ? "active" : ""}>
              About Us
            </Link>
            <Link href="/Contact" className={pathname === "/Contact" ? "active" : ""}>
              Contact
            </Link>
          </div>
          <div className="nav-sheet">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
