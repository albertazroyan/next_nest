import React from 'react'
import { AdminTabs } from '../../../../../configs'
import SettingBooks from '../../organisms/setting-book'
import AdminLayout from '../../organisms/admin-layout'
import styles from './styles.module.scss'
import PropTypes from './types/props'
import { DefaultAdminSettingsData } from '@/configs'

// import DbProvider from '@/api/db'

// Define a functional component AdminSetup with props admin, onChangeTab and tabs
const AdminSetup: React.FC<PropTypes> = ({ admin, onChangeTab, tabs }) => {
  
  // Destructure currentActiveTab from admin object
  const currentActiveTab = admin.currentTab
  
  // Define testData variable and assign DefaultAdminSettingsData.book
  const testData = DefaultAdminSettingsData.book
  
  return (
    <AdminLayout admin={admin} tabs={tabs} onChangeTab={onChangeTab} >
      <div className={styles.demo}>
        {
          currentActiveTab === AdminTabs.Book && <SettingBooks products={testData} />
        }
      </div>
    </AdminLayout>
  )
}
  
export default AdminSetup