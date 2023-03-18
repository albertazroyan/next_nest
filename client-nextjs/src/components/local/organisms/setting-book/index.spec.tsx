// __tests__/snapshot.js
import { render } from '@testing-library/react'
import SettingBook from './index'

it('renders bookPage unchanged', () => {
  const { container } = render(<SettingBook />)
  
  expect(container).toMatchSnapshot()
})