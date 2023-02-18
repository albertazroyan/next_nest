import { RouterType } from '../../custom-types/index'
import HomePage  from '../views/home'

const pagesData: RouterType[] = [
  {
    path: '',
    element: <HomePage />,
    title: 'home'
  }
]

export default pagesData