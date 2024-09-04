import React from "react";

function Details({ item, onClose }) {
  return (
    <div className="details">
      <button onClick={onClose}>Close</button>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </div>
  );
}

export default Details;
