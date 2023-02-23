import { Route } from 'react-router-dom'
import { RouterType } from '../../../custom-types/index'
import pagesData from './routers'

export const RoutesPage = pagesData.map(({ path, title, element }: RouterType) => {
  return <Route key={title} path={`/${path}`} element={element} />
})

export default RoutesPage