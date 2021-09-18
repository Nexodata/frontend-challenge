import styled from 'styled-components'
import { theme } from '../../styles'

export const Container = styled.div`
  display: flex;
  font-weight: bold;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 88px;
  width: 100%;
  min-width: 296px;
  border-radius: ${theme.spacings.xxxSmall};
  border: 1px solid ${theme.colors.grayStroke};
  color: ${theme.colors.white};
  padding: ${theme.spacings.xxxSmall};
  background-color: ${theme.colors.grayFill};
  font-size: ${theme.fontSizes.t2};
  color: ${theme.colors.blue};

  p {
    font-size: ${theme.fontSizes.t3};
  }
`
