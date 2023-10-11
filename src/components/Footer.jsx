import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col fixed bottom-5 right-5 gap-5 z-10 text-3xl text-white">
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
