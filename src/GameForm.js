import React from "react";

export default function GameForm(props) {
  console.log(props.user.name)
  return (
    <div className="game-form">
      <form onSubmit={props.onSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          placeholder="Insert your name"
          id="name"
          name="name"
          value={props.user.name}
          onChange={props.onNameChange}
        />
        <button type="submit" disabled={!props.inputIsValid}>add user</button>
      </form>
    </div>
  )
}