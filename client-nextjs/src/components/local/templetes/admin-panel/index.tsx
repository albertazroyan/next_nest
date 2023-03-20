import React from 'react'
import { AdminTabs, databasePath } from '@/configs'
import SettingBooks from '../../organisms/setting-book'
import AdminLayout from '../../organisms/admin-layout'
import styles from './styles.module.scss'
import DbProvider from '@/api/db'

const AdminSetup: React.FC = () => {
  const currentActiveTab = 'Book'

  console.log('DbProvider', DbProvider)

  const db = new DbProvider(databasePath + 'book')

  console.log('db', db.get('barev'))

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