"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, title, onClick, className }) => {
  const pathname = usePathname();

  const isActive =
    pathname + window.location.hash === href ||
    (href === "/" && pathname === "/");

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
