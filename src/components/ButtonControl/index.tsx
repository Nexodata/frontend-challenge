import React from 'react'
import * as Style from './styles'
import { objectImg } from '../../utils/objectImg'

interface ButtonControl {
  range: number
  onClick?: (range: number) => void
  disabled?: boolean
  props?: any
}

const ButtonControl = (props: ButtonControl) => {
  const { range, onClick } = props

  return (
    <Style.Container {...props} color={objectImg[range].color} onClick={() => onClick && onClick(range)}>
      <Style.Wrapper>{range !== 3 && <img src={objectImg[range].img} alt={objectImg[range].alt} />}</Style.Wrapper>
    </Style.Container>
  )
}

export default ButtonControl
