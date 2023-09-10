import React from 'react';
import './SocialMedia.css';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaTiktok, FaGithub, FaWhatsapp } from 'react-icons/fa';
import img from '../../Components/Assets/email.png';

const SocialMedia = () => {
  return (
    <div className="social-media">
      <div className="social-links">
        <a style={{ zIndex: 1 }} href="https://www.facebook.com/alfagan?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={{ color: '#1877F2' }} />
        </a>
        <a href="https://twitter.com/alfagan?t=PM3AOGhIUdegvVJrs0jpFA&s=09" target="_blank" rel="noopener noreferrer">
          <FaTwitter style={{ color: '#1DA1F2' }} />
        </a>
        <a href="https://www.linkedin.com/in/alfagan" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={{ color: '#0A66C2' }} />
        </a>
        <a href="https://www.instagram.com/alfagan" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={{ color: '#E4405F' }} />
        </a>
        <a href="https://www.youtube.com/@ralfagan" target="_blank" rel="noopener noreferrer">
          <FaYoutube style={{ color: '#FF0000' }} />
        </a>
        <a href="https://www.tiktok.com/@alfagan?_t=8eKmfiNCtYQ&_r=1" target="_blank" rel="noopener noreferrer">
          <FaTiktok style={{ color: '#000000' }} />
        </a>
        <a href="https://github.com/alfagan" target="_blank" rel="noopener noreferrer">
          <FaGithub style={{ color: '#333' }} />
        </a>
        <a href="https://wa.me/+94777450722" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp style={{ color: '#25d366' }} />
        </a>
        <a href="mailto:alfaganan@gmail.com">
           <img src={img} alt="Gmail Icon" width="20" height="18" />
        </a>

        
      </div>
    </div>
  );
};

export default SocialMedia;
