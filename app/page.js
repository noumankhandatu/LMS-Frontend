"use client";

import React, { useState } from "react";
import MetaData from "./utils/MetaData";
import Header from "./components/header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setAtiveItem] = useState(0);
  const [route, setRoute] = useState("signin");
  return (
    <div>
      <ToastContainer />
      <MetaData
        title="LMS"
        description={"LMS is where you learn mern stack "}
        keywords={"MERN,REDUX,LMS"}
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        route={route}
        setRoute={setRoute}
      />{" "}
      <div style={{ padding: "20px" }}>
        <h1>Welcome to the Learning Management System (LMS)</h1>
        <p>
          LMS is where you can explore and learn the MERN (MongoDB, Express, React, Node.js) stack.
          Whether you are a beginner or an experienced developer, we have courses tailored for
          everyone.
        </p>
        <p>
          Start your learning journey today and enhance your skills in building modern web
          applications!
        </p>

        <section style={{ marginTop: "40px" }}>
          <h2>Featured Courses</h2>
          <div style={{ display: "flex", gap: "20px" }}>
            {/* Example of a featured course card */}
            <div
              style={{
                border: "1px solid #ccc",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                width: "300px",
              }}
            >
              <h3>React Fundamentals</h3>
              <p>Master the basics of React.js with hands-on projects.</p>
              <button>Enroll Now</button>
            </div>

            {/* Add more featured course cards as needed */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
