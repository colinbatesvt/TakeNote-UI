import { createSlice } from '@reduxjs/toolkit'

export const groceryListSlice = createSlice({
  name: 'groceryList',
  initialState: {
    groceryLists: [],
    selectedGroceryList: undefined,
  },
  reducers: {
    setGroceryLists: (state, action) => {
      state.groceryLists = action.payload;
    },
    setSelectedGroceryList: (state, action) => {
        state.selectedGroceryList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGroceryLists, setSelectedGroceryList } = groceryListSlice.actions

export default groceryListSlice.reducer