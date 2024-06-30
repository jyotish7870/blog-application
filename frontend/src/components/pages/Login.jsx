


// import React, { useContext, useState } from "react";
// import { Link, Navigate, useNavigate } from "react-router-dom";
// import { Context } from "../../main";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { ClipLoader } from 'react-spinners'; // Improved loader
// import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Icons for the visibility toggle

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
//   const [role, setRole] = useState("");
//   const [rememberMe, setRememberMe] = useState(false); // State for "Remember Me" checkbox
//   const [loading, setLoading] = useState(false);

//   const { mode, isAuthenticated } = useContext(Context);
//   const navigateTo = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await axios.post(
//         "http://localhost:3000/api/v1/user/login",
//         { email, password, role, rememberMe },
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       toast.success(res.data.message);
//       navigateTo("/");
//     } catch (error) {
//       toast.error(error.response?.data.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (isAuthenticated) {
//     return <Navigate to="/" />;
//   }
  
//   const sectionStyle = {
//     backgroundImage: `url('lo.avif')`, // Adjust the path as necessary
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backdropFilter: 'blur(0.8%)' 
//   };

//   return (
//     <article className={mode === "dark" ? "dark-bg" : "light-bg"} style={sectionStyle}>
//       <section className="auth-form">
//         {/* Card with different background color */}
//         <div className="auth-card"> {/* Add a class for styling */}
//           <form onSubmit={handleLogin}>
//             <h1>LOGIN</h1>
//             <select value={role} onChange={(e) => setRole(e.target.value)}>
//               <option value="">SELECT ROLE</option>
//               <option value="Reader">READER</option>
//               <option value="Author">AUTHOR</option>
//             </select>
//             <input
//               type="email"
//               placeholder="Your Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <div style={{ position: 'relative' }}>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 style={{ paddingRight: '30px' }}
//               />
//               <span 
//                 style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </span>
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//               <div>
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={rememberMe}
//                     onChange={(e) => setRememberMe(e.target.checked)}
//                   />
//                   Remember Me
//                 </label>
//               </div>
//               <div>
//                 <Link to="/forgot-password">Forget Password?</Link>
//               </div>
//             </div>
//             <p>
//               Don't have any Account? <Link to="/register">Register Now</Link>
//             </p>
//             <button className="submit-btn" type="submit" disabled={loading}>
//               {loading ? <ClipLoader size={20} color="#fff" /> : 'LOGIN'}
//             </button>
//           </form>
//         </div>
//       </section>
//     </article>
//   );
// };

// export default Login;


import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Context } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { ClipLoader } from 'react-spinners'; // Improved loader
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Icons for the visibility toggle

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword]= useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [role, setRole] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // State for "Remember Me" checkbox
  const [loading, setLoading] = useState(false);

  const { mode, isAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/login",
        { email, password, role, rememberMe },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(res.data.message);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response?.data.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  
  const sectionStyle = {
    backgroundImage: `url('lo.avif')`, // Adjust the path as necessary
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backdropFilter: 'blur(0.8%)' 
  };

  return (
    <article className={mode === "dark" ? "dark-bg" : "light-bg"} style={sectionStyle}>
      <section className="auth-form">
        {/* Card with different background color */}
        <div className="auth-card"> {/* Add a class for styling */}
          <form onSubmit={handleLogin}>
            <h1>LOGIN</h1>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">SELECT ROLE</option>
              <option value="Reader">READER</option>
              <option value="Author">AUTHOR</option>
            </select>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ paddingRight: '30px' }}
              />
              <span 
                style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span className="checkmark"></span>
                  Remember Me
                </label>
              </div>
              <div>
                <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
              </div>
            </div>
            <p>
              Don't have an account? <Link to="/register">Register Now</Link>
            </p>
            <button className="submit-btn" type="submit" disabled={loading}>
              {loading ? <ClipLoader size={20} color="#fff" /> : 'LOGIN'}
            </button>
          </form>
        </div>
      </section>
    </article>
  );
};

export default Login;
