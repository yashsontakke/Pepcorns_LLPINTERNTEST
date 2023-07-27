import React from 'react';
import InvestmentOption from './InvestmentOption';
import investmentData from '../investmentData';

const InvestContainer = () => {
  return (
    <div>
      <div>
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
        {console.log("true")}
      {investmentData.map((option, index) => (
        <InvestmentOption key={index} option={option} />
      ))}

      <div>
        <strong>
          Custom Offer?
          <a href="">
            <span>Click Here</span>
          </a>
        </strong>
      </div>
    </div>
  );
};

export default InvestContainer;
