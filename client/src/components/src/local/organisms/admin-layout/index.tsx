import React from 'react'

import { AdminTabs } from '../../../../../configs'

/* Import Styles */
import styles from './styles.module.scss'

import PropTypes from './types/props'
import Tabs from '../../atoms/tabs'

/* Render component */
export const AdminLayout: React.FC<PropTypes> = ({ children, onChangeTab, admin, tabs = [], dataChanged, activeTab = '' }) => {
   
  const handleTabChange = (changedTab: string, key: number, e:  React.MouseEvent<HTMLElement> | undefined): void => {
    if (typeof onChangeTab === 'function') {
      onChangeTab(changedTab, key, e)
    }
  }

  console.log('admin', admin)
  const contentTabs = [
    AdminTabs.Book,
    AdminTabs.Settings
  ]

  const renderContainer = (): React.ReactNode => {
    return (
      <>
        <div className={styles.header}>
          {tabs.length !== 0 && <Tabs activeTab={activeTab} onChange={handleTabChange} tabs={contentTabs} changed={dataChanged} />}
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </>
    )
  }
  const renderLoading = (): React.ReactNode => (
    <div className={styles.loading}>Loading</div>
  )

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {admin ? renderContainer() : renderLoading()}
      </div>
    </div>
  )
}

export default AdminLayout