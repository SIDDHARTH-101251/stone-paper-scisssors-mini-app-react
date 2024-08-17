import {
  NavBar,
  NavBarHeading,
  ScoreContainer,
  ScorePara,
  ScoreValue,
} from './styledComponents'

const Header = props => {
  const {score} = props
  return (
    <NavBar>
      <NavBarHeading>
        ROCK
        <br /> PAPER <br /> SCISSORS
      </NavBarHeading>
      <ScoreContainer>
        <ScorePara>Score</ScorePara>
        <ScoreValue>{score}</ScoreValue>
      </ScoreContainer>
    </NavBar>
  )
}

export default Header
