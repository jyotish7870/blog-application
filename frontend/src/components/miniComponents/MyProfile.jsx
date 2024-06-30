// // import React, { useContext } from "react";
// // import { Context } from "../../main";

// // const MyProfile = () => {
// //   const { user } = useContext(Context);
// //   return (
// //     <section className="profile">
// //       <div className="avatar">
// //                <img src={user && user.avatar.url} alt="avatar" />

// //       </div>
// //       <div className="user-detail">
// //         <p>
// //           Name: <span>{user.name}</span>
// //         </p>
// //         <p>
// //           Email: <span>{user.email}</span>
// //         </p>
// //         <p>
// //           Phone: <span>{user.phone}</span>
// //         </p>
// //         <p>
// //           Role: <span>{user.role}</span>
// //         </p>
// //       </div>
// //     </section>
// //   );
// // };

// // export default MyProfile;



// import React, { useContext, useState } from "react"; // Import useState for local form state
// import { Context } from "../../main";
// import axios from "axios"; // Assuming axios is used for HTTP requests
// import toast from "react-hot-toast"; // For displaying notifications

// const MyProfile = () => {
//   const { user, setUser } = useContext(Context); // Assuming setUser is available to update context
//   const [editMode, setEditMode] = useState(false);
//   const [formData, setFormData] = useState({
//     name: user.name,
//     email: user.email,
//     phone: user.phone,
//     avatar: user.avatar.url,
//   });

//   // Handle form data changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle profile update submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put('/api/user/update', formData); // Adjust URL as needed
//       setUser(response.data); // Update user context
//       setEditMode(false);
//       toast.success("Profile updated successfully!");
//     } catch (error) {
//       toast.error("Failed to update profile.");
//     }
//   };

//   return (
//     <section className="profile">
//       <div className="avatar">
//         {editMode ? (
//           <input
//             type="text"
//             name="avatar"
//             value={formData.avatar}
//             onChange={handleChange}
//             placeholder="Avatar URL"
//           />
//         ) : (
//           <img src={formData.avatar} alt="avatar" />
//         )}
//       </div>
//       <div className="user-detail">
//         {editMode ? (
//           <>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Name"
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//             />
//             <input
//               type="text"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Phone"
//             />
//             <button onClick={handleSubmit}>Save Changes</button>
//             <button onClick={() => setEditMode(false)}>Cancel</button>
//           </>
//         ) : (
//           <>
//             <p>Name: <span>{user.name}</span></p>
//             <p>Email: <span>{user.email}</span></p>
//             <p>Phone: <span>{user.phone}</span></p>
//             <p>Role: <span>{user.role}</span></p>
//             <button onClick={() => setEditMode(true)}>Edit Profile</button>
//           </>
//         )}
//       </div>
//     </section>
//   );
// };

// export default MyProfile;



import React, { useContext, useState } from "react";
import { Context } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { user, setUser } = useContext(Context);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    avatar: user.avatar.url,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('/api/user/update', formData);
      setUser(response.data);
      setEditMode(false);
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile.");
    }
  };

  return (
    <section className="profile">
      <div className="avatar">
        {editMode ? (
          <input
            type="text"
            name="avatar"
            value={formData.avatar}
            onChange={handleChange}
            placeholder="Avatar URL"
          />
        ) : (
          <img src={formData.avatar} alt="avatar" />
        )}
      </div>
      <div className="user-detail">
        {editMode ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
            />
            <button type="submit">Save Changes</button>
            <button type="button" onClick={() => setEditMode(false)}>Cancel</button>
          </form>
        ) : (
          <>
            <p>Name: <span>{user.name}</span></p>
            <p>Email: <span>{user.email}</span></p>
            <p>Phone: <span>{user.phone}</span></p>
            <p>Role: <span>{user.role}</span></p>
            <button onClick={() => setEditMode(true)}>Edit Profile</button>
          </>
        )}
      </div>
    </section>
  );
};

export default MyProfile;
