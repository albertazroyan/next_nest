import { adminSlice } from './admin_slice'
import { AppDispatch } from '../../custom-types/index'

// Define a function called "getAdminDb" that takes a number argument called "count".
// The function returns an asynchronous function that takes a "dispatch" argument of type AppDispatch and returns a Promise that resolves to "void".
export const getAdminDb = (count: number) =>
  async (dispatch: AppDispatch): Promise<void> => {
    // Call the "currentAdminDb" action creator from the adminSlice module with the "count" argument and dispatch the resulting action.
    dispatch(adminSlice.actions.currentAdminDb(count))
  }

// Define a function called "setCurrentTab" that takes a string argument called "tab".
// The function returns an asynchronous function that takes a "dispatch" argument of type AppDispatch and returns a Promise that resolves to "void".
export const setCurrentTab = (tab: string) =>
  async (dispatch: AppDispatch): Promise<void> => {
    // Call the "currentTab" action creator from the adminSlice module with the "tab" argument and dispatch the resulting action.
    dispatch(adminSlice.actions.currentTab(tab))
  }