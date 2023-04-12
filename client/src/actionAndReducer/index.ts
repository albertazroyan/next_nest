import {
  // Action,
  configureStore,
  // ThunkAction,
} from '@reduxjs/toolkit'
import {
  TypedUseSelectorHook, // Hook for typed useSelector
  useDispatch, // Hook to get the dispatch function
  useSelector, // Hook to select data from the Redux store
} from 'react-redux'
import adminReducer from './dbAdmin/admin_slice'

// Create a Redux store using the configureStore function from Redux toolkit.
// The store has one reducer, which is the adminReducer.
export const store = configureStore({
  reducer: {
    admin: adminReducer,
  },
})

// Define the types for the dispatch function and the state of the Redux store.s
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

// Create a custom hook that returns the useDispatch hook with the AppDispatch type.
// This hook can be used to get the dispatch function from the Redux store.
export const useAppDispatch = () => useDispatch<AppDispatch>()

// Create a custom hook that returns the useSelector hook with the RootState type.
// This hook can be used to select data from the Redux store with type checking.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// Export the AppThunk type, which is a generic ThunkAction type that can be used for async actions.
// However, this type is currently commented out and not being used in this code.
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;