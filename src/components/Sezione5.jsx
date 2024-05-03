import React from "react";

const Sezione3 = () => {
  return (
    <div
      style={{ marginTop: "8px" }}
      className="bg-cover  w-full flex justify-center items-center"
    >
      <div className="flex w-xl mb-32 ">
        <div className="w-full flex justify-between items-center flex-row   mb-5 relative">
          <img
            src="/src/assets/FrecciaSinistra.png"
            alt="Linea"
            className="w-[21px] h-[36px] items-center mr-10"
          />
          <img
            src="/src/assets/Persona.png"
            alt="Linea"
            className="w-[300px] h-[300px] self-start"
          />
          <div className="w-[65%] p-5 px-9 text-black ml-4 relative">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg ">
              <img
                src="/src/assets/virgolette.png"
                alt="Linea"
                className="w-[70px] h-[100px] absolute top-0 left-0 object-cover z-10"
                style={{ zIndex: -1 }}
              />
              Testimoninza su quali sono le cose che sono piaciute di più al
              cliente del servizio offerto
            </h2>
            <p>Anna Rossi</p>
          </div>
          <img
            src="/src/assets/FrecciaDestra.png"
            alt="Linea"
            className="w-[21px] h-[36px] items-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Sezione3;
