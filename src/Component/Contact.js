import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to manage success or error message
  const [status, setStatus] = useState("");

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock form submission (In a real app, you would send data to an API)
    setTimeout(() => {
      setStatus("Thank you for reaching out! We will get back to you soon.");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <p>
        If you have any questions or inquiries, feel free to reach out to us.
      </p>

      <div className="contact-info">
        <div className="contact-method">
          <h3>Our Office</h3>
          <p>101 Malviya Nagar, Jaipur, Rajasthan, India</p>
        </div>
        <div className="contact-method">
          <h3>Email Us</h3>
          <p>bltechnologies@tech.com</p>
        </div>
        <div className="contact-method">
          <h3>Call Us</h3>
          <p>+91 9549607047</p>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      {status && <div className="status-message">{status}</div>}
    </section>
  );
}

export default Contact;
