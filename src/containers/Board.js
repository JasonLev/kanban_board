import React, { useState, useEffect} from 'react'

import Column from '../components/Column'

const initBoardData = [
  {
    id: 0,
    name: "Winnie",
    cardData: [
      {
        text: "Buy eggs",
        listID: 0
      },
      {
        text: "Return text books to the campus store",
        listID: 0
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
        listID: 1
      },
      {
        text: "Return something",
        listID: 1
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
        listID: 2
      },
      {
        text: "Return another thing",
        listID: 2
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
        listID: 3
      },
      {
        text: "Return more things",
        listID: 3
      }
    ],
    colColor: "#E8741E"
  }
];

function Board() {
    const [boardData, setBoardData] = useState(initBoardData)

    const addItem = (text, boardIndex) => {
        console.log(text, boardIndex);
        
        // let newBoardData = boardData;
        // newBoardData[boardIndex].cardData.push(text);
        // console.log(newBoardData);
        // return setBoardData(newBoardData);
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
