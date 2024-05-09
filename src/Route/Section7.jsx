import React from "react";

const Section7 = () => {
  return (
    <div
      style={{ marginTop: "100px" }}
      className="bg-cover lg:w-xl  mx-auto mb-32"
    >
      <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center mb-5">
        <img
          src="/src/assets/FrecciaSinistra.png"
          alt="Linea"
          className="w-[21px] h-[36px] mr-10 mb-10 lg:mb-0 "
        />
        <img
          src="/src/assets/Persona.png"
          alt="Linea"
          className="w-[300px] h-[300px] self-center lg:self-start mb-12 lg:mb-0"
        />
        <div
          className="w-[65%] p-5 px-9 text-black ml-4 relative"
          style={{ zIndex: -1 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg ">
            <img
              src="/src/assets/virgolette.png"
              alt="Linea"
              className="w-[70px] h-[100px] absolute top-0 left-0 object-cover "
              style={{ zIndex: -2 }}
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
  );
};

export default Section7;
