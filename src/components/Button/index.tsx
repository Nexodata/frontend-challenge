import React from 'react'
import * as Style from './styles'

interface Button {
  children: string
  onClick?: () => void
  props?: any
}

const Button = (props: Button) => {
  return <Style.Container {...props}>{props.children}</Style.Container>
}

export default Button
