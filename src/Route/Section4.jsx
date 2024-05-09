import React from "react";
import Card2 from "./Components/Card2";

const Section4 = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <Card2
        img={"/src/assets/Foto1.png"}
        title={"NOME CASE"}
        subtitle={
          "Grazie al servizio di strategia aziendale siamo riusciti ad ottenere il seguente risultato"
        }
      />
      <Card2
        img={"/src/assets/Foto2.png"}
        title={"NOME CASE"}
        subtitle={
          "Grazie al servizio di visione aziendale siamo riusciti ad ottenere il seguente risultato"
        }
      />
      <Card2
        img={"/src/assets/Foto3.png"}
        title={"NOME CASE"}
        subtitle={
          "Grazie al servizio di management siamo riusciti ad ottenere il seguente risultato"
        }
      />
    </div>
  );
};

export default Section4;
