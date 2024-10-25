import { Link } from "react-router-dom";
import { useState } from "react";
import nav_logo from "../assets/images/logo_white.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Temporary admin variable
  const isAdmin = true;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { id: 1, link: "#features", title: "Features" },
    { id: 2, link: "#pricing", title: "Pricing" },
    { id: 3, link: "#about", title: "About Us" },
    ...(isAdmin ? [{ id: 4, link: "/contacts", title: "Contact Lists" }] : []), // Only show if user is admin
  ];

  return (
    <header className="fixed w-full bg-[#394fba] shadow-md z-50 px-7 md:px-16 lg:px-36">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link to="/">
            <img src={nav_logo} alt="Logo" className="h-8" />
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links for Medium Screens and Up */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              onClick={() => scrollToSection(item.link)}
              className="text-white hover:bg-slate-700 transition rounded px-2 py-1"
            >
              {item.title}
            </Link>
          ))}

          {/* Buttons for Medium Screens and Up */}
          <Link
            to="/download"
            className="bg-white text-black border border-white hover:bg-transparent hover:text-white transition rounded-3xl px-4 py-2 whitespace-nowrap"
          >
            Download the App
          </Link>
          <Link
            to="/talk"
            className="border border-white text-white hover:bg-white hover:text-black transition rounded-3xl px-4 py-2 whitespace-nowrap"
          >
            Talk to an Expert
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center justify-center h-screen p-4 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6">
          {navLinks.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                onClick={() => scrollToSection(item.link)}
                className="text-white hover:bg-slate-700 transition rounded px-2 py-1"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <hr className="border-t border-white opacity-20 my-6 w-full" />
        <div className="flex flex-col items-center space-y-4 mt-6">
          <Link
            to="/download"
            className="bg-white text-black border border-white hover:bg-transparent hover:text-white transition rounded-3xl px-4 py-2 whitespace-nowrap"
          >
            Download the App
          </Link>
          <Link
            to="/talk"
            className="border border-white text-white hover:bg-white hover:text-black transition rounded-3xl px-4 py-2 whitespace-nowrap"
          >
            Talk to an Expert
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
