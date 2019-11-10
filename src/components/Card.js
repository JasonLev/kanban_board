import React from "react";

function Card({ text, listID }) {
  return (
    <div className="card">
      {listID > 0 && <span className="direction-arrow">&lt;</span>}
      <span className="text-content">{text}</span>
      {listID < 3 && <span className="direction-arrow">&gt;</span>}
    </div>
  );
}

export default Card;
