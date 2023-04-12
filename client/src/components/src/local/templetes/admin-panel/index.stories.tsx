import { ComponentStory, ComponentMeta  } from '@storybook/react'
import AdminSetup from './index'
import { AdminMock } from '../../../../../mocks'
export default {
  title: 'adminSetup',
  component: AdminSetup
} as ComponentMeta<typeof AdminSetup>

const Templete: ComponentStory<typeof AdminSetup> = () => <AdminSetup admin={AdminMock}  tabs={[]}/>

export const Primary = Templete.bind({})