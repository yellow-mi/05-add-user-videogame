import React, { Component } from 'react'
import GameForm from './GameForm'
import GameList from './GameList'

class Videogame extends Component {
  state = {
    user: {
      name: '',
      lastName: '',
      username: ''
    },
    gameList: []
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState((prevState) => ({
      gameList: [
        ...prevState.gameList,
        this.state.user.name
      ]
    }))
  }

  onNameChange = event => {
    this.setState((prevState) => {
      // console.log(prevState)
      return {
        user: {
          ...prevState.user,
          name: event.target.value
        }
      }
      // user: {
      //   ...prevState.user,
      //   name: event.target.name
      // }
    })
  }

  formInputIsValid = () => {
    return !!this.state.user.name
  }

  render() {
    return (
      <div className='video-game'>
        <GameForm
          onSubmit={this.handleSubmit}
          user={this.state.user}
          onNameChange={this.onNameChange}
          inputIsValid={this.formInputIsValid()} />
        <GameList list={this.state.gameList} />
      </div>
    )
  }
}

export default Videogame