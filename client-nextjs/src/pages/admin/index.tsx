import { AdminSetup } from 'src/components'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../../actionAndReducer/feauters/actionCounter'

const Admin = () => {
  const count = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()

console.log('count', count)

  return (
   <>
   <button onClick={() => increment(10)(dispatch)}>hello</button> 
    <AdminSetup />
  </>  
  )
}

export default Admin