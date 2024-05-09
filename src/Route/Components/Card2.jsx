import React from "react";

const Card2 = ({ img, title, subtitle }) => {
  console.log(img);
  return (
    <div
      className="bg-cover bg-center w-full lg:w-1/3 min-h-[400px]"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-black/30 flex flex-col justify-center items-start h-full py-2 text-white">
        <p className=" text-2xl m-8">{title}</p>
        <div className=" w-2/3 m-8">
          <h2 className=" text-xl font-bold mb-2">{subtitle}</h2>
        </div>
        <div className="w-full flex justify-end bottom-0 p-4">
          <a href="#" className="hover:underline">
            Scopri di più
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card2;
