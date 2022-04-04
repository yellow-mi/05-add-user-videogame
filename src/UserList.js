import React from "react"
export default function UserList(props) {
  const { users } = props

  return (
    <div>
      <p>Users List is the following:</p>
      <ol>
        {users.map((user, index) => 
        <li key={index}>{user}</li>
        )}
      </ol>
    </div>
  )
}


