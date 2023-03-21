import { AdminSetup } from 'src/components'
import { useAppDispatch, useAppSelector } from 'src/actionAndReducer'
import { getAdminDb, setCurrentTab } from 'src/actionAndReducer/dbAdmin/admin_actionCreators'
import React, { useEffect } from 'react'

// // This gets called on every request
// export async function getServerSideProps () {
//   // Fetch data from external API
//   const res = await fetch(`https://.../data`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { name: 'cola' } }
// }

const Admin: React.FC = () => {
  const admin = useAppSelector((state) => state.admin)
  const dispatch = useAppDispatch()
  const { data } = admin
  const tabs = Object.keys(data)

  useEffect(() => {
    getAdminDb(10)(dispatch)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log('admin', admin)
  const onChangeTab = (tab: string) => {
    setCurrentTab(tab)(dispatch)
  }

  console.log('tabs', tabs)
  return (
    <>
      <AdminSetup tabs={tabs} admin={admin} onChangeTab={onChangeTab} />
    </>
  )
}

export default Admin
