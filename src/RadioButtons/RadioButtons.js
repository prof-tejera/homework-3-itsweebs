import { useState } from "react";
import "./RadioButtons.css";

const RadioButtons = () => {
  const [activeType, setActiveType] = useState(null);
  const Fruits = ["Apple", "Orange", "Banana"];

  const handleClick = (type) => {
    setActiveType(type);
  };

  const radioButton = (fruit) => {
    const fruitType = fruit.map((i) => {
      return (
        <div key={i} id="radio">
          <input
            type="radio"
            id={i}
            checked={activeType === i}
            onChange={() => handleClick(i)}
          />
          <label id="radiolabels" htmlFor={i}>{i}</label>
        </div>
      );
    });
    return fruitType;
  };
  return (
    <div id="radio">
      {radioButton(Fruits)}
    </div>
  );
};

export default RadioButtons;