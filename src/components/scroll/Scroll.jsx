import React from 'react'

const Scroll = () => {
    const handleClick = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };
  return (
    <div className="nav">
    <button
      onClick={() => {
        handleClick("scrollScreenOne");
      }}
    >
     Screen One
    </button>
    <button
      onClick={() => {
        handleClick("scrollScreenTwo");
      }}
    >
      Screen Two
    </button>
    <button
      onClick={() => {
        handleClick("bottom");
      }}
    >
      Screen Three
    </button>
  </div>
  )
}

export default Scroll