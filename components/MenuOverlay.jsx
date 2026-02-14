import { motion, AnimatePresence } from "framer-motion";
import NavLink from "./NavLink";

const MenuOverlay = ({ items, isOpen, onItemClick }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={onItemClick}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center md:hidden z-50 bg-gray-800 border-t border-pink-300"
        >
          {items.map((item, index) => (
            <li
              key={index}
              className="w-full text-center hover:bg-gray-700 py-1 hover:!text-pink-300"
            >
              <NavLink
                href={item.href}
                title={item.title}
                onClick={onItemClick}
              />
            </li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;
