import React from 'react';
import  './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar__left">
          <li>
            <a href="https://www.pepcorns.com/"><img className="logo" src="./assets/img/logo.png" alt="Pepcorns Logo" /></a>
          </li>
        </ul>

        <ul className="navbar__center">
          <li>
            <a href="https://app.pepcorns.com/campaigns" className="menuItem">Startups</a>
          </li>
          <li>
            <a href="http://www.neon.ly/funding" className="menuItem">Raise Funding</a>
          </li>
          <li className="menuItem dropDown">
            <span className="dropBtn">Learn</span>
            <div className="dropdown-content p-1">
              <a className="dropdown-item" href="https://www.pepcorns.com/knowledgebase/sheeo">SHE.E.O</a>
              <a className="dropdown-item" href="https://blog.pepcorns.com/">Blog</a>
              <a className="dropdown-item" href="https://www.pepcorns.com/knowledgebase/faq">FAQ</a>
              <a className="dropdown-item" href="https://www.pepcorns.com/knowledgebase/investors">Knowledge Base</a>
              <a className="dropdown-item" href="https://www.pepcorns.com/about">About</a>
              <a className="dropdown-item" href="https://www.pepcorns.com/flashcards">Flashcards</a>
            </div>
          </li>
        </ul>

        <ul className="navbar__right">
          <li>
            <a href="https://app.pepcorns.com/login" className="menuItem">Login</a>
          </li>
          <li>
            <a href="https://app.pepcorns.com/signup" className="navButton">Get Started</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
