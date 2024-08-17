import {PlayContainer, OptionButton, OptionsImage} from './styledComponents'

const Play = props => {
  const {choices, onClickOptions} = props
  const button1 = choices[0]
  const button2 = choices[1]
  const button3 = choices[2]

  return (
    <PlayContainer>
      <OptionButton
        type="button"
        data-testid="rockButton"
        onClick={() => onClickOptions(button1.id)}
      >
        <OptionsImage src={button1.imageUrl} alt={button1.id} />
      </OptionButton>
      <OptionButton
        type="button"
        data-testid="scissorsButton"
        onClick={() => onClickOptions(button2.id)}
      >
        <OptionsImage src={button2.imageUrl} alt={button2.id} />
      </OptionButton>
      <OptionButton
        type="button"
        data-testid="paperButton"
        onClick={() => onClickOptions(button3.id)}
      >
        <OptionsImage src={button3.imageUrl} alt={button3.id} />
      </OptionButton>
    </PlayContainer>
  )
}

export default Play
