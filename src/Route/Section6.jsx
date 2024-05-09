import React from "react";

const Section6 = () => {
  return (
    <div className="mx-auto lg:w-xl flex flex-col lg:flex-row text-black ">
      <p
        style={{ marginTop: "80px" }}
        className="text-xl md:text-0.5xl lg:text-1xl max-w-[50%] mb-5 m-8"
      >
        per i clienti con esigenze particolari realizziamo pianificazioni e
        progetti customizzati.
      </p>
      <div className="w-full md:mt-0 mt-6 flex justify-end ">
        <div style={{ marginTop: "80px" }} className="flex flex-1 justify-end ">
          <img
            src="/src/assets/Linea4.png"
            alt="Linea"
            className="w-[8px] h-[60px] "
          />
          <div className="w-[52%] ml-4">
            <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold mb-2 ">
              128
            </h2>
            <p>
              {" "}
              <span className="font-bold">Lavori Customizzati</span> sulle
              esigenze dle cliente
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
