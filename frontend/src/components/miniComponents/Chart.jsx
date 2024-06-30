// import React, { useEffect, useState } from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   ArcElement,
//   Legend,
// } from "chart.js";
// import { Doughnut } from "react-chartjs-2";
// import axios from "axios";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   ArcElement,
//   Legend
// );

// const Chart = () => {
//   const [myBlogs, setMyBlogs] = useState([]);
//   useEffect(() => {
//     const fetchMyBlogs = async () => {
//       const { data } = await axios.get(
//         "http://localhost:3000/api/v1/blog/myblogs",
//         { withCredentials: true }
//       );
//       setMyBlogs(data.blogs);
//     };
//     fetchMyBlogs();
//   }, []);

//   const publishedBlogs =
//     myBlogs && myBlogs.filter((blog) => blog.published === true);
//   const notPublishedBlogs =
//     myBlogs && myBlogs.filter((blog) => blog.published === false);

//   console.log(publishedBlogs);

//   const data = {
//     labels: ["Published", "Not Published"],
//     datasets: [
//       {
//         label: "Blogs",
//         data: [
//           publishedBlogs.length > 0 ? publishedBlogs.length : 0,
//           notPublishedBlogs.length > 0 ? notPublishedBlogs.length : 0,
//         ],
//         borderColor: ["#0e7490", "#facc15"],
//         backgroundColor: ["#0e7490", "#facc15"],
//         borderWidth: 1,
//       },
//     ],
//   };
//   return (
//     <section className="chart-container" style={{ height: "90vh" }}>
//       <h3>BLOG ANALYTICS</h3>
//       <Doughnut data={data} style={{ height: "550px" }} />
//     </section>
//   );
// };

// export default Chart;



import React, { useEffect, useState, useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);

const Chart = () => {
  const [myBlogs, setMyBlogs] = useState([]);
  const [filterYear, setFilterYear] = useState('All');

  useEffect(() => {
    const fetchMyBlogs = async () => {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/blog/myblogs",
        { withCredentials: true }
      );
      setMyBlogs(data.blogs.map(blog => ({ ...blog, year: String(blog.year) }))); // Ensure the year is treated as a string if necessary
    };
    fetchMyBlogs();
  }, []);

  const { publishedBlogs, notPublishedBlogs } = useMemo(() => {
    const filteredBlogs = filterYear === 'All' ? myBlogs : myBlogs.filter(blog => String(blog.year) === filterYear); // Ensure the year comparison is correct
    return {
      publishedBlogs: filteredBlogs.filter(blog => blog.published === true),
      notPublishedBlogs: filteredBlogs.filter(blog => blog.published === false)
    };
  }, [myBlogs, filterYear]);

  const data = {
    labels: ["Published", "Not Published"],
    datasets: [
      {
        label: "Blogs",
        data: [publishedBlogs.length, notPublishedBlogs.length],
        borderColor: ["#0e7490", "#facc15"],
        backgroundColor: ["#0e7490", "#facc15"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <section className="chart-container" style={{ height: "90vh" }}>
      <h3>BLOG ANALYTICS</h3>
      <div>
        <label htmlFor="yearSelect">Filter by Year: </label>
        <select id="yearSelect" value={filterYear} onChange={(e) => setFilterYear(e.target.value)}>
          <option value="All">All</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>  {/* Added "2024" for selection */}
        </select>
      </div>
      <Doughnut data={data} style={{ height: "550px" }} />
    </section>
  );
};

export default Chart;

