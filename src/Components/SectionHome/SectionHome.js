import React from 'react';
import './SectionHome.css'; // Your custom CSS file
import Innovation from '../../Components/Assets/Innovation.png';
import Digital from '../../Components/Assets/Digital.png';




const IndustrySolution = ({title, shortDescription, longDescription, imageUrl, quotation,className}) => (
  <div className={`indust-card ${className}`}> {/* Use the industry-card class and the provided className */}
    <div className="indust-content">
      <div className="indust-text">
        <h3>{title}</h3>
        <h1 className="sho-description">{shortDescription}</h1>
        <h2 style={{fontSize:70, color:'#f29af5' }}>{quotation}</h2>
        <p className="lo-description">{longDescription}</p>
      </div>
      <div className="indust-image">
        <img src={imageUrl} alt={`${title} Solution`} />
      </div>
    </div>
  </div>
);
const Projects = () => {
  return (
    
    <div className="home-page" style={{marginTop:200}}>
     
      
      <section className="industry-section">
        <h2 className='Explore-Our-Industry-Solutions' style={{marginTop:100 , marginLeft:-200 , marginBottom:50}}>Explore Our Software</h2>
        <div className="industry-solutions">
          <IndustrySolution 
            title="Empowering Industries with Innovative Software Solutions"
            quotation="🙶"
            longDescription="At Alfagan, we specialize in creating cutting-edge software solutions tailored to meet the unique needs of various industries. Our team of experts collaborates closely with clients to deliver transformative technology that drives growth and efficiency across sectors."
            imageUrl={Innovation}
            className="Innovation"
          />

          <IndustrySolution
            title="Innovative Solutions for Every Digital Challenge"
            quotation="🙶"
            longDescription="Innovative Solutions for Every Digital Challenge: Discover cutting-edge strategies to conquer data security, cybersecurity, digital transformation, customer engagement, data management, and more. Stay ahead in the digital age with these transformative solutions."
            imageUrl={Digital}
            className="Digital"
          />
      
       
        </div>
      </section>
      
     
    </div>
  );
};

export default Projects;
