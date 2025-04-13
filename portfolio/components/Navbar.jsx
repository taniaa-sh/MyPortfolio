"use client";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

function Navbar() {

    const navLinkItems = [
        {
            href: "/",
            title: "about",
        },
        {
            href: "/projects",
            title: "projects",
        },
        {
            href: "/contact",
            title: "contact",
        },
    ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-500/20 backdrop-blur-md shadow-sm border-b border-pink-300">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/">
          <span className="text-xl md:text-5xl font-semibold text-white">Portfolio</span>
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                {
                    navLinkItems.map((item, index) => (
                        <li className="inline-block" key={index}>
                            <NavLink href={item.href} title={item.title} />
                        </li>
                    ))
                }
            </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
