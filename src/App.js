import React, { useState } from "react";
import CardList from "./CardList";
import "./App.css"; // Add your custom styles

const dinnerItems = [
  { id: 1, name: "Dinner Option 1", description: "Mocha" },
  { id: 2, name: "Dinner Option 2", description: "Bodega" },
  { id: 3, name: "Dinner Option 3", description: "Farzi Cafe" },
  { id: 4, name: "Dinner Option 4", description: "CC" },
  { id: 5, name: "Dinner Option 5", description: "Yacht Club" },
  { id: 6, name: "Dinner Option 6", description: "T9" },
  { id: 7, name: "Dinner Option 7", description: "Dhuaan" },
  // Add more items as needed
];

const dayActivities = [
  { id: 1, name: "Option 1", description: "Watch a movie at the theater" },
  {
    id: 2,
    name: "Option 2",
    description: "Watch a movie on an iPad at the hotel",
  },
  {
    id: 3,
    name: "Option 3",
    description: "Sit at home, watch zehar movie",
  },
  // Add more items as needed
];

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [category, setCategory] = useState("day");

  const handleCardClick = (item) => {
    setSelectedItem(selectedItem?.id === item.id ? null : item);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setSelectedItem(null); // Reset selection when changing categories
  };

  const items = category === "dinner" ? dinnerItems : dayActivities;

  return (
    <div className="App">
      <header>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleCategoryChange("day")}
        >
          Day Activities
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleCategoryChange("dinner")}
        >
          Dinner Options
        </button>
      </header>
      <CardList
        items={items}
        onCardClick={handleCardClick}
        selectedItem={selectedItem}
      />
    </div>
  );
}

export default App;
