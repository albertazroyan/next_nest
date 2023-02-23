import { render, screen } from '@testing-library/react'
import NavigationSetup from './index'
import { NavigateMock } from 'src/mocks'

test('renders learn react link', () => {
  render(<NavigationSetup navigates={NavigateMock} />)
  const linkElement = screen.getByText(/Home Page/i)

  expect(linkElement).toBeInTheDocument()
})