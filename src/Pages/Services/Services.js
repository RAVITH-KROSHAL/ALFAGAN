import React from 'react';
import './Services.css'; // Your custom CSS file
import CustomSoftwareDevelopment from '../../Components/Assets/Custom Software Development.png';
import WebDevelopment from '../../Components/Assets/Web Development.png';
import MobileAppDevelopment from '../../Components/Assets/Mobile App Development.png';
import SoftwareConsulting from '../../Components/Assets/Software Consulting.png';
import UIUXDesign from '../../Components/Assets/UIUX Design.png';
import SoftwareTestingandQualityAssurance from '../../Components/Assets/Software Testing and Quality Assurance.png';
import CloudSolutions from '../../Components/Assets/Cloud Solutions.png';
import DataAnalyticsandBusinessIntelligence from '../../Components/Assets/Data Analytics and Business Intelligence.png';
import CybersecuritySolutions from '../../Components/Assets/Cybersecurity Solutions.png';
import MaintenanceandSupport from '../../Components/Assets/Maintenance and Support.png';
import InternetofThingsSolutions from '../../Components/Assets/IoT (Internet of Things) Solutions.png';
import AugmentedRealityandVirtualReality from '../../Components/Assets/Augmented Reality (AR) and Virtual Reality (VR).png';
import BlockchainDevelopment from '../../Components/Assets/Blockchain Development.png';
import ContactSection from '../../Components/ContactSection/ContactSection.js';
import SocialMedia from '../../Components/SocialMedia/SocialMedia.js'



const IndustrySolution = ({title, shortDescription, longDescription, imageUrl, quotation, className}) => (
  <div className={`industry-card ${className}`}> {/* Use the industry-card class and the provided className */}
    <div className="industry-content">
      <div className="industry-text">
        <h3>{title}</h3>
        <h5 className="short-description">{shortDescription}</h5>
        <h2 style={{fontSize:70, color:'#f29af5' }}>{quotation}</h2>
        <p className="long-description">{longDescription}</p>
      </div>
      <div className="industry-image">
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
        <h1 style={{fontSize:52}}>Innovative Solutions for Every Digital Challenge</h1>
        <p style={{marginTop:10}}>At Alfagan, we specialize in creating cutting-edge software solutions tailored to meet the unique needs of various industries. Our team of experts collaborates closely with clients to deliver transformative technology that drives growth and efficiency across sectors.</p>
      </header>
      
      <section className="industry-section">
        <h2 className='Explore-Our-Services' style={{marginTop:100 , marginLeft:-200 , marginBottom:50}}>Explore Our Services</h2>
        <div className="industry-solutions">
          <IndustrySolution
            title="Custom Software Development"
            shortDescription="Tailored applications to elevate your business efficiency and productivity."
            quotation="🙶"
            longDescription="Elevate your business with personalized digital solutions. Our custom software development services are designed to enhance your operational efficiency and productivity. By meticulously aligning software functionalities with your unique needs, we empower your team to achieve more, streamline workflows, and innovate in ways that are specific to your industry and objectives."
            imageUrl={CustomSoftwareDevelopment}
            className="CustomSoftwareDevelopment"
          />

          <IndustrySolution
            title="Web Development"
            shortDescription="Crafting user-centric websites that captivate, engage, and convert visitors."
            quotation="🙶"
            longDescription="Crafting digital experiences that leave a lasting impression. Our web development services go beyond aesthetics to create user-centric websites that captivate visitors, encourage engagement, and drive conversions. Through seamless navigation, compelling design, and strategic content, we transform online interactions into meaningful connections, fostering brand loyalty and digital success."
            imageUrl={WebDevelopment}
            className="WebDevelopment"
          />
          <IndustrySolution
            title="Mobile App Development"
            shortDescription="Transforming ideas into seamless mobile experiences across platforms."
            quotation="🙶"
            longDescription="Bringing ideas to life in the palm of your hand. Our mobile app development services bridge innovation and technology, seamlessly transforming concepts into immersive mobile experiences that resonate across multiple platforms. With a focus on intuitive design and flawless functionality, we empower users to engage, explore, and interact with your brand in new and exciting ways."
            imageUrl={MobileAppDevelopment}
            className="MobileAppDevelopment"
          />
          <IndustrySolution
            title="Software Consulting"
            shortDescription="Your trusted partner for strategic guidance in software architecture and planning."
            quotation="🙶"
            longDescription="Navigating the complexities of software evolution. As your trusted software consulting partner, we provide expert guidance in strategic architecture and planning. Our seasoned consultants collaborate closely with your team, offering insights that drive informed decisions, optimize processes, and ensure the successful realization of your software vision."
            imageUrl={SoftwareConsulting}
            className="SoftwareConsulting"
          />
          <IndustrySolution
            title="UI/UX Design"
            shortDescription="Creating stunning interfaces that amplify user engagement and satisfaction."
            quotation="🙶"
            longDescription="Crafting user-centered experiences that captivate and resonate. Our UI/UX design services delve beyond aesthetics, meticulously sculpting interfaces that not only enhance visual appeal but also elevate user engagement and satisfaction. Through intuitive navigation, seamless interactions, and a deep understanding of user behaviors, we turn digital interactions into immersive journeys that leave lasting impressions."
            imageUrl={UIUXDesign}
            className="UIUXDesign"
          />
          <IndustrySolution
            title="Software Testing and Quality Assurance"
            shortDescription="Ensuring flawless performance and security for your software applications."
            quotation="🙶"
            longDescription="Fortifying your software with unwavering reliability. Our software testing and quality assurance services stand as a vigilant shield, ensuring impeccable performance and stringent security for your valuable applications. With meticulous testing methodologies and thorough evaluations, we guarantee that your software not only meets but exceeds user expectations while maintaining the highest standards of security."
            imageUrl={SoftwareTestingandQualityAssurance}
            className="SoftwareTestingandQualityAssurance"
          />
          <IndustrySolution
            title="Cloud Solutions"
            shortDescription="Unlocking scalability and accessibility with cutting-edge cloud-based services."
            quotation="🙶"
            longDescription="Embrace the limitless potential of cloud innovation. Our cloud solutions transcend traditional boundaries, harnessing the power of cutting-edge services to unlock unparalleled scalability and accessibility. By seamlessly integrating your operations with the cloud, we empower you to break free from limitations, streamline processes, and revolutionize the way you manage, store, and access your data and applications."
            imageUrl={CloudSolutions}
            className="CloudSolutions"
          />
           <IndustrySolution
            title="Data Analytics and Business Intelligence"
            shortDescription="Transforming data into insights that drive informed decisions and strategies."
            quotation="🙶"
            longDescription="Unveil the hidden power within your data. Our data analytics and business intelligence services delve deep into the realms of data, transforming raw information into strategic insights. By employing advanced analytics techniques and visualization tools, we enable you to unearth patterns, trends, and correlations that drive the informed decisions and strategies essential for your business's growth and success."
            imageUrl={DataAnalyticsandBusinessIntelligence}
            className="DataAnalyticsandBusinessIntelligence"
          />
           <IndustrySolution
            title="Cybersecurity Solutions"
            shortDescription="Fortifying your digital assets against evolving threats for ultimate protection."
            quotation="🙶"
            longDescription="Safeguarding your digital landscape in an ever-evolving threat landscape. Our cybersecurity solutions stand as an impenetrable shield, defending your valuable assets with cutting-edge technologies and proactive strategies. Rest assured, your digital ecosystem is fortified, ensuring unwavering protection against even the most sophisticated threats."
            imageUrl={CybersecuritySolutions}
            className="CybersecuritySolutions"
          />
           <IndustrySolution
            title="Maintenance and Support"
            shortDescription="Your partner in sustaining software excellence through ongoing maintenance."
            quotation="🙶"
            longDescription="Ensuring the longevity of software brilliance. Our maintenance and support services stand as your steadfast partner in upholding software excellence. With unwavering commitment, we provide continuous care, updates, and troubleshooting, guaranteeing optimal performance and user satisfaction throughout the software's lifecycle."
            imageUrl={MaintenanceandSupport}
            className="MaintenanceandSupport"
          />
             <IndustrySolution
            title="IoT (Internet of Things) Solutions"
            shortDescription="Creating intelligent connections for a smarter, more automated world."
            quotation="🙶"
            longDescription="Unleash the potential of connected intelligence. Our IoT solutions forge intricate connections to weave a smarter, more automated world. Through cutting-edge technology and innovative integration, we pave the way for a future where devices communicate seamlessly, transforming data into actionable insights and propelling us towards a new era of efficiency and innovation."
            imageUrl={InternetofThingsSolutions}
            className="InternetofThingsSolutions"
          />
            <IndustrySolution
            title="Augmented Reality (AR) and Virtual Reality (VR)"
            shortDescription="Elevating experiences through immersive applications across industries."
            quotation="🙶"
            longDescription="Immerse in a new realm of possibilities. Our Augmented Reality (AR) and Virtual Reality (VR) solutions redefine experiences across diverse industries. Through innovative applications, we blend digital and physical realms, unlocking unprecedented engagement and transformation. Step into a world where reality is augmented, and virtual realms come to life, reshaping the way we interact, learn, and create."
            imageUrl={AugmentedRealityandVirtualReality}
            className="AugmentedRealityandVirtualReality"
          />
            <IndustrySolution
            title="Blockchain Development"
            shortDescription="Pioneering decentralized solutions for secure, transparent transactions."
            quotation="🙶"
            longDescription="Forging the future of secure transactions. Our blockchain development expertise leads the way in creating decentralized solutions that redefine security and transparency. Through cutting-edge technology, we empower industries with tamper-proof records and streamlined processes, revolutionizing the way transactions are conducted and fostering a new era of trust and efficiency."
            imageUrl={BlockchainDevelopment}
            className="BlockchainDevelopment"
          />
         
         
          {/* Repeat IndustrySolution component for other industries */}
        </div>
      </section>
      
      <ContactSection />
    </div>
  );
};

export default Projects;
