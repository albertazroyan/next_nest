
import React from 'react'
import { render } from '@testing-library/react'
import { AdminTabs } from '../../../../../configs'

// Import the component that is being tested
import Tabs from './index'

// Define a test case
it('tabs renders correctly', () => {
  
  // Define some tabs to test with
  const contentTabs = [
    AdminTabs.Book,
    AdminTabs.Settings
  ]
  
  // Define a function to handle tab changes
  const onChange = (changedTab: string, key: number, e:  React.MouseEvent<HTMLElement> | undefined): void => {
    if (typeof changedTab === 'string') {
      console.log('changedTab:', changedTab)
      console.log('key:', key)
      console.log('e:', e)
    }
  }
  
  // Render the Tabs component with the specified tabs and onChange function
  const { container } = render(<Tabs tabs={contentTabs} onChange={onChange} />)
  
  // Expect the component to match the snapshot
  expect(container).toMatchSnapshot()
})
