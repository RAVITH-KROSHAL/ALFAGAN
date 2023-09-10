import React from 'react';
import './GetPlan.css';


const CTAButton = () => {
  

  const handleButtonClick = () => {
    window.location.href = '/contact';
  };

  return (
    <button style={{marginTop:300 , zIndex: 9999}} className='CTAButton' onClick={handleButtonClick}>
    Get Started
  </button>
  )

}
export default CTAButton;
