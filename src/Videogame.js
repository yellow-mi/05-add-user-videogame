import React, { Component } from 'react'
import GameForm from './GameForm'
import GameList from './GameList'
import { NAME, LASTNAME, USERNAME, NUMBGAMES } from './constants'

class Videogame extends Component {
  state = {
    user: {
      [NAME]: '',
      [LASTNAME]: '',
      [USERNAME]: '',
      [NUMBGAMES]: 0
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
        [USERNAME]: '',
        [NUMBGAMES]: 0
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
    const { name, lastName, userName, numbGames } = this.state.user
    return !!name && !!lastName && !!userName && !!numbGames && this.validUsername()
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
        <GameList 
        list={this.state.gameList} />
      </div>
    )
  }
}

export default Videogame