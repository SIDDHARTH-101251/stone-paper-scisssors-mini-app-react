import styled from 'styled-components'

export const NavBar = styled.div`
  border: 2px solid #fff;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`

export const NavBarHeading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 28px;
  color: #fff;
`

export const ScoreContainer = styled.div`
  background-color: #fff;
  width: 120px;
  height: 120px;
  border: 0 solid;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ScorePara = styled.p`
  font-family: 'Bree Serif';
  font-size: 20px;
  color: #223a5f;
  margin: 0;
`

export const ScoreValue = styled.p`
  font-family: 'Roboto';
  font-size: 28px;
  color: #223a5f;
  font-weight: bold;
  margin: 0;
`
