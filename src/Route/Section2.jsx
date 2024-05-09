import React from "react";
import GridContent from "./Components/GridContent";

const Section2 = () => {
  return (
    <div className="bottom-0 w-full flex justify-center items-center p-8 pb-32 ">
      <div className="flex justify-between flex-col md:flex-row w-xl">
        <GridContent title={"Primo esame di strategia aziendale"} />
        <GridContent title={"Primo esame di visione aziendale "} />
        <GridContent title={"Primo esame di economia aziendale"} />
        <GridContent title={"Primo esame di struttura aziendale"} />
      </div>
    </div>
  );
};

export default Section2;
