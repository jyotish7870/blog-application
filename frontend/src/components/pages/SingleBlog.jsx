import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
// 
 

const SingleBlog = () => {
  const { mode, user, isAuthenticated } = useContext(Context);
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  useEffect(() => {
    const getSingleBlog = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/v1/blog/singleblog/${id}`,
          { withCredentials: true }
        );
        setBlog(data.blog);
      } catch (error) {
        setBlog({});
        console.log(error);
      }
    };
    getSingleBlog();
  }, []);
  if (!isAuthenticated) {
    toast.error("please SignIn/SignUp");
    return <Navigate to={"/"} />;
  }
  return (
    <article
      className={mode === "dark" ? "dark-bg singleBlog" : "light-bg singleBlog"}
    >
      {blog && (
        <section className="container">
          <div className="category">{blog.category}</div>
          <h1>{blog.title}</h1>
          <div className="writer_section">
            <div className="author">
              <img src={blog.authorAvatar} alt="author_avatar" />
              <p>{blog.authorName}</p>
            </div>
          </div>
          {blog && blog.mainImage && (
            <img
              src={blog.mainImage.url}
              alt="mainBlogImg"
              className="mainImg"
            />
          )}
          <p className="intro-text">{blog.intro}</p>


       <div class="container">
  <div class="row">
  <h3>{blog.paraOneTitle}</h3>
    <div class="col-md">
        <p>{blog.paraOneDescription}</p>
    </div>
    <div class="col-md">
      {blog && blog.paraOneImage && (
              <img
                src={blog.paraOneImage.url}
                alt="paraOneImg"
                style={{ width: "80%", margin: "auto" }}
              />
            )}
    </div>
  </div>
</div>

           <div class="container">
  <div class="row">
  
    <div class="col-md">
    
    {blog && blog.paraTwoImage && (
              <img
                src={blog.paraTwoImage.url}
                alt="paraOneImg"
                style={{ width: "80%", margin: "auto" }}
              />
            )}
        
    </div>
    <div class="col-md">
    <h3>{blog.paraTwoTitle}</h3>
      <p>{blog.paraTwoDescription}</p>
    </div>
  </div>
</div>



                 <div class="container">
  <div class="row">
       <h3>{blog.paraThreeTitle}</h3>

    <div class="col-md">
        <p>{blog.paraThreeDescription}</p>
    </div>
    <div class="col-md">
      {blog && blog.paraThreeImage && (
              <img
                src={blog.paraThreeImage.url}
                alt="paraOneImg"
                style={{ width: "80%", margin: "auto" }}
              />
            )}
    </div>
  </div>
</div>

         

        </section>
      )}
    </article>
  );
};

export default SingleBlog;



// import React, { useContext, useEffect, useState } from "react";
// import { Context } from "../../main";
// import { Navigate, useParams } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";

// const SingleBlog = () => {
//   const { mode, user, isAuthenticated } = useContext(Context);
//   const { id } = useParams();
//   const [blog, setBlog] = useState({});
//   useEffect(() => {
//     const getSingleBlog = async () => {
//       try {
//         const { data } = await axios.get(
//           `http://localhost:3000/api/v1/blog/singleblog/${id}`,
//           { withCredentials: true }
//         );
//         setBlog(data.blog);
//       } catch (error) {
//         setBlog({});
//         console.log(error);
//       }
//     };
//     getSingleBlog();
//   }, []);
//   if (!isAuthenticated) {
//     toast.error("please SignIn/SignUp");
//     return <Navigate to={"/"} />;
//   }
//   return (
//     <article
//       className={mode === "dark" ? "dark-bg singleBlog" : "light-bg singleBlog"}
//     >
//       {blog && (
//         <section className="container">
//           <div className="category">{blog.category}</div>
//           <h1>{blog.title}</h1>
//           <div className="writer_section">
//             <div className="author">
//               <img src={blog.authorAvatar} alt="author_avatar" />
//               <p>{blog.authorName}</p>
//             </div>
//           </div>
//           {blog && blog.mainImage && (
//             <img
//               src={blog.mainImage.url}
//               alt="mainBlogImg"
//               className="mainImg"
//             />
//           )}
//           <p className="intro-text">{blog.intro}</p>
//           <div className="sub-para">
//             <h3>{blog.paraOneTitle}</h3>
//             {blog && blog.paraOneImage && (
//               <img
//                 src={blog.paraOneImage.url}
//                 alt="paraOneImg"
//                 style={{ width: "80%", margin: "auto" }}
//               />
//             )}
//             <p>{blog.paraOneDescription}</p>
//           </div>
//           <div className="sub-para">
//             <h3>{blog.paraTwoTitle}</h3>
//             {blog && blog.paraTwoImage && (
//               <img
//                 src={blog.paraTwoImage.url}
//                 alt="paraOneImg"
//                 style={{ width: "80%", margin: "auto" }}
//               />
//             )}
//             <p>{blog.paraThreeDescription}</p>
//           </div>
//           <div className="sub-para">
//             <h3>{blog.paraThreeTitle}</h3>
//             <p>{blog.paraThreeDescription}</p>
//             {blog && blog.paraThreeImage && (
//               <img
//                 src={blog.paraThreeImage.url}
//                 alt="paraOneImg"
//                 style={{ width: "80%", margin: "auto" }}
//               />
//             )}
//           </div>
//         </section>
//       )}
//     </article>
//   );
// };

// export default SingleBlog;



