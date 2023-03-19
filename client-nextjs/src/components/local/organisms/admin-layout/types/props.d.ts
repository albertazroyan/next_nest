// import StatusBarTypes from '../../../molecules/statusbar/types/props'

export default interface PropTypes {
  /* half section title */
  type?: 'submit' | 'reset' | 'button'
  size?: 's' | 'm'
  onTabChange?: (tab: string, key: number, e: React.MouseEvent<HTMLElement> | undefined) => void
  onPressBack?: (e) => void
  disabled?: boolean
  children: JSX.Element
  data: string[]
  tabs?: Array<string>
  dataChanged?: boolean
  activeTab?: string
}