import { ComponentStory, ComponentMeta  } from '@storybook/react'
import AdminSetup from './index'

export default {
  title: 'adminSetup',
  component: AdminSetup
} as ComponentMeta<typeof AdminSetup>

const Templete: ComponentStory<typeof AdminSetup> = () => <AdminSetup />

export const Primary = Templete.bind({})