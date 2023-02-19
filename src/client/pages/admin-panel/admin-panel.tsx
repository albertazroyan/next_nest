import { RouterType } from '../../../custom-types/index'
import AdminPanel from '../../views/admin-panel'

const pagesData: RouterType[] = [
  {
    path: '/admin',
    element: <AdminPanel />,
    title: 'admin'
  }
]

export default pagesData