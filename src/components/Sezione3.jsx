import React from "react";

const Sezione3 = () => {
  return (
    <div className="bg-cover  w-full flex justify-center items-center">
      <div className="flex w-xl mb-0 ">
        <div className="w-full flex justify-between items-center md:flex-row flex-col  mb-5 relative">
          <p
            style={{ marginTop: "80px" }}
            className="text-xl md:text-0.5xl lg:text-1xl max-w-[550px] text-black mb-5"
          >
            Ogni giorno migliaia di persone utilizzano il nostri servizi
            generando XYZ reazioni e ottnenedo i segunti benefici.
            L’investimento nel nostro prodotto servizio/ viene recuperato in
            media entro un anno.
          </p>
          <div className="w-full md:mt-0 mt-6 flex justify-end ">
            <div className="flex flex-1 justify-end">
              <img
                src="/src/assets/Linea3.png"
                alt="Linea"
                className="w-[8px] h-[60px] self-start"
              />
              <div className="w-[70%] text-black ml-4">
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
      </div>
    </div>
  );
};

export default Sezione3;
