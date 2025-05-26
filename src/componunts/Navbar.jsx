import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-900 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-500 transition">
          ITINFO ACADEMY
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="/" className="hover:text-yellow-400 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-yellow-400 transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="/courses" className="hover:text-yellow-400 transition duration-300">
              Courses
            </a>
          </li>
          <li>
            <a href="/internShips" className="hover:text-yellow-400 transition duration-300">
              Internship
            </a>
          </li>
          <li>
            <a href="/gallery" className="hover:text-yellow-400 transition duration-300">
              Gallery
            </a>
          </li>
          <li>
            <a href="/SearchById" className="hover:text-yellow-400 transition duration-300">
              Validator
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="text-yellow-400" /> : <FaBars className="text-yellow-400" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-900 text-white p-4 space-y-4 animate-slideIn">
          <li>
            <a href="/" className="block hover:text-yellow-400 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="block hover:text-yellow-400 transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="/courses" className="block hover:text-yellow-400 transition duration-300">
              Courses
            </a>
          </li>
          <li>
            <a href="/internShips" className="block hover:text-yellow-400 transition duration-300">
              Internship
            </a>
          </li>
          <li>
            <a href="/gallery" className="block hover:text-yellow-400 transition duration-300">
              Gallery
            </a>
          </li>
          <li>
            <a href="/SearchById" className="block hover:text-yellow-400 transition duration-300">
              Validator
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;