import React from 'react';


function About() {
  return (
    <div style={{marginTop:200}} className="app">
      <header className="header">
        <h1>Welcome to Alfagan Solutions</h1>
        <p>Empowering Industries with Innovative Software Solutions</p>
      </header>
      <section className="industry-solutions">
        <h2>Explore Our Industry Solutions</h2>
        <div className="industry">
          <h3>Education</h3>
          <p>Enhancing Learning Experiences for the Digital Age</p>
          <p>Elevate education through our advanced e-learning platforms, virtual classrooms, and personalized learning management systems. We create interactive educational tools that engage students, empower educators, and facilitate seamless remote learning.</p>
        </div>
        <div className="industry">
          <h3>Publishing</h3>
          <p>Revolutionizing Content Creation and Distribution</p>
          <p>In the publishing realm, our software streamlines the creation of print books, eBooks, and digital content. With intuitive design tools and automated workflows, authors and publishers can bring their visions to life and reach a global audience effortlessly.</p>
        </div>
        <div className="industry">
          <h3>Healthcare</h3>
          <p>Digitally Transforming Healthcare Access and Management</p>
          <p>Our healthcare solutions simplify patient care by enabling telemedicine, digital patient records, and appointment scheduling. Experience quicker and more informed medical decisions, while healthcare professionals enjoy enhanced communication and coordination.</p>
        </div>
        {/* Repeat the same structure for the remaining industries */}
        {/* Include sections for Retail, Finance, Manufacturing, Real Estate, Hospitality, Transportation, and Agriculture */}
      </section>
      <section className="contact">
        <h2>Contact Us for a Consultation</h2>
        <p>Let's Discuss Your Unique Industry Requirements</p>
        {/* Add contact form or contact information */}
      </section>
    </div>
  );
}

export default About;
