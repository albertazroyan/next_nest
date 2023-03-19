import { AdminSetup } from 'src/components'
import { useAppDispatch, useAppSelector } from 'src/actionAndReducer'
import { increment } from 'src/actionAndReducer/feauters/actionCounter'

const Admin = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  console.log('count', count)

  return (
    <>
      <button onClick={() => increment(10)(dispatch)}>hello</button>
      <AdminSetup />
    </>
  )
}

export default Admin