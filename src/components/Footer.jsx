import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <footer className={`flex ${isHomePage ? "flex-row left-1/2 transform -translate-x-1/2 -translate-y-1/2" : "flex-col"} justify-center fixed bottom-5 right-5 gap-5 z-10 xl:text-3xl text-white`}>
      <div>
        <a href="https://twitter.com">
          <BsTwitter />
        </a>
      </div>

      <div>
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
      </div>

      <div>
        <a href="https://instagram.com">
          <BsInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
