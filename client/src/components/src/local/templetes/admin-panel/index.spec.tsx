// __tests__/snapshot.js
import { render } from '@testing-library/react'
import AdminSetup from './index'
import { AdminMock } from '../../../../../mocks'

it('renders adminPage unchanged', () => {
  const { container } = render(<AdminSetup admin={AdminMock} tabs={[]} />)
  
  expect(container).toMatchSnapshot()
})