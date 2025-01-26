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
        <FaFacebook 
  className="icon" 
  onClick={() => window.open('https://www.facebook.com/profile.php?id=61563771864112', '_blank')} 
/>
<BsWhatsapp 
  className="icon" 
  onClick={() => window.open('https://web.whatsapp.com/', '_blank')} 
/>
<BsInstagram 
  className="icon" 
  onClick={() => window.open('https://www.instagram.com/barisyildrim2/', '_blank')} 
/>
<BsGlobe 
  className="icon" 
  onClick={() => window.open('https://sumair-web.vercel.app/', '_blank')} 
/>
        </div>

      
      </div>
    </footer>
  );
}

export default Footer;