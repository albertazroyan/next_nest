import { RouterType } from '../../../custom-types/index'
import AdminPanel from '../../views/admin-page'
import HomePage from '../../views/home-page'
import { ADMIN_ROUTES, HOME_ROUTES } from 'src/configs'

const pagesData: RouterType[] = [
  {
    path: HOME_ROUTES,
    element: <HomePage />,
    title: 'home'
  },
  {
    path: ADMIN_ROUTES,
    element: <AdminPanel />,
    title: 'admin'
  }
]

export default pagesData