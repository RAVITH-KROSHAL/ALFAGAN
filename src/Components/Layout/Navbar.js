import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Logo from '../Assets/alfagan-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { IoIosHome, IoMdMail } from 'react-icons/io';
import { FaProjectDiagram, FaClipboardList } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Check window width on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial width

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderNavItem = (path, text, icon) => {
    return (
      <li>
        <Link to={path} onClick={toggleMobileMenu} className={location.pathname === path ? 'active' : ''}>
          {isMobileView ? (
            <span>
              {icon}
              {text}
            </span>
          ) : text}
        </Link>
      </li>
    );
  };

  return (
    <nav className={`Nav ${isMobileMenuOpen ? "mobile-open" : ""}`}>
      <div className='logo'>
        <Link to="/">
          <img src={Logo} alt="Alfagan Logo" />
        </Link>
      </div>

      {/* Mobile menu button */}
      <div className="mobile-menu-button" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>

      {/* Mobile menu */}
      <ul className={`ul ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        {renderNavItem('/', 'Home', <IoIosHome />)}
        {renderNavItem('/projects', 'Projects', <FaProjectDiagram />)}
        {renderNavItem('/services', 'Services', <FaClipboardList />)}
        {renderNavItem('/contact', 'Contact', <IoMdMail />)}
      </ul>
    </nav>
  );
}

export default Navbar;
