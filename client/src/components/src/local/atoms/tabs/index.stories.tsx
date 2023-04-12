import React from 'react'

import Tabs from './index'
import { withKnobs } from '@storybook/addon-knobs'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AdminTabs } from '../../../../../configs'

// Define a wrapper component to be used as a decorator for the story
const wrapper: React.FC =   (Story: any) => (
  <div style={{ height: '200px' }}>
    <Story />
  </div>
)

export default {
  title: 'local/atoms/Tabs',
  component: Tabs,
  decorators: [withKnobs, wrapper]
} as ComponentMeta<typeof Tabs>

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

// Define a story using the component and props
const Templete: ComponentStory<typeof Tabs> = () => <Tabs onChange={onChange} tabs={contentTabs} />

// Bind the props to the story
export const Primary = Templete.bind({})
