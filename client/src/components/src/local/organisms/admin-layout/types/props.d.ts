// import StatusBarTypes from '../../../molecules/statusbar/types/props'

import { Admin } from '@/custom-types'

export default interface PropTypes {
  /* half section title */
  type?: 'submit' | 'reset' | 'button'
  size?: 's' | 'm'
  onChangeTab?: (tab: string, key: number, e: React.MouseEvent<HTMLElement> | undefined) => void
  onPressBack?: (e) => void
  disabled?: boolean
  children: JSX.Element
  admin: Admin
  tabs?: Array<string>
  dataChanged?: boolean
  activeTab?: string
}