import styled from 'styled-components'
import { theme } from '../../styles'

interface ButtonControl {
  color: 'cyan' | 'green' | 'yellow' | 'red'
}

export const Container = styled.button<ButtonControl>`
  border: none;
  cursor: pointer;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  color: ${theme.colors.white};
  padding: ${theme.spacings.xxSmall};
  background-color:  ${({ color }) => theme.colors[color]}};
  font-size: ${theme.fontSizes.t1};

  :active {
    opacity: 0.8;
  }

@media(max-width: 800px) {
  width: 130px;
  height: 130px;
}
`
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${theme.colors.white};
  background-color: ${theme.colors.white};
`
