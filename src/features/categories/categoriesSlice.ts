import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../utils/http";

type categoriesProps = {
  list: Array<string>,
  status: string
}
const initialState: categoriesProps  = {
  list: [],
  status: ""
}

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async () => {
    const response = await http.get("categories")
    if(response.status === 200){
      return response.data
    }
  }
)

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, state => {
      return { ...state, status:"pending"}
    }),
    builder.addCase(getCategories.fulfilled, (state, {payload}) => {
      return { ...state, list: payload, status:"fulfilled"}
    })
    builder.addCase(getCategories.rejected, (state, {payload}) => {
      return { ...state, status:`Rejected ${payload}`}
    })
  },
})

export default categoriesSlice.reducer