import React from 'react';

const InvestmentOption = ({ option }) => {
    
  const { amount, rewards, terms, left } = option;

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', width: '80%' }}>
    <div>
      <h5 style={{ fontSize: '24px', margin: '0' }}>₹ {amount}</h5>
      <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '10px 0' }} />
      <div>
        <span>
          <p><strong>Rewards</strong></p>
          <ul style={{ margin: '0', paddingLeft: '20px' }}>
            {rewards.map((reward, index) => (
              <li key={index}>{reward}</li>
            ))}
          </ul>
        </span>
        <span>
          <p><strong>Terms and Conditions</strong></p>
          {terms}
        </span>
      </div>
      <button style={{ display: 'inline-block', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 20px', fontSize: '18px', cursor: 'pointer', width:"100%" , marginTop:"20px" }}>
        Invest &nbsp; <strong>₹{amount}</strong>
      </button>
      <span style={{ display: 'block', marginTop: '10px' }}>
        <p>Limited (<strong style={{ color: '#ff0000' }}>{left} of 100</strong> left)</p>
      </span>
    </div>
  </div>
  );
};

export default InvestmentOption;
