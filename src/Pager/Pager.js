import React, { useState } from "react";
import "./Pager.css";

const Pager = () => {
  const [activePage, setActivePage] = useState(null);

  const handleClick = (type) => {
    setActivePage(type);
  };

  const pageNumbers = () => {
    const numbers = [];

    for (let i = 1; i <= 10; i++) {
      numbers.push(
        <button
          key={i}
          active={activePage === (i)}
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
      <button
        onClick={() => handleClick(activePage - 1)}
        disabled={activePage === 1}
      >
        Previous
      </button>
      {pageNumbers()}
      <button
        onClick={() => handleClick(activePage + 1)}
        disabled={activePage === 10}
      >
        Next
      </button>
    </div>
  );
};

export default Pager;
