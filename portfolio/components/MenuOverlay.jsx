import NavLink from "./NavLink";
import Link from "next/link";

const MenuOverlay = ({items}) => {
    console.log('items',items)
    return (
        <ul className="flex flex-col py-4 items-center md:hidden z-50">
             {items.map((item, index) => (
            <li key={index} className="">
                <NavLink href={item.href} title={item.title} />
            </li>
           ))}
        </ul>
    );
}

export default MenuOverlay