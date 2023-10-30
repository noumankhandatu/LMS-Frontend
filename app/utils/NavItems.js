import React from "react";
import Link from "next/link";

export const navItemsData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Courses",
    url: "/courses",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Policy",
    url: "/policy",
  },
  {
    name: "FAQ",
    url: "/faq",
  },
];

const NavItems = ({ activeItems }) => {
  return (
    <>
      <div className="flex 800px:hidden">
        {navItemsData.map((items, id) => {
          const { name, url } = items;
          return (
            <Link key={id} href={url} passHref>
              <span
                className={`${
                  activeItems.toString() === id.toString() ? "text-orange-400" : "text-white"
                } text-black ml-5`}
              >
                {name}
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default NavItems;
