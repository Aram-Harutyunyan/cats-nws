import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from "../features/categories/categoriesSlice"
import itemsReducer from "../features/items/itemsSlice"

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    card: itemsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
