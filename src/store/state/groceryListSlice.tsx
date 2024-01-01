import { createSlice } from '@reduxjs/toolkit'
import GroceryList from '../../model/GroceryList';

const defaultLists: GroceryList[] = [];

export const groceryListSlice = createSlice({
  name: 'groceryList',
  initialState: {
    groceryLists: defaultLists
  },
  reducers: {
    setGroceryLists: (state, action) => {
      state.groceryLists = action.payload;
    },
    updateGroceryList: (state, action) => {
      const listIndex = state.groceryLists.findIndex((list: GroceryList) => list.id === action.payload.id);
      if(listIndex >= 0) {
        state.groceryLists[listIndex] = action.payload;
      }
    },
    addGroceryList: (state, action) => {
      state.groceryLists.push(action.payload);
    },
    removeGroceryList: (state, action) => {
      state.groceryLists = state.groceryLists.filter(list => list.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGroceryLists, updateGroceryList, addGroceryList, removeGroceryList } = groceryListSlice.actions

export default groceryListSlice.reducer