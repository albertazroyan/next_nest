import { Routes } from 'react-router-dom'
import { NavigationSetup } from 'src/components/'
import RoutesPage from './routers'
import navigateData from './navigate/navigate'

const Router = () => {

  return (
    <div>
      <NavigationSetup navigates={navigateData} />
      <Routes>{RoutesPage}</Routes>
    </div>
  )
}

export default Router