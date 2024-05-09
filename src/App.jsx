import React, { useState, useEffect } from "react";
import Section1 from "./Route/Section1";
import Navbar from "./Route/Navbar";
import Section2 from "./Route/Section2";
import Section3 from "./Route/Section3";
import Section5 from "./Route/Section5";
import Section6 from "./Route/Section6";
import Section7 from "./Route/Section7";
import Section8 from "./Route/Section8";
import Section9 from "./Route/Section9";
import Section10 from "./Route/Section10";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const nameSubmitHandler = (text) => {
    if (text.length >= 3) {
      setName(text);
    }
  };
  function surnameSubmitHandler(text) {
    if (text.length >= 3) {
      setSurname(text);
    }
  }
  const emailSubmitHandler = (text) => {
    if (text.includes("@") && text.includes(".com")) {
      setEmail(text);
    }
  };

  const handleOnSubmit = () => {
    if (name !== "" && surname !== "" && email !== "") {
      setIsLogged(true);
      closeModal();
    } else console.log("no");
  };

  useEffect(() => {
    setOpenModal(true);
  }, []);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="flex flex-col justify-center relative">
      <Navbar />
      <Section1 isLogged={isLogged} />
      <Section2 />
      <Section3 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 isLogged={isLogged} />
      <Section9 />
      <Section10 />

      {openModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white px-12 py-8 rounded-lg">
            <div className="flex flex-col">
              <div className="border border-gray-400 rounded-md p-4 w-64 mb-4">
                <input
                  type="name"
                  placeholder="name"
                  className="text-gray-600"
                  onChange={(event) => nameSubmitHandler(event.target.value)}
                ></input>
              </div>
              <div className="border border-gray-400 rounded-md p-4 w-64 mb-4">
                <input
                  type="surname"
                  placeholder="surname"
                  className="text-gray-600"
                  onChange={(event) => {
                    surnameSubmitHandler(event.target.value);
                  }}
                ></input>
              </div>
              <div className="border border-gray-400 rounded-md p-4 w-64 mb-4">
                <input
                  type="email"
                  placeholder="name@gmail.com"
                  className="text-gray-600"
                  onChange={(event) => {
                    emailSubmitHandler(event.target.value);
                  }}
                ></input>
              </div>

              <button
                className="bg-green-500 text-white px-12 py-4 rounded-lg mb-4"
                onClick={() => handleOnSubmit(name, surname, email)}
              >
                Submit Release
              </button>
              <button onClick={closeModal}>Chiudi</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
