import React from 'react'
import * as Style from './styles'
import { objectImg } from '../../utils/objectImg'

interface ButtonControl {
  range: number
  onClick?: any
  disabled?: boolean
}

const ButtonControl = ({ range, onClick, disabled }: ButtonControl) => {
  return (
    <Style.Container color={objectImg[range].color} onClick={() => !disabled && onClick(range)}>
      <Style.Wrapper>{range != 3 && <img src={objectImg[range].img} alt="paper" />}</Style.Wrapper>
    </Style.Container>
  )
}

export default ButtonControl
