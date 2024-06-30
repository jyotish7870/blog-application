




import React, { useContext, useState } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!name || !email || !message) {
      setError("Please fill in all fields");
      return;
    }

    // Display loading state
    setLoading(true);

    // Simulate an API request (replace with actual API call)
    try {
      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Reset form fields
      setName("");
      setEmail("");
      setMessage("");
      // Display success message
      setSubmitted(true);
      setError("");
    } catch (error) {
      // Display error message
      setError("Something went wrong. Please try again later.");
    } finally {
      // Hide loading state
      setLoading(false);
    }
  };

  const sectionStyle = {
    backgroundColor: mode === "dark" ? "#2d2d2d" : "#f5f5f5",
    color: mode === "dark" ? "#ffffff" : "#333333",
  };

  return (
    <article className="about" style={sectionStyle}>
      <style>
        {`
          {/* /* Custom CSS for About page */ */}
          .about-container {
            margin: 0 auto;
            padding: 20px;
            max-width: 800px;
          }

          .category {
            margin-bottom: 40px;
          }

          .category h3 {
            font-size: 24px;
            margin-bottom: 15px;
            color: ${mode === "dark" ? "#ffffff" : "#007bff"};
          }

          .category p {
            font-size: 16px;
            line-height: 1.6;
            color: ${mode === "dark" ? "#ffffff" : "#333333"};
          }
        `}
      </style>
      <div className="about-container">
        <h2>About</h2>
        <div className="category">
          <h3>Lifestyle Blogs:</h3>
          <p>
            Lifestyle blogs cover a broad range of topics related to everyday
            life, including personal development, health and wellness,
            relationships, fashion, beauty, home decor, and travel. These blogs
            often offer advice, tips, and inspiration to help readers improve
            their quality of life and pursue their passions.
          </p>
        </div>

 <div className="category2">
          <h3>Technology Blogs:</h3>
          <p>
            Technology blogs explore the latest trends, innovations, gadgets,
            software, and developments in the world of technology. They cover
            topics such as smartphones, computers, artificial intelligence,
            internet of things (IoT), cybersecurity, social media, and emerging
            technologies. Technology blogs provide insights, reviews,
            tutorials, and industry analysis to help readers stay informed and
            make informed decisions about tech-related products and services.
          </p>
        </div>

        



         <div className="category3">
          <h3>Foods Blogs:</h3>
          <p>
            Food blogs focus on recipes, cooking tips, culinary techniques, restaurant reviews, food photography, and gastronomic experiences. They cater to food enthusiasts, home cooks, chefs, and anyone passionate about exploring different cuisines and flavors. Food blogs often feature mouthwatering images and detailed step-by-step instructions to help readers recreate delicious 
          </p>
        </div>


         <div className="category4">
          <h3>Sports Blogs:</h3>
          <p>
            Sports blogs focus on news, analysis, commentary, and updates
            related to various sports and athletic events. They cover topics
            such as game recaps, player profiles, team news, transfer rumors,
            match predictions, and sports betting tips. Sports blogs cater to
            fans of all levels and interests, from casual enthusiasts to
            die-hard supporters.
          </p>
        </div>




         <div className="category5">
          <h3>Medical Blogs:</h3>
          <p>
            Medical blogs focus on health, wellness, medical research, healthcare policy, disease prevention, treatment options, and patient education. They provide accurate, reliable information on various medical conditions, symptoms, diagnoses, and treatment modalities. Medical blogs aim to empower readers to make informed decisions about their health and well-being, while also raising awareness about important health issues and promoting public health initiatives.

Each category of blog serves a unique audience and provides valuable content and insights on its respective topic. Whether you're looking for lifestyle inspiration, sports updates, tech reviews, fashion trends, business advice, culinary delights, travel adventures, or health information, there's a blog out there to cater to your interests and passions.
          </p>
        </div>

         <div className="category6">
          <h3>Travels Blogs:</h3>
          <p>
            Travel blogs showcase destinations, travel itineraries, hotel reviews, travel tips, adventure stories, and cultural experiences from around the world. They inspire and inform readers about the joys of travel, whether it's solo backpacking adventures, family vacations, luxury getaways, or budget-friendly trips. Travel blogs often include stunning photography and personal anecdotes to transport readers to exotic locations and ignite their wanderlust.
          </p>
        </div>
        <div className="category">
          <h3>Economy & Business Blogs:</h3>
          <p>
            Economy and business blogs cover topics related to finance,
            economics, entrepreneurship, business management, investing, and
            corporate news. They provide analysis, insights, market trends,
            industry reports, and expert commentary on economic policies,
            financial markets, startups, small businesses, and multinational
            corporations. Economy and business blogs cater to professionals,
            investors, policymakers, and anyone interested in understanding
            the global economy and business landscape.
          </p>
        </div>
        {/* Contact Us section */}
        <div className="category">
          <h3>Contact Us:</h3>
          {submitted ? (
            <p className="text-success">
              Thank you for your message! We'll get back to you soon.
            </p>
          ) : (
            <>
              {error && <p className="text-danger">{error}</p>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            </>
          )}
        </div>
        {/* End Contact Us section */}
      </div>
    </article>
  );
};

export default About;




