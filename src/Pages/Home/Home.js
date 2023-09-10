import React from 'react';
import BackgroundVideo from '../../Components/Assets/home.mp4';
import BackgroundImage from '../../Components/Assets/home.jpg';
import './Home.css';
import Brain from '../../Components/Brain/Brain';
import GetPlan from '../../Components/GetPlan/GetPlan';
import ContactSection from '../../Components/ContactSection/ContactSection.js';
import SectionHome from '../../Components/SectionHome/SectionHome.js'
import SocialMedia from '../../Components/SocialMedia/SocialMedia.js'

const Home = () => {
  
  return (
  
    <div className='BackgroundImageContainer'>
        <div className='SocialMedia'>
     <SocialMedia/>
     </div>

      <GetPlan/>

    <img  className='BackgroundImage' src={BackgroundImage} alt="BackgroundImage" />
    
<video className='BackgroundVideo' autoPlay loop muted style={{marginBottom:'450px', marginTop:'-800px' , marginLeft:'50px', boxShadow: '0px 4px 20px rgba(50, 50, 50, 100)' }}>
  <source src={BackgroundVideo} type='video/mp4'/>
  
</video>

        <div className='TextContainer'>

       <p className='WelcomeHome'>Welcome to ALFAGAN Software Company.</p>
       <h1 className='EmpHome'>Empowering Tomorrow's Innovations.</h1>
       <p  className='WeHome'>We offer a range of services to meet your needs.</p>
      </div>
        <Brain/>


 <div className='sectionHome'>    
<SectionHome/>
</div>  
 {/* Include the ContactSection component */}
 <div className='homecontact'>
 <ContactSection />
 </div>
     </div>
     
  );
};

export default Home;
