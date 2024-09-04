import React from "react";

function Card({ item, onClick, isSelected }) {
  return (
    <div
      className={`card ${isSelected ? "selected" : ""}`}
      onClick={() => onClick(item)}
    >
      <h3>{item.name}</h3>
      {isSelected && <p>{item.description}</p>}
    </div>
  );
}

export default Card;
