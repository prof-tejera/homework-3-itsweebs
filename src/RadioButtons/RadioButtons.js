import { useState } from "react";
import "./RadioButtons.css";

const RadioButtons = () => {
  const [activeType, setActiveType] = useState(null);

  const handleClick = (type) => {
    setActiveType(type);
  };

  return (
    <div id="radio">
      <input
        type="radio"
        id="apple"
        checked={activeType === "Apple"}
        onChange={() => handleClick("Apple")}
      />
      <label id="radiolabels" htmlFor="apple">Apple</label>
      <input
        type="radio"
        id="orange"
        checked={activeType === "Orange"}
        onChange={() => handleClick("Orange")}
      />
      <label id="radiolabels" htmlFor="orange">Orange</label>
      <input
        type="radio"
        id="banana"
        checked={activeType === "Banana"}
        onChange={() => handleClick("Banana")}
      />
      <label id="radiolabels" htmlFor="banana">Banana</label>
    </div>
  );
};

export default RadioButtons;