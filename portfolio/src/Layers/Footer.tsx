import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { SiGmail } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="w-full p-4 text-white border-t-2 border-white relative overflow-hidden md:flex justify-between items-center font-serif">
      <div className="absolute top-0 left-0 w-full h-[2px]"></div>
      <div className="text-center">
        <p className="text-sm">📧 furkanguven.dev@gmail.com</p>
        <p className="text-sm">📍 İstanbul, Türkiye</p>
      </div>
      {/* Nav for larger screens */}
      <nav className="hidden md:flex mt-6 md:mt-0 justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/devfurkang/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/furkanguvenme"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          Github
        </a>
        <a
          href="mailto:furkanguven.dev@gmail.com"
          className="hover:text-red-400"
        >
          Gmail
        </a>
      </nav>

      {/* Nav for smaller screens */}
      <nav className="flex md:hidden mt-6  justify-center space-x-6 text-xl mt-4">
        <a
          href="https://www.linkedin.com/in/devfurkang/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/furkanguvenme"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <IoLogoGithub />
        </a>
        <a
          href="mailto:furkanguven.dev@gmail.com"
          className="hover:text-red-400"
        >
          <SiGmail />
        </a>
      </nav>

      <div className="mt-8 md:mt-0 text-center text-xs text-gray-400">
        <p>© 2025 Created by Furkan Güven</p>
      </div>
    </footer>
  );
};