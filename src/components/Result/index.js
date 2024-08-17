import {
  ResultContainer,
  Card,
  OptionsImage,
  ResultPara,
  ResultHeading,
  PlayAgainButton,
  Positon,
} from './styledComponents'

const Result = props => {
  const {yourChoice, opponentsChoice, onClickPlayAgain} = props
  const yourChoiceImageUrl = yourChoice.imageUrl
  const opponentsChoiceImageUrl = opponentsChoice.imageUrl
  let result
  if (yourChoice.id === 'ROCK') {
    if (opponentsChoice.id === 'PAPER') {
      result = 'YOU LOSE'
    } else if (opponentsChoice.id === 'SCISSORS') {
      result = 'YOU WON'
    } else {
      result = 'IT IS DRAW'
    }
  } else if (yourChoice.id === 'PAPER') {
    if (opponentsChoice.id === 'ROCK') {
      result = 'YOU WON'
    } else if (opponentsChoice.id === 'SCISSORS') {
      result = 'YOU LOSE'
    } else {
      result = 'IT IS DRAW'
    }
  } else if (yourChoice.id === 'SCISSORS') {
    if (opponentsChoice.id === 'ROCK') {
      result = 'YOU LOSE'
    } else if (opponentsChoice.id === 'PAPER') {
      result = 'YOU WON'
    } else {
      result = 'IT IS DRAW'
    }
  }

  const playAgain = () => {
    onClickPlayAgain()
  }

  return (
    <Positon>
      <ResultContainer>
        <Card>
          <ResultPara>YOU</ResultPara>
          <OptionsImage src={yourChoiceImageUrl} alt="your choice" />
        </Card>
        <Card>
          <ResultPara>OPPONENT</ResultPara>
          <OptionsImage src={opponentsChoiceImageUrl} alt="opponent choice" />
        </Card>
      </ResultContainer>
      <ResultHeading>{result}</ResultHeading>
      <PlayAgainButton type="button" onClick={playAgain}>
        PLAY AGAIN
      </PlayAgainButton>
    </Positon>
  )
}

export default Result
