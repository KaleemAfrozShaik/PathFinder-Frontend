import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

// Footer navigation links
const navLinks = [
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Service" },
];

// Social media links
const socialLinks = [
  { href: "https://twitter.com", icon: <FaTwitter />, className: "hover:text-blue-500" },
  { href: "https://instagram.com", icon: <FaInstagram />, className: "hover:text-pink-500" },
  { href: "https://github.com", icon: <FaGithub />, className: "hover:text-gray-800" },
];

const linkClass = "transition hover:text-blue-500";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-4">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 text-gray-500">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition ${social.className}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-400 pt-2">
          &copy; {new Date().getFullYear()} PathFinder. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;