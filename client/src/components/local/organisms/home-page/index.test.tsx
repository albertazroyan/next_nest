import { render, screen } from '@testing-library/react'
import HomeSetup from './index'
import '@testing-library/jest-dom'

test('renders learn react link', () => {
  render(<HomeSetup />)
  const linkElement = screen.getByText(/Home Page/i)

  expect(linkElement).toBeInTheDocument()
})