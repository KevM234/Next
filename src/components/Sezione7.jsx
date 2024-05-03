import React, { useState } from "react";
import Cardlast from "./Cardlast";

const Sezione7 = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const openModal = (imgSrc) => {
    setModalImg(imgSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  function onNameChange(event) {
    console.log(event);
  }

  return (
    <div className="bottom-0 w-full flex justify-center items-center p-8 pb-32">
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white px-12 py-8 rounded-lg">
            <div className="flex flex-col">
              <div className="border border-gray-400 rounded-md p-4 w-64 mb-4">
                <input
                  onChange={(event) => onNameChange(event.target.value)}
                  type="name"
                  placeholder="name"
                  className="text-gray-600"
                ></input>
              </div>
              <div className="border border-gray-400 rounded-md p-4 w-64 mb-4">
                <input
                  onChange={(event) => onNameChange(event.target.value)}
                  type="surname"
                  placeholder="surname"
                  className="text-gray-600"
                ></input>
              </div>
              <div className="border border-gray-400 rounded-md p-4 w-64 mb-4">
                <input
                  onChange={(event) => onNameChange(event.target.value)}
                  type="email"
                  placeholder="name@gmail.com"
                  className="text-gray-600"
                ></input>
              </div>

              <button className="bg-green-500 text-white px-12 py-4 rounded-lg mb-4">
                Submit Release
              </button>
              <button onClick={closeModal}>Chiudi</button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between w-xl">
        <div onClick={() => openModal("/src/assets/Foto4.png")}>
          <Cardlast img={"/src/assets/Foto4.png"} />
        </div>
        <Cardlast img={"/src/assets/Foto5.png"} />
        <Cardlast img={"/src/assets/Foto6.png"} />
      </div>
    </div>
  );
};

export default Sezione7;
