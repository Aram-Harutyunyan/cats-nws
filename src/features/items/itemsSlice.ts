import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../utils/http";

type itemsProps = {
  items: Array<string>,
  status: string,
}

type getItemsProps = {
  id: string | undefined,
  page: number
}
const initialState: itemsProps  = {
  items: [],
  status: ""
}

export const getItems = createAsyncThunk(
  'items/getItems',
  async ({page, id}:getItemsProps) => {
      const response = await http.get(`images/search?limit=10&page=${page}&category_ids=${id || 1}`)
      if(response.status === 200){
        return {
          data: response.data,
          page,
        }
      }

  }
)

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getItems.pending, state => {
      return { ...state, status:"pending"}
    }),
    builder.addCase(getItems.fulfilled, (state, {payload}:any) => {
      return {
        ...state, items: (
          payload?.page > 1 ? 
          [...state.items, ...payload.data]
          : payload.data
        ),
        status:"fulfilled"
      }
    })
    builder.addCase(getItems.rejected, (state, {payload}) => {
      return { ...state, status:`Rejected ${payload}`}
    })
  },
})


export default itemsSlice.reducer