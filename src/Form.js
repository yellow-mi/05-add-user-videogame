// import React, { Component } from 'react'
// import UserList from './UserList'
// import { useState } from 'react'

// class Form extends Component {
  
//   addUser = (props) => {
//     const [enteredName, setName] = useState('')
//     const [enteredSurname, setSurname] = useState('')
//     const [enteredUsername, setUsername] = useState('')

//     const printUser = (event) => {
//       event.preventDefault();
//       console.log(setName, setSurname, setUsername)
//       setName('')
//       setSurname('')
//       setUsername('')
//     }
//   }

//   handleChange = (event) => {
//     setName(event.target.value)
//     setSurname(event.target.value)
//     setUsername(event.target.value)
//   }

//   /*addUser = event => {
//     event.preventDefault();
//     const fullInfo = [this.state.name, this.state.surname, this.state.username]
  
//     if (this.currentState.username !== this.prevState.username) {
//       this.setState({
//         users: [...this.state.users,
//           fullInfo],
//       })
//     }
//   }
  
//   handleChange = event => {
//     this.setState(
//       {
//         [event.target.name]: event.target.value,
//       })
//   } */

//   render() {

//     return (
//       <div>
//         <form onSubmit={this.printUser}>
//           <div>
//             <label htmlFor='name'>Name</label>
//             <input
//               name='name'
//               placeholder='Name'
//               value={this.state.name}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div>
//             <label htmlFor='surname'>Surname</label>
//             <input
//               name='surname'
//               placeholder='surname'
//               value={this.state.surname}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div>
//             <label htmlFor='username'>username</label>
//             <input
//               name='username'
//               placeholder='username'
//               value={this.state.username}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div>
//             <button>Create Account</button>
//           </div>
//         </form>
//         <UserList users={this.state.users} />
//       </div>
//     )
//   }
// }


// export default Form
