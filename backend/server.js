// import dotenv from 'dotenv';
// dotenv.config();

// import app from "./app.js";
// import cloudinary from "cloudinary";

// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
//   api_key: process.env.CLOUDINARY_CLIENT_API,
//   api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
// });

// console.log(process.env.PORT)
// app.listen(process.env.PORT, () => {
//   console.log(`Server running on port ${process.env.PORT}`);
// });


import http from 'http';
import app from './app.js'; // Assuming your app is exported from app.js
import dotenv from 'dotenv';
import cloudinary from 'cloudinary';

dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET
});

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
