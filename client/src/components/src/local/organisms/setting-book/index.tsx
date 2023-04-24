import React, { useMemo } from 'react'
import styles from './styles.module.scss'
import MaterialTable , { Column } from '@material-table/core'
import PropTypes from './types/props'
import DataType from './types/data'

const SettingBook: React.FC<PropTypes> = ({ products }) => {

  const { rows, columns } = useMemo<{rows: DataType[], columns: Column<DataType> }>(()  => {
    const rows = products.map((data, index) => {
      return {
        key: index,
        author: data.author_am,
        language: data.language,
        publisher: data.publisher,
        page: data.pages
      }
    })

    const columns = [
      { title: 'Author', field: 'author' },
      { title: 'Publisher', field: 'publisher' },
      { title: 'Page', field: 'page' },
      { title: 'Language', field: 'language'  }
    ]
    
    return { rows , columns }
  
  }, [products])

  const DetailPane = ({ rowData }: {rowData: DataType}) => {
    return <div>{rowData.author}</div>
  }
  
  return (
    <div className={styles.demo}>
      <MaterialTable
        columns={columns}
        data={rows}
        title="Demo Title"
        detailPanel={DetailPane}
      />
    </div>
  )
}

export default SettingBook
