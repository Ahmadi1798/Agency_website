import { useEffect, useState } from 'react';
import { X, Menu, Moon, Sun } from 'lucide-react';
import { links } from '../../utils/Links';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const handleScroll = () => setIsSticky(window.scrollY > 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isSticky
          ? 'bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg'
          : isAboutPage
          ? 'bg-transparent dark:bg-transparent'
          : 'bg-white dark:bg-gray-900'
      }`}
      aria-label="Main Navigation"
    >
      <nav
        className={`transition-all duration-300 px-4 lg:px-14 py-4 ${
          isSticky
            ? 'sticky top-0 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg'
            : ''
        }`}
        role="navigation"
      >
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center gap-8">
          {/* Logo */}
          <Link to="/" aria-label="KarFamSoft Home">
            <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent tracking-tight drop-shadow-lg select-none transition-transform duration-300 hover:scale-105">
              KarFamSoft
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-10 items-center text-base font-semibold">
            {links.map(({ text, path }) => (
              <NavLink
                key={text}
                to={path}
                className={({ isActive }) =>
                  `transition-colors duration-200 px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:text-indigo-600 ${
                    isActive
                      ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900'
                      : 'text-gray-700 dark:text-gray-300'
                  }`
                }
                aria-label={text}
              >
                {text}
              </NavLink>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact" aria-label="Contact KarFamSoft">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg text-base font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Contact
              </button>
            </Link>
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 p-2 rounded-full transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label={
                isDark ? 'Switch to light mode' : 'Switch to dark mode'
              }
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={handleMenuToggle}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 p-2 rounded-full transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 px-4 pt-6 pb-4 space-y-4 bg-white dark:bg-gray-900 rounded-b-2xl shadow-lg ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          {links.map(({ text, path }) => (
            <NavLink
              key={text}
              to={path}
              onClick={handleMenuToggle}
              className={({ isActive }) =>
                `block text-base font-semibold px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                  isActive
                    ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900'
                    : 'text-gray-700 dark:text-gray-300'
                }`
              }
              aria-label={text}
            >
              {text}
            </NavLink>
          ))}
          <Link to="/contact" aria-label="Contact KarFamSoft">
            <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-2 rounded-lg text-base font-semibold mt-4 shadow focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Contact
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
