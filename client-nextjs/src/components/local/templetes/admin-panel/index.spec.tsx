// __tests__/snapshot.js
import { render } from '@testing-library/react'
import AdminSetup from './index'

it('renders adminPage unchanged', () => {
  const { container } = render(<AdminSetup />)
  
  expect(container).toMatchSnapshot()
})