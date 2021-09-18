import styled from 'styled-components'
import { theme } from '../../styles'

export const Container = styled.button`
  border: none;
  width: 246px;
  cursor: pointer;
  border-radius: ${theme.spacings.xxxSmall};
  color: ${theme.colors.white};
  padding: ${theme.spacings.xxxSmall};
  background-color: ${theme.colors.cyan};
  font-size: ${theme.fontSizes.t1};

  :active {
    opacity: 0.8;
  }
`
