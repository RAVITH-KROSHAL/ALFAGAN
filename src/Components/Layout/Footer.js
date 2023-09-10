import React from "react";
import "./Footer.css";
import alfaganLogo from "../../Components/Assets/FooterLogo.png"; // Replace with the actual path to your Alfagan logo image

const Footer = () => {
  return (
    <footer className="a-shape">
      <div className="container">
        <p>
          Copyright &copy; 2023,
          <a href="https://www.alfagan.com" target="_blank" rel="noopener noreferrer">
            <img src={alfaganLogo} alt="Alfagan Logo" className="footerlogo" />
          </a>
         
        </p>

        <ul>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms">Terms of Service</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
