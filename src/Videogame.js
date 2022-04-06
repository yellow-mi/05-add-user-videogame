import React, { Component } from 'react'
import GameForm from './GameForm'
import GameList from './GameList'
import { NAME, LASTNAME, USERNAME } from './constants'

class Videogame extends Component {
  state = {
    user: {
      [NAME]: '',
      [LASTNAME]: '',
      [USERNAME]: ''
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
        [NAME]: '',
        [LASTNAME]: '',
        [USERNAME]: ''
      }
    }))
  }

  onInputChange = (event, inputField) => {
    this.setState((prevState) => {
      return {
        user: {
          ...prevState.user,
          [inputField]: event.target.value
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
          onInputChange={this.onInputChange}
          inputIsValid={this.formInputIsValid()} />
        <GameList list={this.state.gameList} />
      </div>
    )
  }
}

export default Videogame