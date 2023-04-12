import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BookMock } from '../../../../../mocks'
import SettingBook from './index'

export default {
  title: 'adminSetup',
  component: SettingBook
} as ComponentMeta<typeof SettingBook>

const Template: ComponentStory<typeof SettingBook> = () => <SettingBook products={BookMock} />

export const Primary = Template.bind({})