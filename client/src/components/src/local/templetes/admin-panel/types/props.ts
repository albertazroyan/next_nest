import { Admin } from '@/custom-types'

/**
 * Defines the props accepted by the `AdminLayout` component.
 */
export default interface PropTypes {
    /**
   * An object containing admin data.
   */
  admin: Admin

   /**
   * An array of strings representing the tabs to be displayed.
   */
  tabs: string[]

  /**
   * A function to be called when the active tab changes.
   * @param tab - The new active tab.
   * @param key - The key of the new active tab.
   * @param e - The event that triggered the tab change, if any.
  */
  onChangeTab?: (tab: string, key: number, e: React.MouseEvent<HTMLElement> | undefined) => void

}