import React from "react";

const Sezione3 = () => {
  return (
    <div className="bg-cover  w-full flex justify-center items-center">
      <div className="flex w-xl mb-0 ">
        <div className="w-full flex justify-between items-center md:flex-row flex-col  mb-32 relative">
          <p
            style={{ marginTop: "8px" }}
            className="text-xl md:text-0.5xl lg:text-1xl max-w-[700px] text-black mb-5"
          >
            per i clienti con esigenze particolari realizziamo pianificazioni e
            progetti customizzati.
          </p>
          <div className="w-full md:mt-0 mt-6 flex justify-end ">
            <div className="flex flex-1 justify-end">
              <img
                src="/src/assets/Linea4.png"
                alt="Linea"
                className="w-[8px] h-[60px] self-start"
              />
              <div className="w-[60%] text-black ml-4">
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
      </div>
    </div>
  );
};

export default Sezione3;
