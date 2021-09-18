import React from 'react'
import { render } from '@testing-library/react'
import Score from '../components/Score'

const score = 12

describe('Testing button', () => {
  it('testing the props of button contanded children', () => {
    render(<Score score={score} />)
    const element = document.querySelector('p') as any
    expect(element.textContent).toBe('12')
  })
})
