import React, { Component } from 'react'
import UserList from './UserList'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      surname: '',
      username: '',
      users: [],
    }
  }

  addUser = event => {
    event.preventDefault();
    this.setState(oldState => ({
      users: [...oldState.users, this.state.value],
    }));
  };

  handleChange = event => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addUser}>
          <div>
            <label htmlFor='name'>Name</label>
            <input
              name='name'
              placeholder='Name'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor='surname'>Surname</label>
            <input
              name='surname'
              placeholder='surname'
              value={this.state.surname}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor='username'>username</label>
            <input
              name='username'
              placeholder='username'
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button>Create Account</button>
          </div>
        </form>
        <UserList users={this.state.users}/>
      </div>
    )
  }
}

export default Form
