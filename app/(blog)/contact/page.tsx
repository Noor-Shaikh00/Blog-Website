"use client";

import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import "./contact.css";

const Contact = () => {
  const [notification, setNotification] = useState(""); // State for notification

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Show success notification
    setNotification("Message sent successfully!");
    setTimeout(() => setNotification(""), 3000); // Clear the notification after 3 seconds
  };

  return (
    <div className="contact-container">
      <div className="contact-overlay">
        <div className="contact-content">
          <div className="contact-left">
            <h1>Contact Us</h1>
            <p>Feel Free To Contact Me</p>
            <div className="contact-info">
              <div className="contact-item">
                <IoHome size={30} />
                <div>
                  <h3>Address</h3>
                  <p>Gulistan-e-Jauhar</p>
                </div>
              </div>
            </div>
            <div className="contact-item">
              <BsTelephone size={30} />
              <div>
                <h3>Phone</h3>
                <p>92 313 2272 190</p>
              </div>
            </div>
            <div className="contact-item">
              <IoMailOutline size={30} />
              <div>
                <h3>Email</h3>
                <p>n76685248@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <h2>Send Message</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Type your message" required></textarea>
              <button type="submit">Send</button>
            </form>
            {/* Notification */}
            {notification && (
              <div className="notification">
                {notification}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;