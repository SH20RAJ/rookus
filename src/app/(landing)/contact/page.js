"use client"; // Add this directive at the top of the file

import { useState } from "react";
import { NavBar } from "@/components/NavBar";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    user_name: "",
    user_email: "",
    reply_to: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceID = "service_ab0ncrk";
    const templateID = "template_wrhighr";
    const userID = "JRlaG3hag5xl7193h";

    const templateParams = {
      from_name: formData.from_name,
      user_name: formData.user_name,
      user_email: formData.user_email,
      reply_to: formData.reply_to,
      message: formData.message,
    };

    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceID,
          template_id: templateID,
          user_id: userID,
          template_params: templateParams,
        }),
      }
    );

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({
        from_name: "",
        user_name: "",
        user_email: "",
        reply_to: "",
        message: "",
      });
    } else {
      alert("Oops! Something went wrong. Please try again later.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Inline styles
  const styles = {
    container: {
      margin: "25vh 10vw",
      display: "flex",
      flexWrap: "wrap",
      backgroundColor: "#000",
      color: "#fff",
      padding: "2rem",
      gap: "2rem",
      fontFamily: "'Courier New', Courier, monospace",
    },
    info: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      marginRight: "3rem",
    },
    title: {
      fontSize: "5rem",
      fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
    },
    form: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      boxShadow: "20px 20px 30px #f9a826",
      border: "solid 1px white",
      borderRadius: "10px",
      padding: "2rem",
    },
    input: {
      color: "#fff",
      backgroundColor: "transparent",
      width: "100%",
      boxSizing: "border-box",
      padding: "0.7em 0.5em",
      border: "none",
      borderBottom: "1px solid rgba(221, 221, 221, 0.39)",
      marginBottom: "1rem",
    },
    button: {
      alignSelf: "center",
      padding: "0.75rem 1.5rem",
      fontSize: "1.125rem",
      color: "#fff",
      backgroundColor: "#f9a826",
      border: "none",
      borderRadius: "0.25rem",
      cursor: "pointer",
      textTransform: "uppercase",
      marginTop: "4rem",
      width: "fit-content",
    },
    socialMediaButtons: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginTop: "20px",
    },
    socialButton: {
      display: "inline-block",
      padding: "10px 20px",
      color: "white",
      textDecoration: "none",
      borderRadius: "5px",
      transition: "background-color 0.3s ease, transform 0.3s ease",
    },
    whatsapp: { border: "1px solid #25D366" },
    instagram: { border: "1px solid #E1306C" },
    linkedin: { border: "1px solid #0077B5" },
  };

  return (
    <>
      <div className="w-full flex flex-col h-screen justify-center items-center">
        <h1 className="text-4xl font-bold mb-4 ">Our Location</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117223.77996815203!2d85.32132625000001!3d23.343204800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5db7dd%3A0xdc09d49d6899f43e!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1728618878569!5m2!1sen!2sin"
          className="w-[80%] h-[80vh]"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div style={styles.container}>
        <div style={styles.info}>
          <div style={styles.title}>Get in Touch</div>
          <h1 style={{ fontSize: "1.5rem", color: "#f9a826" }}>
            Convey Your Ideas to Us
          </h1>
          <p
            style={{
              fontSize: "0.875rem",
              color: "#fff",
              marginBottom: "2rem",
            }}
          >
            Contact us for questions, hiring, technical assistance, or
            collaboration opportunities via the contact information provided.
          </p>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <span role="img" aria-label="phone">
                📞
              </span>
              <a
                href="tel:+919660673731"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  marginLeft: "0.5rem",
                }}
              >
                +91 96606 73731
              </a>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <span role="img" aria-label="email">
                ✉️
              </span>
              <a
                href="mailto:nikhil@rookus.in"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  marginLeft: "0.5rem",
                }}
              >
                nikhil@rookus.in
              </a>
            </div>
          </div>
          <div style={styles.socialMediaButtons}>
            <a
              href="https://api.whatsapp.com/send?phone=919660673731"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...styles.socialButton, ...styles.whatsapp }}
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/rookus.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...styles.socialButton, ...styles.instagram }}
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/rookus-in/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...styles.socialButton, ...styles.linkedin }}
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div style={styles.form}>
          <form onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </label>
            <label>
              User Name
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </label>
            <label>
              Reply To
              <input
                type="text"
                name="reply_to"
                value={formData.reply_to}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                style={{ ...styles.input, resize: "vertical" }}
              />
            </label>
            <button type="submit" style={styles.button}>
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
