import React from 'react'
import SettingBooks from '../../organisms/setting-book'
import AdminLayout from '../../organisms/admin-layout'
import styles from './styles.module.scss'

const AdminSetup: React.FC = () => {
  return (
    <AdminLayout>
      <div className={styles.demo}><SettingBooks /></div>
    </AdminLayout>
  )
}
  
export default AdminSetup