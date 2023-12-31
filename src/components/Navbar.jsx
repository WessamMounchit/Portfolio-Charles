import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  let [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navigation = [
    { name: "Accueil", to: "/", current: pathname === "/" },
    {
      name: "Gallerie",
      to: "/gallerie",
      current: pathname === "/gallerie",
    },
    {
      name: "Tarifs",
      to: "/tarifs",
      current: pathname === "/tarifs",
    },
    {
      name: "Contact",
      to: "/contact",
      current: pathname === "/contact",
    },
  ];

  const isHome = pathname === "/"

  return (
    <nav className={`fixed w-full z-[9] top-0 left-0 ${!isHome && "bg-black"}`}>
      <div className=" items-center justify-between px-7 md:flex">
        <div
          className="font-bold text-2xl flex items-center
        text-gray-800"
        >
          <Link onClick={() => setOpen(false)} to="/">
            <img
              className="h-16 py-1 mt-1 w-auto cursor-pointer"
              src="logo_charles.png"
              alt="Charles Cantin"
            />
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-white text-3xl absolute right-8 top-6  md:hidden"
        >
          {open ? (
            <XMarkIcon
              className="block h-6 w-6 cursor-pointer"
              aria-hidden="true"
            />
          ) : (
            <Bars3Icon
              className="block h-6 w-6 cursor-pointer"
              aria-hidden="true"
            />
          )}
        </div>

        <ul
          className={`flex flex-col justify-center h-[110vh] absolute left-0 w-full
          -z-10 transition-all duration-300 ease-linear md:z-0 md:flex-row md:items-center md:pb-0
           md:static md:w-auto md:pl-0 md:h-auto ${
             open ? "-top-10 bg-black bg-opacity-80" : "top-[-740px]"
           }`}
        >
          {navigation.map((link) => (
            <li key={link.name} className="text-xl my-4 md:ml-8 md:my-0 ">
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                className={`
                  ${
                    link.current
                      ? "bg-white text-black"
                      : "text-white hover:bg-gray-700 hover:text-white"
                  }
                  block w-3/4 m-auto text-base text-center font-medium rounded-md p-4 2 md:w-full md:px-3 md:py-2 
                `}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
