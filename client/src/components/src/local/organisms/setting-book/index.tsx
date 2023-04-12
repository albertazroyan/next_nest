import React, { useMemo, useState } from 'react'
import styles from './styles.module.scss'

import type { ColumnsType } from 'antd/es/table'
import PropTypes from './types/props'
import DataType from './types/data'
import {
  // MenuFoldOutlined,
  // MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
} from '@ant-design/icons'

import { Layout, Menu, theme, MenuProps, Table,
  // Button,
  // Form,
  // Input
} from 'antd'

const {
  // Header,
  Sider, Content
} = Layout
const items: MenuProps['items'] = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}))

const SettingBook: React.FC<PropTypes> = ({ products }) => {

  const [
    collapsed,
    // setCollapsed
  ] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
  }
  const { rows, columns } = useMemo<{rows: DataType[], columns: ColumnsType<DataType> }>(() => {
    const rows = products.map((data, index) => {
      return {
        key: index,
        author: data.author_am,
        language: data.language,
        publisher: data.publisher,
        page: data.pages
      }
    })

    const columns: ColumnsType<DataType> = [
      { title: 'Author', dataIndex: 'author', key: 'author' },
      Table.EXPAND_COLUMN,
      { title: 'Publisher', dataIndex: 'publisher', key: 'publisher', defaultSortOrder: 'descend', sorter: (a, b) => a.page - b.page },
      Table.SELECTION_COLUMN,
      { title: 'Page', dataIndex: 'page', key: 'page' ,   defaultSortOrder: 'descend', sorter: (a, b) => a.page - b.page },
      { title: 'Language', dataIndex: 'language', key: 'language'  }
    ]
    
    return { rows , columns }
  
  }, [products])

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={styles.demo} />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={onClick}
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        {/* <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header> */}
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Table
            columns={columns}
            rowSelection={{}}
            expandable={{
              expandedRowRender: (record) => {
                console.log('record', record)
                return <div>Demo</div>
              },
            }}
            dataSource={rows}
          />
        </Content>
      </Layout>
    </Layout>
  )
}

export default SettingBook

// const onFinish = (values: any) => {
//   console.log('Received values of form: ', values)
// }

// const Appall: React.FC = () => {
  
//   return (
//     <Form
//       name="complex-form"
//       onFinish={onFinish}
//       labelCol={{ span: 8 }}
//       wrapperCol={{ span: 16 }}
      
//       style={{ maxWidth: 'none',  padding: 24 }}
//     >
//       <Form.Item style={{ marginBottom: 0 }}>
//         <Input.Group compact style={{ display: 'flex' }}>
//           <Form.Item
//             name="author_am"
//             rules={[{ required: true }]}
//             style={{ margin: '0 8px'  }}
//           >
//             <Input placeholder="հեղինակի անունը" />
//           </Form.Item>
//           <Form.Item
//             name="author_ru"
//             rules={[{ required: true }]}
//             style={{ margin: '0 8px'  }}
//           >
//             <Input placeholder="Имя автора" />
//           </Form.Item>
//           <Form.Item
//             name="author_en"
//             rules={[{ required: true }]}
//             style={{ margin: '0 8px' }}
//           >
//             <Input placeholder="Author name" />
//           </Form.Item>
//         </Input.Group>
      
//         <Input.Group compact style={{ display: 'flex' }}>
//           <Form.Item
//             name="publisher_am"
//             rules={[{ required: true }]}
//             style={{ margin: '0 8px'  }}
//           >
//             <Input placeholder="Հրատարակիչ" />
//           </Form.Item>
//           <Form.Item
//             name="publisher_ru"
//             rules={[{ required: true }]}
//             style={{ margin: '0 8px'  }}

//           >
//             <Input placeholder="Издатель" />
//           </Form.Item>
//           <Form.Item
//             name="publisher_en"
//             rules={[{ required: true }]}
//             style={{ margin: '0 8px'  }}
//           >
//             <Input placeholder="Publisher" />
//           </Form.Item>
//         </Input.Group>
        
//         <Input.Group compact style={{ display: 'flex' }}>
//           <Form.Item
//             name="year"
//             rules={[{ required: true }]}
//             style={{ margin: '0 8px'  }}
//           >
//             <Input placeholder="Input birth year" />
//           </Form.Item>
//           <Form.Item
//             name="month"
//             rules={[{ required: true }]}
//             style={{ margin: '0 8px'  }}
//           >
//             <Input placeholder="Input birth month" />
//           </Form.Item>
//           <Form.Item
//             name="month"
//             rules={[{ required: true }]}
//             style={{ margin: '0 8px'  }}
//           >
//             <Input placeholder="Input birth month" />
//           </Form.Item>
//         </Input.Group>
//       </Form.Item>
//       <Form.Item label=" " colon={false}>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//   )
// }