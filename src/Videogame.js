import React, { Component } from 'react'
import GameForm from './GameForm'
import GameList from './GameList'

class Videogame extends Component {
  state = {
    user: {
      name: '',
      lastName: '',
      userName: ''
    },
    gameList: []
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState((prevState) => ({
      gameList: [
        ...prevState.gameList,
        this.state.user
      ]
    }))

    this.initUser()
  }

  initUser = () => {
    this.setState(() => ({
      user: {
        name: '',
        lastName: '',
        userName: ''
      }
    }))
  }

  onNameChange = event => {
    this.setState((prevState) => {
      return {
        user: {
          ...prevState.user,
          name: event.target.value
        }
      }
    })
  }

  onLastNameChange = event => {
    this.setState((prevState) => {
      return {
        user: {
          ...prevState.user,
          lastName: event.target.value
        }
      }
    })
  }

  onUserNameChange = event => {
    this.setState((prevState) => {
      return {
        user: {
          ...prevState.user,
          userName: event.target.value
        }
      }
    })
  }

  formInputIsValid = () => {
    const { name, lastName, userName } = this.state.user
    return !!name && !!lastName && !!userName && this.validUsername()
  }

  validUsername = () => {
    const list = this.state.gameList
    const actualUserName = this.state.user.userName
    const foundUserName = list.find(user => user.userName === actualUserName)
    return !foundUserName
  }

  render() {
    return (
      <div className='video-game'>
        <GameForm
          onSubmit={this.handleSubmit}
          user={this.state.user}
          onNameChange={this.onNameChange}
          onLastNameChange={this.onLastNameChange}
          onUserNameChange={this.onUserNameChange}
          inputIsValid={this.formInputIsValid()} />
        <GameList list={this.state.gameList} />
      </div>
    )
  }
}

export default Videogame