import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <div>
          <ul>
            <li><img src="./assets/img/logo.png" alt="" className="logo" /></li>
            <li>
              <span>Enabling everyday people to invest <br /> in startups they believe in</span>
            </li>
            <li>
              <ul className="social-media">
                <li>
                  <a href="https://www.facebook.com/Pepcorns/">
                    <img src="./assets/img/facebook.svg" style={{ width: "20px" }} />
                  </a>
                </li>
                {/* Add other social media icons here */}
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <ul className="footer-links">
            <h4>FOR INVESTORS</h4>
            <li><a href="https://app.pepcorns.com/login">Start Investing</a></li>
            <li><a href="https://www.pepcorns.com/knowledgebase/investors" ng-click="how()">How Investing works</a></li>
          </ul>
        </div>
        <div>
          <ul className="footer-links">
            <h4>FOR STARTUPS</h4>
            <li><a href="http://www.neon.ly/funding">Raise Capital</a></li>
            <li><a href="https://www.pepcorns.com/knowledgebase/company" ng-click="howc()">How it works</a></li>
            <li><a href="https://www.pepcorns.com/knowledgebase/investors" ng-click="inst()">Instruments</a></li>
          </ul>
        </div>
        <div>
          <ul className="footer-links">
            <h4>COMPANY</h4>
            <li><a href="https://www.pepcorns.com/about">About</a></li>
            <li><a href="https://blog.pepcorns.com/">Blog</a></li>
            <li><a href="https://www.pepcorns.comknowledgebase/faq">FAQ</a></li>
            <li><a href="https://www.pepcorns.comcontact">Contact</a></li>
            <li><a href="mailto:careers@pepcorns.com">We're hiring</a></li>
          </ul>
        </div>
        <div>
          <ul className="contact-info">
            <li>
              <span className="material-symbols-outlined">location_on</span>
              <span>Kanpur| Bengaluru |Delhi</span>
            </li>
            <li>
              <span className="material-symbols-outlined">mail</span>
              <span><a href="mailto:support@pepcorns.com">support@pepcorns.com</a></span>
            </li>
          </ul>
          <ul className="legal-links">
            <li><a href="https://www.pepcorns.com/terms">Terms Of Use</a></li>
            <li><a href="https://www.pepcorns.com/privacy">Privacy Policy</a></li>
            <li><a href="https://www.pepcorns.comrefund">Refund Policy</a></li>
            <li><a href="https://www.pepcorns.com/risks">Risks</a></li>
          </ul>
        </div>
      </footer>
      <p className="disclaimer">
        www.pepcorns.com (“Platform”) is a website owned and operated by Pepcorns Technologies Private Limited
        (“Pepcorns”), which is neither a registered stock exchange, an investment advisor nor a funding portal and
        is not registered with the Securities Exchange Board of India (“SEBI”). Nothing contained on this Platform
        shall be construed as an authorization by the SEBI to solicit investments nor should the Platform be
        construed as a SEBI authorized crowdfunding platform or a stock exchange, or their equivalent. The
        securities offered by any company registered on Platform are not traded on any stock exchange recognized by
        SEBI. Pepcorns does not allow any secondary market trading of securities on the Platform. By accessing this
        Platform and any pages thereof, you agree to be bound by the <a href="https://www.pepcorns.com/terms">Terms
        of Use</a> and <a href="https://www.pepcorns.com/privacy">Privacy Policy</a>. Investing in start-ups and
        early-stage businesses involves risks, including illiquidity, lack of dividends, loss of investment and
        dilution, and it should be done only as part of a diversified portfolio. Pepcorns is targeted exclusively at
        investors who are sufficiently sophisticated to understand these risks and make their own investment
        decisions. Please read our <a href="https://www.pepcorns.com/risks">RISK POLICY</a>.
      </p>
    </div>
  );
};

export default Footer;
