// src/components/shared/AppHeader.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
// import HireMeModal from "../HireMeModal";

// Navigation items - single source of truth
const NAV_ITEMS = [
  { path: "/", label: "I'm Taylor" },
  { path: "/about", label: "About Me" },
  { path: "/skills", label: "Skills" },
  { path: "/experience", label: "Experience" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

const AppHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTheme, setTheme] = useThemeSwitcher();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setShowMenu(false);
  }, [location.pathname]);

  // Handle body scroll lock for mobile menu
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showMenu]);

  const toggleMenu = () => setShowMenu((prev) => !prev);
  const toggleTheme = () => setTheme(activeTheme);

  const ThemeIcon = activeTheme === "dark" ? FiMoon : FiSun;

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto"
    >
      <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
        {/* Mobile header */}
        <div className="flex justify-between items-center px-4 sm:px-0">
          {/* Theme switcher - mobile */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="block sm:hidden bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
          >
            <ThemeIcon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
          </button>

          {/* Hamburger menu button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="sm:hidden focus:outline-none"
            aria-label={showMenu ? "Close menu" : "Open menu"}
            aria-expanded={showMenu}
          >
            {showMenu ? (
              <FiX className="h-7 w-7 text-secondary-dark dark:text-ternary-light" />
            ) : (
              <FiMenu className="h-7 w-7 text-secondary-dark dark:text-ternary-light" />
            )}
          </button>
        </div>

        {/* Navigation links - mobile */}
        <div
          className={`${
            showMenu ? "block" : "hidden"
          } sm:hidden m-0 mt-5 p-5 shadow-lg`}
        >
          <NavLinks isMobile />
        </div>

        {/* Navigation links - desktop */}
        <div className="font-general-medium hidden sm:flex sm:ml-4 mt-3 p-0 justify-center items-center">
          <NavLinks />
        </div>

        {/* Theme switcher - desktop */}
        <div className="hidden sm:flex justify-between items-center">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
          >
            <ThemeIcon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

// Extracted NavLinks component to avoid duplication
const NavLinks = ({ isMobile = false }) => {
  const baseClasses =
    "block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light";
  const mobileClasses =
    "mb-2 border-t-2 pt-3 border-primary-light dark:border-secondary-dark";
  const desktopClasses = "sm:mx-4 sm:py-2";

  return (
    <>
      {NAV_ITEMS.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className={`${baseClasses} ${
            isMobile ? mobileClasses : desktopClasses
          }`}
          aria-label={label}
        >
          {label}
        </Link>
      ))}
    </>
  );
};

export default AppHeader;
