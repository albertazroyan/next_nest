import { counterSlice } from './admin_slice'
import { AppDispatch } from '../../custom-types/index'

export const increment = (count: number) =>
  async (dispatch: AppDispatch): Promise<void> => {
    dispatch(counterSlice.actions.increment(count))
  }