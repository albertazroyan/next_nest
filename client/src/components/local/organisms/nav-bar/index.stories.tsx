import { ComponentStory, ComponentMeta } from '@storybook/react'
import { NavigateMock } from 'src/mocks'
import { BrowserRouter } from 'react-router-dom'
import NavigationSetup from './index'

export default {
  title: 'component/navigates',
  component: NavigationSetup
} as ComponentMeta<typeof NavigationSetup>

const Templete: ComponentStory<typeof NavigationSetup> = () => {
  return (
    <BrowserRouter>
      <NavigationSetup  navigates={NavigateMock}/>
    </BrowserRouter>
  )
}

export const Primary = Templete.bind({})