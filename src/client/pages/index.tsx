import { Route, Routes } from 'react-router-dom'
import { RouterType } from '../../custom-types/index'
import { NavigationSetup } from 'src/components/'
import pagesData from './routers/routers'
import navigateData from './navigate/navigate'

const Router = () => {
  const RoutesPage = pagesData.map(({ path, title, element }: RouterType) => {
    return <Route key={title} path={`/${path}`} element={element} />
  })

  return (
    <div>
      <NavigationSetup navigates={navigateData} />
      <Routes>{RoutesPage}</Routes>
    </div>
  )
}

export default Router