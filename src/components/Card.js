import React from "react";

function Card({ text, columnID }) {
  return (
    <div className="card">
      {columnID > 0 && <span className="direction-arrow">&lt;</span>}
      <span className="card-text-content">{text}</span>
      {columnID < 3 && <span className="direction-arrow">&gt;</span>}
    </div>
  );
}

export default Card;
