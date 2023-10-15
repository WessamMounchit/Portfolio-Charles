import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  const navigation = [
    { name: "Accueil", to: "/", current: location.pathname === "/" },
    {
      name: "Gallerie",
      to: "/gallerie",
      current: location.pathname === "/gallerie",
    },
    {
      name: "Tarifs",
      to: "/tarifs",
      current: location.pathname === "/tarifs",
    },
    {
      name: "Contact",
      to: "/contact",
      current: location.pathname === "/contact",
    },
  ];

  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md fixed w-full z-[9] top-0 left-0">
      <div className="md:flex items-center justify-between bg-black px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <Link onClick={() => setOpen(false)} to="/">
            <img
              className="h-16 py-1 mt-1 w-auto"
              src={logo}
              alt="Charles Cantin"
            />
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-white text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
          )}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static bg-black left-0 w-full
           md:w-auto md:pl-0 flex flex-col md:flex-row justify-center h-[100vh] md:h-auto -z-10 md:z-0 transition-all duration-300 ease-in-out ${
             open ? "top-0" : "top-[-655px]"
           }`}
        >
          {navigation.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                className={`
                  ${
                    link.current
                      ? "bg-white text-black"
                      : "text-white hover:bg-gray-700 hover:text-white"
                  }
                  block w-3/4 m-auto md:w-full text-center rounded-md p-4 md:px-3 md:py-2 text-base font-medium
                `}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
