import {Component} from 'react'
import {HomeContainer, ViewsContainer} from './styledComponents'
import Header from '../Header'
import Rules from '../Rules'
import Play from '../Play'
import Result from '../Result'

const gameViews = {
  play: 'PLAY',
  result: 'RESULT',
}

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Home extends Component {
  state = {
    view: gameViews.play,
    score: 0,
    yourChoice: null,
    opponentsChoice: null,
  }

  // Method to determine the result and update the score
  determineResult = () => {
    const {yourChoice, opponentsChoice, score} = this.state
    let updatedScore = score

    if (yourChoice.id === 'ROCK') {
      if (opponentsChoice.id === 'PAPER') {
        updatedScore -= 1
      } else if (opponentsChoice.id === 'SCISSORS') {
        updatedScore += 1
      }
    } else if (yourChoice.id === 'PAPER') {
      if (opponentsChoice.id === 'ROCK') {
        updatedScore += 1
      } else if (opponentsChoice.id === 'SCISSORS') {
        updatedScore -= 1
      }
    } else if (yourChoice.id === 'SCISSORS') {
      if (opponentsChoice.id === 'ROCK') {
        updatedScore -= 1
      } else if (opponentsChoice.id === 'PAPER') {
        updatedScore += 1
      }
    }

    this.setState({score: updatedScore})
  }

  // Method to handle option clicks
  onClickOptions = id => {
    const randomIndex = Math.floor(Math.random() * 3)
    const opponentsChoice = choicesList[randomIndex]
    const yourChoice = choicesList.find(eachItem => eachItem.id === id)

    this.setState(
      {
        yourChoice,
        opponentsChoice,
        view: gameViews.result,
      },
      this.determineResult, // Call this method after setting the state
    )
  }

  // Rendering the play view
  renderPlayView = () => (
    <Play choices={choicesList} onClickOptions={this.onClickOptions} />
  )

  // Rendering the result view
  renderResultView = () => {
    const {yourChoice, opponentsChoice} = this.state
    return (
      <Result
        yourChoice={yourChoice}
        opponentsChoice={opponentsChoice}
        onClickPlayAgain={this.onClickPlayAgain}
      />
    )
  }

  onClickPlayAgain = () => {
    this.setState({
      view: gameViews.play,
    })
  }

  render() {
    const {view, score} = this.state
    let content
    switch (view) {
      case gameViews.play:
        content = this.renderPlayView()
        break
      case gameViews.result:
        content = this.renderResultView()
        break
      default:
        content = null
    }

    return (
      <HomeContainer>
        <Header score={score} />
        <ViewsContainer>{content}</ViewsContainer>
        <Rules />
      </HomeContainer>
    )
  }
}

export default Home
