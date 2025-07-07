import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 border-t border-gray-200 py-8 ">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-4">
        <div className="flex flex-wrap justify-center gap-10">
          <Link to="/about" className="hover:text-blue-500 transition">About Us</Link>
          <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>
          <Link to="/privacy-policy" className="hover:text-blue-500 transition">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-blue-500 transition">Terms of Service</Link>
        </div>

        <div className="flex justify-center space-x-4 text-gray-500">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition">
            <FaGithub />
          </a>
        </div>

        <p className="text-center text-gray-400 pt-2">
          © {new Date().getFullYear()} PathFinder. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;