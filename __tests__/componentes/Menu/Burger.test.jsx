import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Burger from '../../../componentes/Menu/Burger'

describe('Burguer Menu', () => {
  it('renders a heading', () => {
    render(<Burger />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})