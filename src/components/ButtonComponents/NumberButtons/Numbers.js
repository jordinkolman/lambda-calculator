import React, { useState } from "react";
import "./Numbers.scss";
//import any components needed
import NumberButton from "./NumberButton";
//Import your array data to from the provided data file
import { numbers } from "../../../data";
const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState] = useState(numbers);
  return (
    <div className="numbers">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numberState.map((number, index) => {
        return <NumberButton key={index} number={number} />;
      })}
    </div>
  );
};

export default Numbers;


