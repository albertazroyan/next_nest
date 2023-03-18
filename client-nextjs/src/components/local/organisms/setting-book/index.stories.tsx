import { ComponentStory, ComponentMeta  } from '@storybook/react'
import SettingBook from './index'

export default {
  title: 'adminSetup',
  component: SettingBook
} as ComponentMeta<typeof SettingBook>

const Templete: ComponentStory<typeof SettingBook> = () => <SettingBook />

export const Primary = Templete.bind({})