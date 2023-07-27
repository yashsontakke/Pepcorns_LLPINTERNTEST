import React from 'react'
import './MidContainer.css'

const MidContainer = () => {
  return (
  

    <div className="container">
    <div className="logo">
      <img alt="Image placeholder" src="https://api.pepcorns.com/clientassets/icon1677254912017.png" />
      <div>
        <h5>CosIQ</h5>
        <span className="location">Delhi</span>
      </div>
    </div>
    <div className="tags">
      <span>#Beauty &amp; Personal Care</span>
      <span>#SHARK TANK</span>
      <span>#FMCG</span>
    </div>
    <p className="subheading mt-3">Molecular skincare brand focused on safe &amp; visible results</p>
    <div>
      <div>
        <ion-icon name="globe-outline" role="img" className="md hydrated" aria-label="globe outline"></ion-icon>
        <a target="_blank" ng-href="https://mycosiq.com" href="https://mycosiq.com">
          <span>https://mycosiq.com</span>
        </a>
      </div>
      <div>
        <ion-icon name="card-outline" role="img" className="md hydrated" aria-label="card outline"></ion-icon>
        <span>AAGCI5003E</span>
      </div>
    </div>
    <div className="video-container">
      <iframe
        video-url="currentVdo"
        player="bestPlayer"
        id="unique-youtube-embed-id-1"
        frameBorder="0"
        allowFullScreen="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        title="CosIQ for Pepcorns"
        width="640"
        height="390"
        src="https://www.youtube.com/embed/kFII05-bhGU?start=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fapp.pepcorns.com&amp;widgetid=1"
      ></iframe>
    </div>
    <div className="investor-details">
      <div>
        <h5>₹1450000</h5>
        <p>56.20% of minimum goal raised</p>
      </div>
      <div>
        <h5>113</h5>
        <p>Total investors</p>
      </div>
      <div>
        <h5>16 Days</h5>
        <p>Left to Invest</p>
      </div>
      <button className="login-button">Login To Invest</button>
      <p className="minimum-investment">₹ 1000 Minimum Investment</p>
    </div>
    <a target="_blank" href="https://youtu.be/kFII05-bhGU">Unable to view video ? Click here</a>
  </div>
  )
}

export default MidContainer