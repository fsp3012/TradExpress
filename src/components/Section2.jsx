import React from "react";

const Section2 = ({ data }) => {
  console.log(data);
  return (
    <marquee behavior="scroll" direction="right">
      <div className="d-flex flex-column flex-md-row  text-center text-md-start sec2 p-3">
        {data.map((datum) => {
          return (
            <div className=" flex-grow-1">
              <div className="d-md-flex text-center text-md-start">
                <p> {datum.symbol}/NGN</p>
                <p> {datum.percent_change_24h}</p>
              </div>
              <p className=""> {datum.price_usd}</p>
            </div>
          );
        })}
      </div>
    </marquee>
  );
};

export default Section2;
