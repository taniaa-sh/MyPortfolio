"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { UrlObject } from "url";

interface NavLinkProps {
  href: string | UrlObject;
  title: string;
  onClick?: () => void;
  className?: string;
}

const NavLink = ({
  href,
  title,
  onClick,
  className,
}: NavLinkProps) => {
  const pathname = usePathname();
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    setHash(window.location.hash);
  }, []);

  const hrefString =
    typeof href === "string" ? href : href.pathname ?? "";

  const isActive =
    pathname + hash === hrefString ||
    (hrefString === "/" && pathname === "/");

  return (
    <Link href={href} onClick={onClick}>
      <span
        className={`block py-2 sm:text-xl ${isActive ? "text-pink-300 md:text-white" : "text-white"
          } hover:text-pink-300 cursor-pointer ${className ?? ""}`}
      >
        {title}
      </span>
    </Link>
  );
};

export default NavLink;