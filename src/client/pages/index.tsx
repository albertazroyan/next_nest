import { Route, Routes } from 'react-router-dom'
import { RouterType } from '../../custom-types/index'
import pagesData from './routers/routers'

const Router = () => {
  const adminRoutes = pagesData.map(({ path, title, element }: RouterType) => {
    return <Route key={title} path={`/${path}`} element={element} />
  })

  return <Routes>{adminRoutes}</Routes>
}

export default Router