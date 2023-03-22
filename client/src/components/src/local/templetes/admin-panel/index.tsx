import React from 'react'
import { AdminTabs } from '../../../../../configs'
import SettingBooks from '../../organisms/setting-book'
import AdminLayout from '../../organisms/admin-layout'
import styles from './styles.module.scss'
import PropTypes from './types/props'
import { DefaultAdminSettingsData } from '@/configs'

// import DbProvider from '@/api/db'

const AdminSetup: React.FC<PropTypes> = ({ admin, onChangeTab, tabs }) => {
  const currentActiveTab = admin.currentTab

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