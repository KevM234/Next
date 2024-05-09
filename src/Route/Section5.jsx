import React from "react";

const Section5 = () => {
  return (
    <div className="mx-auto lg:w-xl flex flex-col lg:flex-row text-black">
      <p
        style={{ marginTop: "80px" }}
        className="text-xl md:text-0.5xl lg:text-1xl max-w-[50%]  mb-5 m-8"
      >
        Ogni giorno migliaia di persone utilizzano il nostri servizi generando
        XYZ reazioni e ottnenedo i segunti benefici. L’investimento nel nostro
        prodotto servizio/ viene recuperato in media entro un anno.
      </p>
      <div className="w-full md:mt-0 mt-6 flex justify-end ">
        <div
          style={{ marginTop: "80px" }}
          className="flex flex-1 justify-end m-8"
        >
          <img
            src="/src/assets/Linea3.png"
            alt="Linea"
            className="w-[8px] h-[60px] self-start"
          />
          <div className="w-[70%]  ml-4">
            <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold mb-2 ">
              3422
            </h2>
            <p>
              {" "}
              <span className="font-bold">Clienti soddisfatti </span> negli
              ultimi due anni di attività
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
