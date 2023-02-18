import { RouterType } from '../../custom-types/index'
import Home from '../views/home'

const pagesData: RouterType[] = [
  {
    path: '',
    element: <Home />,
    title: 'home'
  }
]

export default pagesData