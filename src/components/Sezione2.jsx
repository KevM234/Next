import React from "react";

const Sezione2 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="relative w-full md:w-1/3">
        <img
          src="/src/assets/Foto1.png"
          alt="Image 1"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center ">
          <div className="max-w-xs text-left p-4 ">
            <p className="text-white text-sm mb-1">NOME CASE</p>
            <h2 className="text-white text-my-text-size-3 font-bold mb-2">
              Grazie al servizio di strategia aziendale siamo riusciti ad
              ottenere il seguente risultato
            </h2>
            <div className="absolute bottom-0 right-0  p-4">
              <a href="#" className="text-white hover:underline">
                Scopri di più
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full md:w-1/3">
        <img
          src="/src/assets/Foto2.png"
          alt="Image 1"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center ">
          <div className="max-w-xs text-left p-4 ">
            <p className="text-white text-sm mb-1">NOME CASE</p>
            <h2 className="text-white text-my-text-size-3 font-bold mb-2">
              Grazie al servizio di visione aziendale siamo riusciti ad ottenere
              il seguente risultato
            </h2>
            <div className="absolute bottom-0 right-0  p-4">
              <a href="#" className="text-white hover:underline">
                Scopri di più
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full md:w-1/3">
        <img
          src="/src/assets/Foto3.png"
          alt="Image 1"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center ">
          <div className="max-w-xs text-left p-4 ">
            <p className="text-white text-sm mb-1">NOME CASE</p>
            <h2 className="text-white text-my-text-size-3 font-bold mb-2">
              Grazie al servizio di management siamo riusciti ad ottenere il
              seguente risultato
            </h2>
            <div className="absolute bottom-0 right-0  p-4">
              <a href="#" className="text-white hover:underline">
                Scopri di più
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sezione2;
