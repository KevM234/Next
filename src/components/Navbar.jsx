import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-between items-center p-4 text-white w-full fixed top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="Logo">
        <img
          src="/src/assets/logo.png"
          alt="Logo"
          className="h-[60px] w-[80px]"
        />
      </div>
      <nav className="mr-auto">
        <ul
          className={`flex font-montserrat${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          <li>
            <a href="Home" className="px-4 py-2">
              HOME
            </a>
          </li>
          <li>
            <a href="Home" className="px-4 py-2">
              SERVIZI
            </a>
          </li>
          <li>
            <a href="Home" className="px-4 py-2">
              SOLUZIONI
            </a>
          </li>
          <li>
            <a href="Home" className="px-4 py-2">
              NEWS
            </a>
          </li>
          <li>
            <a href="Home" className="px-4 py-2">
              CHI SIAMO
            </a>
          </li>
          <li>
            <a href="Home" className="px-4 py-2">
              CONTATTI
            </a>
          </li>
        </ul>
      </nav>
      <div className={`Search ${isScrolled ? "bg-black" : "text-white"}`}>
        <a href="#">
          <img
            src="/src/assets/search.png"
            alt="Cerca"
            className="h-[25px] w-[25px] mx-5"
          />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
