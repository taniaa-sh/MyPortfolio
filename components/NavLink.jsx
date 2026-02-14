"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NavLink = ({ href, title, onClick, className }) => {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.hash);
  }, []);

  const isActive =
    pathname + hash === href || (href === "/" && pathname === "/");

  return (
    <Link href={href} onClick={onClick}>
      <span
        className={`block py-2 sm:text-xl ${
          isActive ? "text-pink-300 md:text-white" : "text-white"
        } hover:text-pink-300 cursor-pointer ${className || ""}`}
      >
        {title}
      </span>
    </Link>
  );
};

export default NavLink;
