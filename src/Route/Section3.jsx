import React, { useState } from "react";
import Section4 from "./Section4";

const Section3 = () => {
  const [showSection4, setShowSection4] = useState(false);

  const toggleSection4 = () => {
    setShowSection4(!showSection4);
  };
  return (
    <div className="lg:w-xl self-center items-center lg:items-start flex flex-col justify-center">
      <img
        src="/src/assets/Linea.png"
        alt="Linea"
        className="w-[100px] h-[4px] mb-8"
      />
      <div className="w-full flex justify-between items-center flex-col lg:flex-row sm:mb-16 mb-6">
        <h2
          style={{ marginTop: "40px" }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-5 mx-4 lg:mx-0"
        >
          Alcuni casi di successo dei nostri servizi in azione
        </h2>
        <div className="w-full md:mt-0 mt-6 flex justify-end">
          <p className="text-xl md:text-0.5xl lg:text-1xl text-black mb-5 max-w-[450px] mx-4 lg:mx-0">
            I nostri prodotti possono offrire i seguenti benefici ai nostri
            clienti. Qui di seguito alcuni casi studio che hanno portato i
            seguenti vantaggi.
          </p>
        </div>
      </div>
      <div className="flex mb-16">
        <img
          src="/src/assets/FrecciaGiu.png"
          alt="Linea"
          className="w-[23px] h-[13px]"
          onClick={toggleSection4}
        />
      </div>
      {showSection4 && <Section4 />}
    </div>
  );
};

export default Section3;
