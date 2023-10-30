"use client";

import React, { useState } from "react";
import MetaData from "./utils/MetaData";
import Header from "./components/header";

const Page = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setAtiveItem] = useState(0);
  return (
    <div>
      <MetaData
        title="LMS"
        description={"LMS is where you learn mern stack "}
        keywords={"MERN , Redux , LMS "}
      />
      <Header open={open} setOpen={setOpen} activeItem={activeItem} />
    </div>
  );
};

export default Page;
