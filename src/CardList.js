import React from "react";
import Card from "./Card";

function CardList({ items, onCardClick, selectedItem }) {
  return (
    <div className="card-list">
      {items.map((item) => (
        <Card
          key={item.id}
          item={item}
          onClick={onCardClick}
          isSelected={selectedItem?.id === item.id}
        />
      ))}
    </div>
  );
}

export default CardList;
