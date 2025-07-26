import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link href={title === "about" ? "/support" : href} className="cursor-pointer">
      <span className="block py-2 pr-4 pl-3 text-white sm:text-xl rounded md:p-0 hover:text-white">
        {title}
      </span>
    </Link>
  );
};

export default NavLink;
