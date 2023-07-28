import React from 'react'
import './MidContainer.css'

const MidContainer = () => {
  return (


    <div className="mid-container">
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
      <span
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '2px',
          alignItems: 'center',
          padding: '15px',
          color: '#999',
          fontSize: '16px',
          backgroundColor: '#f5f5f5',
        }}
        role="button"
        onClick={() => {
          /* Handle click action here */
        }}
      >
        <ion-icon
          name="chevron-back-outline"
          role="img"
          style={{ fontSize: '20px' }}
          aria-label="chevron back outline"
        ></ion-icon>
        <p style={{ margin: '0' }}> Back</p>
      </span>
    </div>
      <div className="custom-container">
        <div className="custom-left">
          <img className="custom-image" alt="Image placeholder" src="https://api.pepcorns.com/clientassets/icon1677254912017.png" />
          <div className="custom-content">
            <h5 className="custom-heading">CosIQ</h5>
            <span className="custom-text">Delhi</span>
          </div>
        </div>
        <div className="custom-right">
          <div className="custom-button">
            <span>Save</span>
          </div>
          <div className="custom-button" data-bs-toggle="modal" data-bs-target="#shareModal">
            <span>Share</span>
          </div>
        </div>
      </div>
      <hr></hr>

      <div className="tags">
        <span>#Beauty &amp; Personal Care</span>
        <span>#SHARK TANK</span>
        <span>#FMCG</span>
      </div>
      <h1 >Molecular skincare brand focused on safe &amp; visible results</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', color: '#888', marginTop: '8px', marginBottom: '30px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ion-icon name="globe-outline" role="img" style={{ fontSize: '24px' }}></ion-icon>

          <i class="material-icons">favorite</i>
          <a target="_blank" href="https://mycosiq.com" style={{ textDecoration: 'none', color: '#888' }}>
            <span style={{ margin: 0 }}>https://mycosiq.com</span>
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <i class="material-icons">favorite</i>
          <span style={{ margin: 0, color: '#888' }}>AAGCI5003E</span>
        </div>
      </div>
      <div className='target'>
        <div className="video-container" >
          <iframe
            video-url="currentVdo"
            player="bestPlayer"
            id="unique-youtube-embed-id-1"
            frameBorder="0"
            allowFullScreen="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            title="CosIQ for Pepcorns"
            width="100%"
            height="390"
            src="https://www.youtube.com/embed/kFII05-bhGU?start=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fapp.pepcorns.com&amp;widgetid=1"
          ></iframe>
        </div >
        <div className="investor-details" style={{ borderTop: '1px solid grey', borderBottom: '1px solid grey' }}>
         
          <div className='upperdiv' style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <div className='innerdiv' style={{ textAlign: 'center', padding: '20px', border: '1px solid #ccc', backgroundColor: '#f8f8f8' }}>
              <div>
                <h5 style={{ fontSize: '20px', color: '#333', margin: '0', padding: '0' }}>₹1450000</h5>
                <p style={{ fontSize: '14px', color: '#666', margin: '5px 0' }}>56.20% of minimum goal raised</p>
              </div>
              <div>
                <h5 style={{ fontSize: '20px', color: '#333', margin: '0', padding: '0' }}>113</h5>
                <p style={{ fontSize: '14px', color: '#666', margin: '5px 0' }}>Total investors</p>
              </div>
              <div>
                <h5 style={{ fontSize: '20px', color: '#333', margin: '0', padding: '0' }}>16 Days</h5>
                <p style={{ fontSize: '14px', color: '#666', margin: '5px 0' }}>Left to Invest</p>
              </div>
              <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginTop: '10px' }}>
                Login To Invest
              </button>
              <p style={{ fontSize: '14px', color: '#333', marginTop: '10px' }}>₹ 1000 Minimum Investment</p>
            </div>
          </div>

        </div>
      </div>

      <a target="_blank" href="https://youtu.be/kFII05-bhGU" style={{ color: 'black' }}>Unable to view video ? Click here</a>
    </div>
  )
}

export default MidContainer