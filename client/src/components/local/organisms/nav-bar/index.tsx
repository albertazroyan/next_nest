import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom'
import PropTypes  from './types/props'
import React from 'react'

const NavigationSetup: React.FC<PropTypes> = ({ navigates }) => {

  const activeStyle = {
    textDecoration: 'underline',
  }

  return (
    <div className={styles.nav}>
      <nav>
        <ul>
          {
            navigates && navigates.map((data) => {
              return (
                <li key={data.title}>
                  <NavLink
                    to={data.to}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    {data.title}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </div>
  )
}
  
export default NavigationSetup