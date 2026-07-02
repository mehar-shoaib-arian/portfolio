import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/95 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="#home">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Shoaib
            </h1>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-slate-300 font-medium">
            <li>
              <a
                href="#home"
                className="hover:text-cyan-400 transition-all duration-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="hover:text-cyan-400 transition-all duration-300"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="hover:text-cyan-400 transition-all duration-300"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="hover:text-cyan-400 transition-all duration-300"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#education"
                className="hover:text-cyan-400 transition-all duration-300"
              >
                Education
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-cyan-400 transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Resume Button */}
          <a
            href="#contact"
            className="hidden md:block px-5 py-2.5 rounded-xl bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition-all duration-300"
          >
            Hire Me
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;