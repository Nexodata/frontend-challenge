import React from 'react'
import { render, screen } from '@testing-library/react'
import ButtonControl from '../components/ButtonControl'
import { theme } from '../styles'

describe('Testing button control', () => {
  it('testing the props of button control props rock or 0', () => {
    render(<ButtonControl data-test-id="button-control" range={0} />)
    const element = screen.getByTestId('button-control')
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', 'icon-rock.svg')
    expect(image).toHaveAttribute('alt', 'image rock')
    expect(element).toHaveStyle({
      background: theme.colors.green,
    })
  })
  it('testing the props of button control props paper or 1', () => {
    render(<ButtonControl data-test-id="button-control" range={1} />)
    const element = screen.getByTestId('button-control')
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', 'icon-paper.svg')
    expect(image).toHaveAttribute('alt', 'image paper')
    expect(element).toHaveStyle({
      background: theme.colors.yellow,
    })
  })

  it('testing the props of button control props scissors or 2', () => {
    render(<ButtonControl data-test-id="button-control" range={2} />)
    const element = screen.getByTestId('button-control')
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', 'icon-scissors.svg')
    expect(image).toHaveAttribute('alt', 'image scissors')
    expect(element).toHaveStyle({
      background: theme.colors.cyan,
    })
  })

  it('testing the props of button control props loading or 3 not image', () => {
    render(<ButtonControl data-test-id="button-control" range={3} />)
    const element = screen.getByTestId('button-control')
    const image = element.querySelector('img')
    expect(image).not.toBeInTheDocument()
    expect(element).toHaveStyle({
      background: theme.colors.red,
    })
  })
})
