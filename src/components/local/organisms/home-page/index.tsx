import styles from './styles.module.scss'
// import NavigationSetup from '../nav-bar'
// import { HOME_ROUTES } from 'src/configs'

const HomeSetup: React.FC = () => {
  // const routersConfig: any = [
  //   {
  //     path: HOME_ROUTES,
  //     title: 'home'
  //   }
  // ]

  return (
    <div className={styles.home}>
      home page
      {/* <NavigationSetup /> */}
    </div>
  )
}
  
export default HomeSetup