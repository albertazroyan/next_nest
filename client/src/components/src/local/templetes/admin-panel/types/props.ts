import { Admin } from '@/custom-types'
export default interface PropTypes {
  admin: Admin
  tabs: string[]
  onChangeTab?: (tab: string, key: number, e: React.MouseEvent<HTMLElement> | undefined) => void

}