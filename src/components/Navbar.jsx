import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="fixed top-0 w-full flex justify-center p-4">
      <ul
        className={`${toggleMenu ? "flex" : "hidden"} flex-col items-center
       w-full absolute top-full pb-5 sm:flex sm:relative sm:flex-row
      sm:pb-0 sm:justify-center`}
      >
        <li>
          <a
            className="inline-block py-2 mx-7 text-lg font-semibold sm:py-0 sm:text-xl"
            href="#"
          >
            Accueil
          </a>
        </li>
        <li>
          <a
            className="inline-block py-2 mx-7 text-lg font-semibold sm:py-0 sm:text-xl"
            href="#"
          >
            Gallerie
          </a>
        </li>
        <li>
          <a
            className="inline-block py-2 mx-7 text-lg font-semibold sm:py-0 sm:text-xl"
            href="#"
          >
            Tarifs
          </a>
        </li>
        <li>
          <a
            className="inline-block py-2 mx-7 text-lg font-semibold sm:py-0 sm:text-xl"
            href="#"
          >
            Contact
          </a>
        </li>
      </ul>
      {toggleMenu ? (
        <HiX
          className="ml-auto sm:hidden"
          onClick={() => setToggleMenu(false)}
        />
      ) : (
        <HiMenuAlt4
          className="ml-auto sm:hidden"
          onClick={() => setToggleMenu(true)}
        />
      )}
    </nav>
  );
}

export default Navbar;
/*     <header>
        <nav>
          <div className="mx-auto">
            <div className="flex justify-start lg:justify-center">
              <div className="flex items-center gap-16 my-6">
                <div className="hidden lg:flex gap-8">
                  <a href="#" className="text-xl font-semibold">
                    Acceuil
                  </a>
                  <a className="text-xl font-semibold" href="#">Gallerie</a>
                  <a className="text-xl font-semibold" href="#">Tarifs</a>
                  <a className="text-xl font-semibold" href="#">Contactez-nous</a>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="lg:hidden flex items-center">
                  <button onClick={() => setToggleMenu(!toggleMenu)}>
                    <Bars3Icon className=" " />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
              !toggleMenu ? "h-0" : "h-full"
            }`}
          >
            <div className="px-8">
              <div className="flex flex-col gap-8 font-bold tracking-wider">
                <a href="#" className="border-l-4 border-gray-600">
                  Acceuil
                </a>
                <a href="#">Gallerie</a>
                <a href="#">Tarifs</a>
                <a href="#">Contactez-nous</a>
              </div>
            </div>
          </div>
        </nav>
      </header>*/
