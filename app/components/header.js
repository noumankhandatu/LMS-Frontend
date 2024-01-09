"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavItems from "../utils/NavItems";
import ThemeSwitcher from "../utils/ThemeSwitcher";
import CustomModal from "./CustomModal";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import Verification from "./auth/Verification";

const Header = ({ open, setOpen, activeItem, route, setRoute }) => {
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

  const handleLogin = () => {
    setRoute("signin");
    setOpen(true);
  };

  const handleSignup = () => {
    setRoute("signup");
    setOpen(true);
  };

  return (
    <div className="w-full relative">
      <div className={`w-full border-b border-[#ffffff1c h-[80px] z-[80] shadow`}>
        <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
          <div className="w-full h-[80px] flex items-center justify-between p-3">
            <div>
              <Link
                href={"/"}
                className="text-[25px] font-Poppins font-[500]  dark:text-white text-black "
              >
                Learning Management System
              </Link>
            </div>
            <div className="flex items-center">
              <NavItems activeItems={activeItem} />
              <span onClick={handleLogin} className={`text-white ml-5`}>
                Login
              </span>
              <span onClick={handleSignup} className={`text-white ml-5`}>
                Sign Up
              </span>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
      {route === "signin" && (
        <>
          {open && (
            <>
              <CustomModal
                setOpen={setOpen}
                open={open}
                setRoute={setRoute}
                activeItem={activeItem}
                component={Login}
              />
            </>
          )}
        </>
      )}
      {route === "signup" && (
        <>
          {open && (
            <>
              <CustomModal
                setOpen={setOpen}
                open={open}
                setRoute={setRoute}
                activeItem={activeItem}
                component={SignUp}
              />
            </>
          )}
        </>
      )}{" "}
      {route === "verification" && (
        <>
          {open && (
            <>
              <CustomModal
                setOpen={setOpen}
                open={open}
                setRoute={setRoute}
                activeItem={activeItem}
                component={Verification}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Header;
