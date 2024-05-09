import React from "react";

const Section10 = () => {
  return (
    <div className="w-full bg-teal-300">
      <div
        className="flex flex-row justify-center items-center lg:w-xl lg:mx-auto text-white"
        style={{ margin: "40px" }}
      >
        <div className="Logo">
          <img
            src="/src/assets/logo.png"
            alt="Logo"
            className="h-[60px] w-[80px]"
          />
        </div>
        <nav className="w-full">
          <ul className=" flex flex-col lg:flex-row justify-end">
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
      </div>
    </div>
  );
};

export default Section10;
