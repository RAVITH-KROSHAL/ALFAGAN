import React from 'react';
import './Projects.css'; // Your custom CSS file
import Education from '../../Components/Assets/Education.png';
import Publishing from '../../Components/Assets/Publishing.png';
import Healthcare from '../../Components/Assets/Healthcare.png';
import Retail from '../../Components/Assets/Retail.png';
import Finance from '../../Components/Assets/Finance.png';
import Manufacturing from '../../Components/Assets/Manufacturing.png';
import RealEstate from '../../Components/Assets/Real Estate.png';
import Hospitality from '../../Components/Assets/Hospitality.png';
import Transportation from '../../Components/Assets/Transportation.png';
import Agriculture from '../../Components/Assets/Agriculture.png';
import ContactSection from '../../Components/ContactSection/ContactSection.js';
import SocialMedia from '../../Components/SocialMedia/SocialMedia.js'


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
       <div className='SocialMedi'>
     <SocialMedia/>
     </div>
      <header className="header">
        <h1 style={{fontSize:52}}>Welcome to Alfagan Solutions</h1>
        <h3>Empowering Industries with Innovative Software Solutions</h3>
        <p style={{marginTop:10}}>At Alfagan, we specialize in creating cutting-edge software solutions tailored to meet the unique needs of various industries. Our team of experts collaborates closely with clients to deliver transformative technology that drives growth and efficiency across sectors.</p>
      </header>
      
      <section className="industry-section">
        <h2 className='Explore-Our-Industry-Solutions' style={{marginTop:100 , marginLeft:-200 , marginBottom:50}}>Explore Our Industry Solutions</h2>
        <div className="industry-solutions">
          <IndustrySolution 
            title="Education"
            shortDescription="Enhancing Learning Experiences for the Digital Age"
            quotation="🙶"
            longDescription="Elevate education through our advanced e-learning platforms, virtual classrooms, and personalized learning management systems. We create interactive educational tools that engage students, empower educators, and facilitate seamless remote learning."
            imageUrl={Education}
            className="Education"
          />

          <IndustrySolution
            title="Publishing"
            shortDescription="Revolutionizing Content Creation and Distribution"
            quotation="🙶"
            longDescription="In the publishing realm, our software streamlines the creation of print books, eBooks, and digital content. With intuitive design tools and automated workflows, authors and publishers can bring their visions to life and reach a global audience effortlessly."
            imageUrl={Publishing}
            className="Publishing"
          />
          <IndustrySolution
            title="Healthcare"
            shortDescription="Digitally Transforming Healthcare Access and Management"
            quotation="🙶"
            longDescription="Our healthcare solutions simplify patient care by enabling telemedicine, digital patient records, and appointment scheduling. Experience quicker and more informed medical decisions, while healthcare professionals enjoy enhanced communication and coordination."
            imageUrl={Healthcare}
            className="Healthcare"
          />
          <IndustrySolution
            title="Retail"
            shortDescription="Boosting Retail Efficiency and Customer Engagement"
            quotation="🙶"
            longDescription="For the retail sector, we offer comprehensive solutions for inventory management, point-of-sale systems, and e-commerce platforms. Enhance customer experiences with seamless online shopping and optimized in-store operations."
            imageUrl={Retail}
            className="Retail"
          />
          <IndustrySolution
            title="Finance"
            shortDescription="Empowering Financial Institutions with Advanced Technology"
            quotation="🙶"
            longDescription="In the financial industry, our software facilitates secure online banking, streamlined transaction processing, and data-driven analytics. Stay ahead in a rapidly changing landscape with tools designed for efficiency, compliance, and customer satisfaction."
            imageUrl={Finance}
            className="Finance"
          />
          <IndustrySolution
            title="Manufacturing"
            shortDescription="Optimizing Manufacturing Processes for Better Productivity"
            quotation="🙶"
            longDescription="Unlock the potential of Industry 4.0 with our manufacturing solutions. From process automation to supply chain management, we empower manufacturers to increase productivity, reduce costs, and maintain quality standards."
            imageUrl={Manufacturing}
            className="Manufacturing"
            
          />
          <IndustrySolution
            title="Real Estate"
            shortDescription="Modernizing Real Estate Transactions and Management"
            quotation="🙶"
            longDescription="Our real estate software simplifies property management, transaction tracking, and client communication. Real estate professionals can provide a seamless experience to buyers, sellers, and tenants, enhancing trust and efficiency."
            imageUrl={RealEstate}
            className="RealEstate"
          />
           <IndustrySolution
            title="Hospitality"
            shortDescription="Creating Exceptional Guest Experiences in Hospitality"
            quotation="🙶"
            longDescription="In the hospitality sector, our solutions cover reservation systems, guest management, and feedback analysis. Elevate guest satisfaction by streamlining bookings, check-ins, and personalized services."
            imageUrl={Hospitality}
            className="Hospitality"
          />
           <IndustrySolution
            title="Transportation"
            shortDescription="Revamping Transportation Systems for Efficiency"
            quotation="🙶"
            longDescription="For transportation, our software enables route optimization, fleet management, and real-time tracking. Enhance logistics operations and provide timely services that meet the demands of today's fast-paced world."
            imageUrl={Transportation}
            className="Transportation"
          />
           <IndustrySolution
            title="Agriculture"
            shortDescription="Modern Solutions for Sustainable Agriculture"
            quotation="🙶"
            longDescription="Our agricultural software offers data-driven insights for crop management, irrigation, and yield optimization. Contribute to sustainable farming practices while maximizing productivity and profitability."
            imageUrl={Agriculture}
            className="Agriculture"
          />
         
          {/* Repeat IndustrySolution component for other industries */}
        </div>
      </section>
      
      <ContactSection />
    </div>
  );
};

export default Projects;
