
import React from 'react'
import { render } from '@testing-library/react'
import { AdminTabs } from '../../../../configs'

import Tabs from './index'

it('tabs renders', () => {

  const contentTabs = [
    AdminTabs.Book,
    AdminTabs.Settings
  ]

  const onChange = (changedTab: string, key: number, e:  React.MouseEvent<HTMLElement> | undefined): void => {
    if (typeof changedTab === 'string') {
      console.log('changedTab:', changedTab)
      console.log('key:', key)
      console.log('e:', e)
    }
  }

  const { container } = render(<Tabs tabs={contentTabs} onChange={onChange} />)
    
  expect(container).toMatchSnapshot()
})
