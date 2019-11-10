import React from "react";

import Card from './Card'

function Column({ id,
                  name,
                  cardData,
                  colColor,
                  onAdd } ) {
    const handleClick = ev => {
        ev.preventDefault()
        const response = window.prompt("What is the new item?");
        onAdd(response, id);
    }
    let cards = cardData.map((card, index) => {
        return <Card key={name + index} {...card} />
    })
  return (
    <div className="column">
      <p className="colHeader" style={{"backgroundColor": colColor, color: "#fff", lineHeight: "30px"}}>{name}</p>
      {cards}
      <p className="add-card" onClick={handleClick}>+ Add a Card</p>
    </div>
  );
}

export default Column;
