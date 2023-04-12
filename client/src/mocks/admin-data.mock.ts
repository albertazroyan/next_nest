import { AdminData } from '../custom-types'
import BookMock from './book.mock'

// Creating an object that adheres to the AdminData type and assigning the imported BookMock module to the 'book' property
const AdminDataMock: AdminData = {
  book: BookMock
}

export default AdminDataMock