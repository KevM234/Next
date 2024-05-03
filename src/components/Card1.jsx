import React from "react";

const Card1 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="relative w-full md:w-1/3">
        <img
          src="/src/assets/Sfondo.png"
          alt="Image 1"
          className="w-full h-auto"
        />
        <div className="absolute bottom-0 right-0 bg-black bg-opacity-50 p-4">
          <h3 className="text-white text-lg font-bold mb-2">Sottotitolo 1</h3>
          <h2 className="text-white text-xl font-bold mb-2">Titolo 1</h2>
          <a href="#" className="text-white hover:underline">
            Link 1
          </a>
        </div>
      </div>
      <div className="relative w-full md:w-1/3">
        <img
          src="/src/assets/Sfondo.png"
          alt="Image 2"
          className="w-full h-auto"
        />
        <div className="absolute bottom-0 right-0 bg-black bg-opacity-50 p-4">
          <h3 className="text-white text-lg font-bold mb-2">Sottotitolo 2</h3>
          <h2 className="text-white text-xl font-bold mb-2">Titolo 2</h2>
          <a href="#" className="text-white hover:underline">
            Link 2
          </a>
        </div>
      </div>
      <div className="relative w-full md:w-1/3">
        <img
          src="/src/assets/Sfondo.png"
          alt="Image 3"
          className="w-full h-auto"
        />
        <div className="absolute bottom-0 right-0 bg-black bg-opacity-50 p-4">
          <h3 className="text-white text-lg font-bold mb-2">Sottotitolo 3</h3>
          <h2 className="text-white text-xl font-bold mb-2">Titolo 3</h2>
          <a href="#" className="text-white hover:underline">
            Link 3
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card1;
