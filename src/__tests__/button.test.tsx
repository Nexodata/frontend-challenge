import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '../components/Button'

const titleButton = 'Title Button'

describe('Testing button', () => {
  it('testing the props of button contanded children', () => {
    render(<Button data-test-id="button" children={titleButton} />)
    const element = screen.getByTestId('button')
    expect(element.textContent).toBe(titleButton)
  })
})
