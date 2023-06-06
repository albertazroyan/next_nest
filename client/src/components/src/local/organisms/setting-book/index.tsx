import React, { useMemo } from 'react'
import styles from './styles.module.scss'
import MaterialTable , { Column } from '@material-table/core'
import PropTypes from './types/props'
import DataType, { TableType } from './types/data'

const SettingBook: React.FC<PropTypes> = ({ products }) => {
  
  const { rows, columns } = useMemo<TableType>((): TableType => {
    const rows = products.map((data) => {
      return {
        id: data._id,
        author: data.author_am,
        language: data.language,
        publisher: data.publisher,
        page: data.pages
      }
    })

    const columns: Column<DataType>[] = [
      { title: 'Author', field: 'author' },
      { title: 'Publisher', field: 'publisher' },
      { title: 'Page', field: 'page' },
      { title: 'Language', field: 'language'  }
    ]
    
    return { rows, columns }
  
  }, [products])

  const DetailPane = ({ rowData }: {rowData: DataType}) => {
    return <div>{rowData.id}</div>
  }
  
  return (
    <div className={styles.demo}>
      <MaterialTable
        columns={columns}
        data={rows}
        title="Demo Title"
        detailPanel={DetailPane}
        options={{
          search: true,
          paging: true,
          pageSize: 20,
          emptyRowsWhenPaging: false,
          pageSizeOptions: [10, 20, 40],
          columnsButton: true,
          rowStyle: { fontSize: '80%' }
        }}
      />
    </div>
  )
}

export default SettingBook
