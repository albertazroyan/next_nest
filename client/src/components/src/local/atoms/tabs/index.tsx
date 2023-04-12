
import React, { useState } from 'react'

import cx from 'classnames'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

import { kebabCase } from 'lodash'

export const Tabs: React.FC<PropTypes> = ({ onChange, tabs, activeTab = '', changed }) => {
  // Determine the default active tab to use
  const useAsDefault = activeTab || tabs[0]

  // State to hold the currently active tab
  const [active, setActive] = useState(useAsDefault || '')
  
  // Handler for clicking a tab
  const handleClick = (tab: string, key: number, e: React.MouseEvent<HTMLElement>): void => {
    if (active !== tab) {
      setActive(tab)
      if (typeof onChange === 'function') {
        onChange(tab, key, e)
      }
    }
  }
  
  // Helper function to tidy up the tab name (e.g. "My Tab Name" => "my-tab-name")
  const tidyTabName = (tab: string): string => {
    const camel = kebabCase(tab)
    const dropSpace = camel.replace('-', ' ')
    const dropUnderScore = dropSpace.replace(/_/g, ' ')
    
    return dropUnderScore
  }
  
  // Render the tabs
  return (
    <div className={styles.main}>
      {
        tabs.map((tab, key) => (
          <div key={key} className={cx(styles.item, tab === active && styles.active)} onClick={(e): void => { handleClick(tab, key, e) }}>
            {tidyTabName(tab)}
            {tab === active && changed && <div className={styles.asterisk}></div>}
          </div>
        ))
      }
    </div>
  )
}

export default Tabs