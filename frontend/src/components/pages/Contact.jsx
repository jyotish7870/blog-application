import React, { useContext, useState } from "react";
import { Context } from "../../main";

const ContactUs = () => {
  const { mode } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here for handling form submission, such as sending the data to a backend server
    console.log("Form submitted:", { name, email, message });
    // Clearing the form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className={mode === "dark" ? "dark-bg" : "light-bg"}>
        <div className="container">
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
