import { createSlice } from '@reduxjs/toolkit'

export const groceryListSlice = createSlice({
  name: 'groceryList',
  initialState: {
    groceryLists: []
  },
  reducers: {
    setGroceryLists: (state, action) => {
      state.groceryLists = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setGroceryLists } = groceryListSlice.actions

export default groceryListSlice.reducer