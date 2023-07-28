import React, { useEffect, useState } from 'react';
import './Navbar.css';
import './MobileNavbar.css';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Menu } from '@mui/icons-material';

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 764) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize(); // Check initial screen size on component mount

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        // Show MobileNavbar when screen size is less than 764 pixels
        <nav className="mobile-navbar">
      <div className="mobile-navbar__left">
        <a href="https://cdn.logo.com/hotlink-ok/logo-social.png">
          <img
            className="logo"
            src="https://cdn.logo.com/hotlink-ok/logo-social.png"
            alt="Pepcorns Logo"
          />
        </a>
      </div>
      <div className="mobile-navbar__right">
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
      </div>
      {/* Mobile menu items */}
      <SwipeableDrawer
        anchor="left" // Set anchor to left to open drawer from the left side
        open={openDrawer}
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}
      >
        <div className="mobile-menu">
          <ul>
            <li>
              <a href="https://app.pepcorns.com/campaigns">Startups</a>
            </li>
            <li>
              <a href="http://www.neon.ly/funding">Raise Funding</a>
            </li>
            <li className="dropDown">
              <span className="dropBtn">Learn</span>
              <div className="dropdown-content p-1">
                <a href="https://www.pepcorns.com/knowledgebase/sheeo">SHE.E.O</a>
                <a href="https://blog.pepcorns.com/">Blog</a>
                <a href="https://www.pepcorns.com/knowledgebase/faq">FAQ</a>
                <a href="https://www.pepcorns.com/knowledgebase/investors">Knowledge Base</a>
                <a href="https://www.pepcorns.com/about">About</a>
                <a href="https://www.pepcorns.com/flashcards">Flashcards</a>
              </div>
            </li>
            <li>
              <a href="https://app.pepcorns.com/login">Login</a>
            </li>
            <li>
              <a href="https://app.pepcorns.com/signup" style={{ color: 'black', backgroundColor: 'white' }}>
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </SwipeableDrawer>
    </nav>
        
      ) : (
        // Show the regular Navbar when screen size is greater than or equal to 764 pixels
        <nav className="navbar">
          <ul className="navbar__left">
            <a href="https://cdn.logo.com/hotlink-ok/logo-social.png">
              <img
                className="logo"
                src="https://cdn.logo.com/hotlink-ok/logo-social.png"
                alt="Pepcorns Logo"
              />
            </a>
          </ul>
          <ul className="navbar__center">
            <li>
              <a href="https://app.pepcorns.com/campaigns">Startups</a>
            </li>
            <li>
              <a href="http://www.neon.ly/funding">Raise Funding</a>
            </li>
            <li className="dropDown">
              <span className="dropBtn">Learn</span>
              <div className="dropdown-content p-1">
                <a href="https://www.pepcorns.com/knowledgebase/sheeo">SHE.E.O</a>
                <a href="https://blog.pepcorns.com/">Blog</a>
                <a href="https://www.pepcorns.com/knowledgebase/faq">FAQ</a>
                <a href="https://www.pepcorns.com/knowledgebase/investors">Knowledge Base</a>
                <a href="https://www.pepcorns.com/about">About</a>
                <a href="https://www.pepcorns.com/flashcards">Flashcards</a>
              </div>
            </li>
          </ul>
          <ul className="navbar__right">
            <li>
              <a href="https://app.pepcorns.com/login">Login</a>
            </li>
            <li>
              <a href="https://app.pepcorns.com/signup" style={{ color: 'black', backgroundColor: 'white' }}>Get Started</a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
