// components/Footer.tsx
import { CircleUser, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="flex items-center gap-2">
            <CircleUser />
            <span>+123 456 7890</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail />
            <span>info@company.com</span>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <div className="flex flex-col gap-2">
            <Link
              to="#home"
              className="hover:text-green-400 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              to="#journey"
              className="hover:text-green-400 transition-all duration-300"
            >
              Journey
            </Link>
            <Link
              to="#achievements"
              className="hover:text-green-400 transition-all duration-300"
            >
              Achievements
            </Link>
            <Link
              to="#projects"
              className="hover:text-green-400 transition-all duration-300"
            >
              Projects
            </Link>
            <Link
              to="#contact"
              className="hover:text-green-400 transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-400">
        <p>&copy; 2025 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
