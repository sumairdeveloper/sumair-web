import React from "react";
import "./Footer.css"; 
import { FaFacebook } from "react-icons/fa";
import { BsGlobe, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function Footer() {
  return (
    <footer>
      <p>© 2025 Sumair Portfolio Web. All rights reserved.</p>
      <div className="social-links">
        <div className="logos">
        <FaFacebook  className="icon"/>
        <BsWhatsapp   className="icon"/>
        <BsInstagram   className="icon"/>
        <BsGlobe   className="icon"/>
        </div>

      
      </div>
    </footer>
  );
}

export default Footer;