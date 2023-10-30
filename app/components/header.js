"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavItems from "../utils/NavItems";
import ThemeSwitcher from "../utils/ThemeSwitcher";

const Header = ({ open, setOpen, activeItem }) => {
  const [active, setActive] = useState(false);
  const [openSidebar, setopenSidebar] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scroll > 80) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }

  return (
    <div className="w-full relative">
      <div className={`w-full border-b border-[#ffffff1c h-[80px] z-[80] shadow`}>
        <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
          <div className="w-full h-[80px] flex items-center justify-between p-3">
            <div>
              <Link href={"/"} className="text-[25px] font-Poppins font-[500]  text-white ">
                Learning Management System
              </Link>
            </div>
            <div className="flex items-center">
              <NavItems activeItems={activeItem} />
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
