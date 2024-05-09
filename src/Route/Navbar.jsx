import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Funzione per gestire lo scrolling della pagina
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const threshold = 50; // Altezza soglia per considerare la navbar come scorsa

    if (scrollTop > threshold) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Aggiungi un listener per lo scrolling della pagina quando il componente si monta
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Stile dinamico della navbar in base allo stato dello scrolling
  const navbarStyle = {
    backgroundColor: isScrolled ? "#4DB6AC" : "transparent",
    transition: "background-color 0.3s ease",
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      style={navbarStyle}
      className="flex justify-between items-center p-4 text-white w-full fixed top-0 "
    >
      <div className="Logo">
        <img
          src="/src/assets/logo.png"
          alt="Logo"
          className="h-[60px] w-[80px]"
        />
      </div>
      <nav className="mr-auto hidden md:flex md:flex-row">
        <ul className="flex flex-row">
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
      <div className="md:hidden">
        {/* Icona del menu */}
        <button onClick={toggleMobileMenu}>
          <img
            src="/src/assets/menu-icon.png"
            alt="Menu"
            className="h-[25px] w-[25px]"
          />
        </button>
        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <ul className="absolute top-16 right-4 bg-teal-300 shadow-md rounded-md py-2">
            <li>
              <a href="Home" className="block px-4 py-2">
                HOME
              </a>
            </li>
            <li>
              <a href="Home" className="block px-4 py-2">
                SERVIZI
              </a>
            </li>
            <li>
              <a href="Home" className="block px-4 py-2">
                SOLUZIONI
              </a>
            </li>
            <li>
              <a href="Home" className="block px-4 py-2">
                NEWS
              </a>
            </li>
            <li>
              <a href="Home" className="block px-4 py-2">
                CHI SIAMO
              </a>
            </li>
            <li>
              <a href="Home" className="block px-4 py-2">
                CONTATTI
              </a>
            </li>
          </ul>
        )}
      </div>
      {/* Icona di ricerca */}
      <div className="hidden md:block">
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
