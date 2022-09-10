import React, { useState } from "react";
import { ingredientsNames, getMapPotionsFormula } from "../assests/formula.generator.js";

export default function GeneratorInputsForm(props) {
  const [ing1, setIng1] = useState("fire_salts");
  const [ing2, setIng2] = useState("fire_salts");
  const [ingS1, setIngS1] = useState("raw");
  const [ingS2, setIngS2] = useState("raw");

  const ingSelect = Object.keys(ingredientsNames).map((ing) => {
    return <option value={ingredientsNames[ing]}>{ing}</option>;
  });

  const ingStateSelect = (
    <>
      <option value="raw">raw</option>
      <option value="cooked">cooked</option>
    </>
  );

  const onGenerateFomula = () => {
    const ingMap = getMapPotionsFormula();
    props.setFormula(ingMap[`${ing1}_${ingS1}_${ing2}_${ingS2}`] || "none");
  };

  return (
    <div className="ingsCon">
      <div className="ings">
        <div className="ing1">
          <select onChange={(e) => setIng1(e.target.value)}>{ingSelect}</select>
          <select onChange={(e) => setIngS1(e.target.value)}>{ingStateSelect}</select>
        </div>
        <div className="ing2">
          <select onChange={(e) => setIng2(e.target.value)}>{ingSelect}</select>
          <select onChange={(e) => setIngS2(e.target.value)}>{ingStateSelect}</select>
        </div>
      </div>
      <button className="button-65" onClick={onGenerateFomula}>Generate formula</button>
    </div>
  );
}
