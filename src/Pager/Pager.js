import React, { useState } from "react";
import "./Pager.css";

const Pager = () => {
  const [activePage, setActivePage] = useState(1);

  const handleClick = (type) => {
    setActivePage(type);
  };

  const pageNumbers = () => {
    const numbers = [];

    for (let i = 1; i <= 10; i++) {
      numbers.push(
        <button
          key={i}
          active={activePage === i ? "active" : ""}
          onClick={() => handleClick(i)}
        >
          {i}
        </button>
      );
    }

    return numbers;

  };

  return (
    <div className="pager">
      <button id="arrow"
        onClick={() => handleClick(activePage - 1)}
        disabled={activePage === 1}
      >
        &#8249;
      </button>
      {pageNumbers()}
      <button id="arrow"
        onClick={() => handleClick(activePage + 1)}
        disabled={activePage === 10}
      >
        &#8250;
      </button>
    </div>
  );
};

export default Pager;
