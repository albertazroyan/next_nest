import { render, screen } from '@testing-library/react'
import AdminSetup from './index'

test('renders learn react link', () => {
  render(<AdminSetup />)
  const linkElement = screen.getByText(/Admin Panel/i)

  expect(linkElement).toBeInTheDocument()
})