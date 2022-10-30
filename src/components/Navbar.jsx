import { navLinks } from "../constants";
import { close, logo, menu } from "../assets";
import { useState } from "react";

const Navbar = () => {
  const [selected, setSelected] = useState("Home");
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = (section) => {
    setSelected(section);
    setToggleMenu(false);
  };

  return (
    <nav className="sticky top-0 mx-auto flex items-center justify-center py-5 z-20">
      <ul className=" tracking-widest list-none mx-auto hidden gap-10 sm:flex px-12 py-3 rounded-lg sm:bg-[#2020207b] sm:backdrop-blur-md uppercase">
        {navLinks.map((link, id) => (
          <li key={id} onClick={() => setSelected(link.title)}>
            <a
              href={`#${link.id}`}
              className={
                selected == link.title ? "text-[#33bbcf]" : "text-white"
              }
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <div className={"ml-auto flex flex-col items-end sm:hidden px-5"}>
        <img
          src={toggleMenu ? close : menu}
          onClick={() => setToggleMenu(!toggleMenu)}
          className="cursor-pointer w-[28px] h-[28px] self-end z-30"
        />
        <div
          className={`${
            toggleMenu ? "flex sidebar-show" : "hidden"
          } absolute w-52 h-screen inset-y-0 right-0 sidebar bg-sidebar-gradient`}
        />
        <ul
          className={`${
            toggleMenu ? "flex sidebar-show" : "hidden"
          } tracking-widest backdrop-blur-md flex-col list-none gap-6 absolute w-52 py-20 h-screen inset-y-0 right-0 p-5 sidebar uppercase`}
        >
          {navLinks.map((link, id) => (
            <li key={id} onClick={() => handleClick(link.title)}>
              <a
                href={`#${link.id}`}
                className={
                  selected == link.title ? "text-[#33bbcf]" : "text-white"
                }
              >
                {link.title}
              </a>
            </li>
          ))}
          <img src={logo} className="w-32 h-8 mt-auto self-center" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
