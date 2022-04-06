import React from "react";

export default function GameList(props) {
  return (
    <div className="game-list">
      <ol>
        {
          props.list.map((user, index) =>
            <li key={index}>Name: {user.name}, Lastname: {user.lastName}, Username: {user.userName}</li>
          )
        }
      </ol>
    </div>
  )
}