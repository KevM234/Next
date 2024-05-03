import React from "react";

const Sezione6 = () => {
  return (
    <div className="relative">
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/Sfondo2.png')" }}
      >
        <div className="bg-cover bg-black/30 w-full flex justify-center">
          <div className="flex flex-col py-28  w-l text-center items-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
              Contattaci per una consulenza gratuita senza impegno
            </h2>
            <p className="text-xl md:text-0.5xl lg:text-1xl text-white mb-5">
              Già 2780 persone si sono affidate ai nostri servizi per far
              crescere il loro businnes
            </p>
            <button className="w-[300px] h-[63px] bg-gradient-to-r from-customBlue to-customGreen  text-white font-bold py-2 px-10 rounded-[11px] mr-4 mb-5">
              GUARDA IL VIDEO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sezione6;
