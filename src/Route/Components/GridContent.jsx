import React from "react";

const GridContent = ({ title }) => {
  return (
    <div className="flex flex-1 mb-10">
      <img
        src="/src/assets/Linea2.png"
        alt="Linea"
        className="w-[4px] h-[114px]"
      />
      <div className="w-[70%] text-black ml-4">
        <p>INTRO</p>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p>Scopri di più</p>
      </div>
    </div>
  );
};

export default GridContent;
