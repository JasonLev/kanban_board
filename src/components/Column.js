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
      <p className="col-Header" style={{ backgroundColor: colColor }}>
        {name}
      </p>
      {cards}
      <p className="add-card" onClick={handleClick}>
        <span className="plus-sign">+</span>
        <span className="add-text">Add a Card</span>
      </p>
    </div>
  );
}

export default Column;
