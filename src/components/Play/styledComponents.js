import styled from 'styled-components'

export const PlayContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const OptionButton = styled.button`
  width: 40%;
  background-color: transparent;
  border: 0 solid;
  outline: none;
`

export const OptionsImage = styled.img`
  width: 100%;
`
