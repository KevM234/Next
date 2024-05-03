import React from "react";

const Sezione1 = () => {
  return (
    <div className="bg-cover  w-full flex justify-center items-center">
      <div className="flex w-xl ">
        <div className="w-full flex top-0 left-0 flex-col sm:mb-16 mb-6 relative">
          <img
            src="/src/assets/Linea.png"
            alt="Linea"
            className="w-[100px] h-[4px] mb-8 absolute top-0"
          />
          <div className="w-full flex justify-between items-center flex-col lg:flex-row sm:mb-16 mb-6 relative">
            <h2
              style={{ marginTop: "40px" }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-5"
            >
              Alcuni casi di successo dei nostri servizi in azione
            </h2>
            <div className="w-full md:mt-0 mt-6 flex justify-end">
              <p className="text-xl md:text-0.5xl lg:text-1xl text-black mb-5 max-w-[450px]">
                I nostri prodotti possono offrire i seguenti benefici ai nostri
                clienti. Qui di seguito alcuni casi studio che hanno portato i
                seguenti vantaggi.
              </p>
            </div>
          </div>
          <div className="flex top-0 left-0 flex-col sm:mb-16 mb-6 relative">
            <img
              src="/src/assets/FrecciaGiu.png"
              alt="Linea"
              className="w-[23px] h-[13px] mb-8 "
            />
            i
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sezione1;
