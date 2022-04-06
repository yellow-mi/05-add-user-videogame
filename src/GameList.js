import React from "react";

export default function GameList(props) {
  return (
    <div className="game-list">
      <ol>
        {
          props.list.map((user, index) =>
            <li key={index}>{user}</li>
          )
        }
      </ol>
    </div>
  )
}