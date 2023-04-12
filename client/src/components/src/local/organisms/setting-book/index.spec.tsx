// __tests__/snapshot.js
import { render } from '@testing-library/react'
import SettingBook from './index'
import { BookMock } from '@/mocks'

// Test to ensure that the book page is rendered without changes
it('should match the snapshot of the rendered book page', () => {

  // Render the component with the mock data and get the container element
  const { container } = render(<SettingBook products={BookMock} />)
  
  // Assert that the container matches the snapshot
  expect(container).toMatchSnapshot()
})