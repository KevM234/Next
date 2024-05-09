import React from "react";

const Section8 = (props) => {
  console.log(props.isLogged);

  const handleOnClick = () => {
    if (props.isLogged === true) {
      window.open("https://www.youtube.com/watch?v=cSsH7VAahVw", "blank");
    } else {
      console.log("no");
    }
  };
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/Sfondo2.png')" }}
    >
      <div className="bg-cover bg-black/30 w-full flex justify-center">
        <div className="flex flex-col py-28  w-l text-center items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Contattaci per una consulenza gratuita senza impegno
          </h2>
          <p className="text-xl md:text-0.5xl lg:text-1xl text-white mb-5 mx-5">
            Già 2780 persone si sono affidate ai nostri servizi per far crescere
            il loro businnes
          </p>
          <div
            onClick={handleOnClick}
            className="w-[300px] h-[43px] bg-gradient-to-r from-customBlue to-customGreen  text-white  font-bold py-2 px-10 rounded-[11px] my-4 mx-4 "
          >
            GUARDA IL VIDEO
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
