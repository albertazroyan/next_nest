import { adminSlice } from './admin_slice'
import { AppDispatch } from '../../custom-types/index'

export const getAdminDb = (count: number) =>
  async (dispatch: AppDispatch): Promise<void> => {
    dispatch(adminSlice.actions.currentAdminDb(count))
  }

export const setCurrentTab = (tab: string) =>
  async (dispatch: AppDispatch): Promise<void> => {
    dispatch(adminSlice.actions.currentTab(tab))
  }