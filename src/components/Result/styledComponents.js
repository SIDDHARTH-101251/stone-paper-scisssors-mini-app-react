import styled from 'styled-components'

export const Positon = styled.div`
  display: flex;
  flex-direction: column;
`

export const ResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`

export const OptionsImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const ResultPara = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #fff;
`

export const ResultHeading = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  color: #fff;
  text-align: center;
`
export const PlayAgainButton = styled.button`
  background-color: #fff;
  font-family: 'Bree Serif';
  font-size: 18px;
  color: #223a5f;
  width: 120px;
  height: 38px;
  border: 0 solid;
  border-radius: 12px;
  align-self: center;
`
