import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a logo', () => {
    render(<Home />)

    const logo = screen.getByAltText('cibeli')

    expect(logo).toBeInTheDocument()
  })
})