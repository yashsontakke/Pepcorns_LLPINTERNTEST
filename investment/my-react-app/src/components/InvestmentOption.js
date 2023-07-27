import React from 'react';

const InvestmentOption = ({ option }) => {
    
  const { amount, rewards, terms, left } = option;

  return (
    <div>
      <div>
        <h5>₹ {amount}</h5>
        <hr />
        <div>
          <span>
            <p>
              <strong>Rewards</strong>
            </p>
            <ul>
              {rewards.map((reward, index) => (
                <li key={index}>{reward}</li>
              ))}
            </ul>
          </span>
          <span>
            <p>
              <strong>Terms and Conditions</strong>
            </p>
            {terms}
          </span>
        </div>
        <button>Invest &nbsp; <strong>₹{amount}</strong></button>
        <span>
          <p>Limited (<strong>{left} of 100</strong> left)</p>
        </span>
      </div>
    </div>
  );
};

export default InvestmentOption;
