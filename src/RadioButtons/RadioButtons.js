import { useState } from "react";
import "./RadioButtons.css";

const RadioButtons = () => {
  const [activeType, setActiveType] = useState(null);

  const handleClick = (type) => {
    if (type === activeType) {
      setActiveType(null);
    } else {
      setActiveType(type);
    }
  };

  return (
    <div>
      <input type="radio"
        checked={activeType === "Apple"}
        onChange={() => handleClick("Apple")}
      />
      <label>Apple</label>
    <input type="radio"
      checked={activeType === "Orange"}
      onChange={() => handleClick("Orange")}
    />
    <label>Orange</label>
    <input type="radio"
      checked={activeType === "Banana"}
      onChange={() => handleClick("Banana")}
    />
    <label>Banana</label>
  </div>
  );
};

export default RadioButtons;
