
import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Context } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { ClipLoader } from 'react-spinners'; // Assuming you're using react-spinners for a nice loader

import { FaEye, FaEyeSlash, FaCheck, FaTimes } from 'react-icons/fa';
 

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErrors, setPasswordErrors] = useState({
    hasUpper: false,
    hasNumber: false,
    hasSpecial: false
  });  // Track password requirement errors
  const [confirmPassword, setConfirmPassword] = useState(""); // New state for confirm password
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [role, setRole] = useState("");
  const [education, setEducation] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false); // State to track if password has been touched


  const { mode, isAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  const changeAvatarHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setAvatarPreview(reader.result);
        setAvatar(file);
      };
    }
  };

   const validatePassword = (value) => {
    const errors = {
      hasUpper: /[A-Z]/.test(value),
      hasNumber: /[0-9]/.test(value),
      hasSpecial: /[!@#$%^&*]/.test(value)
    };
    setPasswordErrors(errors);
    setPassword(value);
    if (!passwordTouched) setPasswordTouched(true);  // Set password touched to true when typing starts
  };



const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match! Please enter the same password.");
      return;
    }
    if (!passwordErrors.hasUpper || !passwordErrors.hasNumber || !passwordErrors.hasSpecial) {
      toast.error("Please make sure your password meets all the requirements.");
      return;
    }
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("education", education);
    formData.append("role", role);
    formData.append("avatar", avatar);

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/user/register",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success(data.message);
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response ? error.response.data.message : "Error registering user");
    } finally {
      setLoading(false);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;

    
  }
  const allConditionsMet = passwordErrors.hasUpper && passwordErrors.hasNumber && passwordErrors.hasSpecial;

   const sectionStyle = {
    backgroundImage: `url('p.jpg')`, // Adjust the path as necessary
    backgroundSize: 'cover',
    backgroundPosition: 'center',
      backdropFilter: 'blur(0.8%)' 
  };

  return (
    <article className={mode === "dark" ? "dark-bg" : "light-bg"} style={sectionStyle}>
      <section className="auth-form">
        <form onSubmit={handleRegister}>
          <h1>REGISTER</h1>
          <select value={role} onChange={(e) => setRole(e.target.value)} disabled={loading}>
              <option value="">SELECT ROLE</option>
              <option value="Reader">READER</option>
              <option value="Author">AUTHOR</option>
            </select>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
            <input
              type="number"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={loading}
            />
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => validatePassword(e.target.value)}
              disabled={loading}
              style={{ paddingRight: '30px' }}  // Add padding to prevent text overlap
            />
            
            <span 
              style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>

            {passwordErrors.length > 0 && (
            <div style={{ color: 'red', marginTop: '5px' }}>
              Missing: {passwordErrors.join(', ')}
            </div>
          )}

               </div>
         {passwordTouched && !allConditionsMet && (
            <ul style={{ listStyleType: 'none', padding: 0, margin: '10px 0' }}>
              <li style={{ color: passwordErrors.hasUpper ? 'green' : 'red' }}>
                {passwordErrors.hasUpper ? <FaCheck /> : <FaTimes />} At least one uppercase letter
              </li>
              <li style={{ color: passwordErrors.hasNumber ? 'green' : 'red' }}>
                {passwordErrors.hasNumber ? <FaCheck /> : <FaTimes />} At least one number
              </li>
              <li style={{ color: passwordErrors.hasSpecial ? 'green' : 'red' }}>
                {passwordErrors.hasSpecial ? <FaCheck /> : <FaTimes />} At least one special character
              </li>
            </ul>
          )}

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={loading}
          />
          

           <select
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              disabled={loading}
            >
              <option value="">SELECT YOUR EDUCATION</option>
              <option value="Matric">Matric</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Graduation">Graduation</option>
              <option value="Masters">Masters</option>
              <option value="PhD">PhD</option>
            </select>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <div className="avatar">
                <img
                  src={avatarPreview || "/pic.jpg"}
                  alt="avatar"
                />
              </div>
              <input
                type="file"
                onChange={changeAvatarHandler}
                className="avatar_input_tag"
                style={{ border: "none" }}
                disabled={loading}
              />
            </div>
            <p>
              Already Registered? <Link to="/login">Login Now</Link>
            </p>
          <button className="submit-btn" type="submit" disabled={loading}>
            {loading ? <ClipLoader size={20} color="#fff" /> : 'REGISTER'}
          </button>
          <p>
            Already Registered? <Link to="/login">Login Now</Link>
          </p>
        </form>
        {/* <div className="banner">
          <img src="/r2.jpg" alt="Registration visual" />
        </div> */}
      </section>
    </article>
  );
};

export default Register;
