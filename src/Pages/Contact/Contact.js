import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import SocialMedia from '../../Components/SocialMedia/SocialMedia.js';
import CustomAlert from '../../Components/AlertMessage/AlertMessage.js';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const sendData = (e) => {
    e.preventDefault();

    const newClient = {
      name,
      email,
      message
    }

    axios.post("http://localhost:8070/client/add", newClient)
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");
        setAlertMessage("Message sent successfully! Thank you for your interest.");
        setAlertType("success"); // Set the alert type to "success"
        setShowAlert(true);
      })
      .catch((err) => {
        setAlertMessage("Oops! There was an error processing your request. Please try again later.");
        setAlertType("error"); // Set the alert type to "error"
        setShowAlert(true);
      })
  }

  const closeAlert = () => {
    setShowAlert(false);
  }

  return (
    <div style={{ marginTop: 200 }} className="contact-page">
      <div className='SocialMedi'>
        <SocialMedia/>
      </div>
      <h1>Contact Us</h1>
      <form onSubmit={(e) => sendData(e)}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter Message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />

        <button type="submit">Submit</button>
        <div className="success-message"></div>
      </form>

      {showAlert && (
        <CustomAlert
          message={alertMessage}
          onClose={closeAlert}
          type={alertType} // Pass the alert type as a prop
        />
      )}
    </div>
  );
}
