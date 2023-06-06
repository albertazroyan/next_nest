import { Column } from '@material-table/core'

// Define the data type for the table rows
interface DataType {
  // The key property is required by AntD's Table component and should be a unique value for each row
  // key: React.Key
  id: string
  // The author's name
  author: string

  // The publisher's name
  publisher: string

  // The number of pages in the book
  page: number
  
  // The language the book is written in
  language: string
}

export default DataType

export interface TableType {
  rows: DataType[]
  columns: Column<DataType>[]
}