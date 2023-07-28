import React from 'react';
import InvestmentOption from './InvestmentOption';
import investmentData from '../investmentData';
import './invest.css'

const InvestContainer = () => {
  return (
    <div className='investopen'>
      
      <div style={{display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'center'}}>
      <div style={{width:'80%' , margin:'20px' , padding:'20px' , marginTop:"0px" , marginBottom:"0px" , paddingTop:"0px"}}>
        <h1>Documents</h1>
        <div>
          <a
            href="https://api.pepcorns.com/clientassets/icon1677255822062.zip"
            target="_blank"
            download="yourpdf.pdf"
          >
            CosIQ.zip
          </a>
        </div>
        <ion-icon name="cloud-download-outline" role="img" aria-label="cloud download outline"></ion-icon>
      </div>
      {investmentData.map((option, index) => (
        <InvestmentOption key={index} option={option} />
      ))}
      <div style={{width:'80%' , margin:'20px' , padding:'20px'}}>
        <strong>
          Custom Offer?
          <a href="">
            <span>Click Here</span>
          </a>
        </strong>
      </div>
      </div>
      
    </div>
  );
};

export default InvestContainer;
