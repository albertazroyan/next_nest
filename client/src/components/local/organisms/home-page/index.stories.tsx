import { ComponentStory, ComponentMeta } from '@storybook/react'
import HomePage from './index'

export default {
  title: 'component/hompe-page',
  component: HomePage
} as ComponentMeta<typeof HomePage>

const Templete: ComponentStory<typeof HomePage> = () => <HomePage />

export const Primary = Templete.bind({})