import React from "react";

const Cardlast = ({ img }) => {
  return (
    <div className="max-w-sm mx-auto bg-white overflow-hidden">
      <div className="flex flex-col p-4">
        <div className="flex items-center mb-6 font-bold">
          <span className="text-customAzzur mr-2">HOT</span>
          <span className="text-black">20.20.2024</span>
        </div>
        <h2 className="text-xl font-bold mb-5">
          Bosco vertivale una delle maggiori costruzioni contro il global
          warming
        </h2>
        <img className="w-full mb-5" src={img} alt="Foto" />
        <p className="w-full mb-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <img className="w-full mb-4" src="/src/assets/Linea5.png" alt="Linea" />
        <p className="text-gray-500">by Mario Rossi</p>
      </div>
    </div>
  );
};

export default Cardlast;
