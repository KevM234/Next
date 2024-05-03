import React from "react";
import GridContent from "./GridContent";

const Hero = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/sfondo.png')" }}
      >
        <div className="bg-cover bg-black/30  flex justify-center items-center py-28  lg:w-xl">
          <div className="text-center lg:text-left lg:w-[45%] px-4 text-white ">
            <img
              src="/src/assets/Linea.png"
              alt="Linea"
              className="w-[100px] h-[4px] mb-8 mx-auto "
            />

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold  mb-5">
              Questa è la vision della nostra azienda
            </h1>
            <p className="text-xl md:text-0.5xl lg:text-1xl  mb-5">
              Cosa facciamo, come lo facciamo, questo è il motivo per cui
              dovresti venire da noi.
            </p>
            <button className="bg-transparent hover:bg-white font-bold py-2 px-10 rounded mr-4 border border-white mb-5">
              GUARDA IL VIDEO
            </button>
            <a href="#" className="hover:underline block">
              Tutto su di noi
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-0 w-full flex justify-center items-center p-8 pb-32 ">
        <div className="flex justify-between flex-col md:flex-row w-xl">
          <GridContent title={"Primo esame di strategia aziendale"} />
          <GridContent title={"Primo esame di visione aziendale "} />
          <GridContent title={"Primo esame di economia aziendale"} />
          <GridContent title={"Primo esame di struttura aziendale"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
