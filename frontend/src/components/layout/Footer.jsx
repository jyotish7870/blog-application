import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { FaGitSquare } from "react-icons/fa";
import { Context } from "../../main";

const Footer = () => {
  const isDashboard = useLocation("http://localhost:5173/dashboard");
  const { mode, setMode } = useContext(Context);

  return (
    <footer
      className={
        isDashboard.pathname === "/dashboard"
          ? "hideFooter"
          : mode === "light"
          ? "light-footer"
          : "dark-footer"
      }
    >
      <div className="container">
        <div className="about">
          <h3>About</h3>
          <p>
            
A blog application is a platform that facilitates the creation, publishing, and management of blog posts. These applications are used by individuals, companies, and other entities to share insights, news, and stories on various topics. Below, I'll introduce you to what a blog application does and its uses.
          
            {/* Blog applications come in various forms, from simple platforms designed for personal blogging to sophisticated systems tailored for professional content management. At its core, a blog application typically includes a content management system (CMS) that helps users write, edit, publish, and manage blog posts. It often features tools for formatting content, adding images and videos, and integrating with other digital platforms. */}
          </p>
          <p>
            <span>Email:</span>jk@gmail.com
          </p>
          <p>
            <span>Phone:</span>1234567890
          </p>
        </div>
        <div className="quick_links">
          <h3>Quick Links</h3>
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
          </ul>
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Sports</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy......</li>
            {/* <li>Medical</li>
            <li>Food</li>
            <li>Education</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li> */}
          </ul>
        </div>
        <div className="news_letter">
          <div>
            <h3>Weekly Newletter</h3>
            <p>Get blog articles and offer via email</p>
          </div>
          <div>
            <input type="text" placeholder={`Your Email`} />
            <button>Contact Us</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="logo"> <span>BLOG</span></div>
        <div className="links">
          
          <Link to={"/"} target="_blank">
            <FaGitSquare />
          </Link>
          <Link to={"https://www.instagram.com/jyotish7173/?next=%2F"} target="_blank">
            <AiFillInstagram/>
          </Link>
          <Link to={"/"} target="_blank">
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
