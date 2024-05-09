import React from "react";

const Section1 = (props) => {
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
      style={{ backgroundImage: "url('/src/assets/sfondo.png')" }}
    >
      <div className="bg-cover bg-black/30 w-full py-40 text-white">
        <div className=" flex flex-col items-center lg:items-start lg:mx-auto lg:w-xl">
          <img5
            src="/src/assets/Linea.png"
            alt="Linea"
            className="w-[100px] h-[4px] mb-8 "
          />

          <h1 className="text-3xl md:text-4xl lg:text-5xl lg:w-1/2 font-bold mb-5 mx-2 lg:mx-0">
            Questa è la vision della nostra azienda
          </h1>
          <p className="text-xl md:text-0.5xl lg:text-1xl lg:w-1/2 mb-5 mx-2 lg:mx-0">
            Cosa facciamo, come lo facciamo, questo è il motivo per cui dovresti
            venire da noi.
          </p>
          <div
            onClick={handleOnClick}
            className="w-[300px] h-[43px] bg-transparent max-w-56 hover:bg-white font-bold py-2 px-10 rounded mr-4 border border-white mb-5  mx-2 lg:mx-0 "
          >
            GUARDA IL VIDEO
          </div>

          <a href="#" className="hover:underline block mx-2 lg:mx-0">
            Tutto su di noi
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section1;
