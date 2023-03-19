import React from 'react'
import { AdminTabs } from '@/configs'
import SettingBooks from '../../organisms/setting-book'
import AdminLayout from '../../organisms/admin-layout'
import styles from './styles.module.scss'

const AdminSetup: React.FC = () => {
  const currentActiveTab = 'Book'
  
  return (
    <AdminLayout data={[]} >
      <div className={styles.demo}>
        {
          currentActiveTab === AdminTabs.Book && <SettingBooks />
        }
      </div>
    </AdminLayout>
  )
}
  
export default AdminSetup