import { ComponentStory, ComponentMeta  } from '@storybook/react'
import { NavigateMock } from 'src/mocks'
import NavigationSetup from './index'

export default {
  title: 'component/hompe-page',
  component: NavigationSetup
} as ComponentMeta<typeof NavigationSetup>

const Templete: ComponentStory<typeof NavigationSetup> = () => <NavigationSetup  navigates={NavigateMock}/>

export const Primary = Templete.bind({})