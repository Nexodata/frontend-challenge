import styled from 'styled-components'
import { theme } from '../styles'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: ${theme.spacings.medium};
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.blue};
`

export const WrapperControl = styled.div`
  width: 890px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .score {
    width: 100%;
    height: 20%;
  }

  .content {
    margin-top: 50px;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
  }

  .loading {
    text-align: center;
    width: 300px;
    font-size: ${theme.fontSizes.t4};
    font-weight: bold;
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xSmall};
  }

  @media (max-width: 800px) {
    .content {
      width: 100%;
    }
  }
`
