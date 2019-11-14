import React from "react";
import MiniCard from "./MiniCard";
const MiniCardsWrapper = ({ cards }) => {
  return (
    <div>
      {cards.map((card, index) => (
        <MiniCard key={index} {...card} />
      ))}
    </div>
  );
};

export default MiniCardsWrapper;
