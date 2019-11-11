import React, { useState } from 'react'

import Column from '../components/Column'

const initBoardData = [
  {
    id: 0,
    name: "Winnie",
    cardData: [
      {
        text: "Buy eggs",
        columnID: 0
      },
      {
        text: "Return text books to the campus store",
        columnID: 0
      }
    ],
    colColor: "#8E6E95"
  },
  {
    id: 1,
    name: "Bob",
    cardData: [
      {
        text: "Buy milk",
        columnID: 1
      },
      {
        text: "Return something",
        columnID: 1
      }
    ],
    colColor: "#39A59C"
  },
  {
    id: 2,
    name: "Thomas",
    cardData: [
      {
        text: "Buy peanut butter",
        columnID: 2
      },
      {
        text: "Return another thing",
        columnID: 2
      }
    ],
    colColor: "#344759"
  },
  {
    id: 3,
    name: "George",
    cardData: [
      {
        text: "Buy jelly",
        columnID: 3
      },
      {
        text: "Return more things",
        columnID: 3
      }
    ],
    colColor: "#E8741E"
  }
];

function Board() {
    const [boardData, setBoardData] = useState(initBoardData)

    const addItem = (text, boardIndex) => {
        const newItem = {
            text,
            columnID: boardIndex
        }
        const newBoardData = [...boardData];
        newBoardData[boardIndex].cardData.push(newItem);
        setBoardData(newBoardData);
    }

    const columns = boardData.map((column, index) => {
        return <Column key={index}
                       {...column}
                       onAdd={addItem} />
    })
  return (
    <div className="board">
      {columns}
    </div>
  );
}

export default Board;
