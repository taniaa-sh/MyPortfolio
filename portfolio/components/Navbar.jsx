"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinkItems = [
  {
    href: "#about",
    title: "about",
  },
  {
    href: "#projects",
    title: "projects",
  },
  {
    href: "#contact",
    title: "contact",
  },
];

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-gray-500/50 backdrop-blur-[5px] shadow-sm border-b border-pink-300"
      style={{
        backdropFilter: "blur(5px)",
      }}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        {/* <Link href="/">
          <span className="text-xl md:text-5xl font-semibold text-white">
            Portfolio
          </span>
        </Link> */}
        <div className="block md:hidden mobile-menu">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="text-slate-200 flex items-center px-3 py-2 border border-slate-200 hover:text-white hover:border-white cursor-pointer"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="text-slate-200 flex items-center px-3 py-2 border border-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div
          className="menu hidden md:block md:w-auto mx-auto pr-60"
          id="navbar"
        >
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 !mt-0">
            {navLinkItems.map((item, index) => (
              <li className="inline-block" key={index}>
                <NavLink href={item.href} title={item.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay items={navLinkItems} /> : null}
    </nav>
  );
}

export default Navbar;
