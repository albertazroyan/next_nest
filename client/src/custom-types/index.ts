// Import the global types we want to export

import { AppDispatch } from './app-dispatch'
import Book from './book'
import AdminTabs from './admin-tabs'
import Admin from './admin'
import AdminData from './adminData'

// Export the types
export type {
  // The type for the Redux store's dispatch function
  AppDispatch,
  AdminTabs,
  Book,
  Admin,
  AdminData
}