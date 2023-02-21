import { RouterType } from '../../../custom-types/index'
import AdminPanel from '../../views/admin-setup'
import HomePage from '../../views/home-setup'

const pagesData: RouterType[] = [
  {
    path: '/',
    element: <HomePage />,
    title: 'home'
  },
  {
    path: '/admin',
    element: <AdminPanel />,
    title: 'admin'
  }
]

export default pagesData