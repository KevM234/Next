import React, { useState } from "react";
import Cardlast from "./Components/Cardlast";

const Section9 = () => {
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
    <div className="bottom-0 w-full p-8 pb-32">
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white w-[60%]" style={{ borderRadius: "50px" }}>
            <div className=" py-8 px-5 ">
              <div className="flex flex-col w-[55%] justify-center   items-center mx-auto ">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-5">
                  About{" "}
                </h2>
                <p className="text-xl md:text-0.5xl lg:text-1xl text-center  mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  faucibus metus id lacus condimentum, id sollicitudin sapien
                  gravida. Ut sit amet mi eu ex vehicula luctus. Vivamus in
                  dolor nec quam eleifend efficitur. Quisque in urna at est
                  pharetra sollicitudin. Nullam non enim nec justo aliquet
                  condimentum. Duis malesuada sem vitae justo vestibulum, sit
                  amet fringilla quam gravida. Aliquam erat volutpat. Donec
                  vitae bibendum quam. Proin sagittis erat nec quam blandit, id
                  congue dui ultrices.
                </p>
                <button onClick={closeModal}>Chiudi</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row justify-between mx-auto lg:w-xl">
        <div onClick={() => openModal("/src/assets/Foto4.png")}>
          <Cardlast img={"/src/assets/Foto4.png"} />
        </div>
        <div onClick={() => openModal("/src/assets/Foto5.png")}>
          <Cardlast img={"/src/assets/Foto5.png"} />
        </div>
        <div onClick={() => openModal("/src/assets/Foto6.png")}>
          <Cardlast img={"/src/assets/Foto6.png"} />
        </div>
      </div>
    </div>
  );
};

export default Section9;
