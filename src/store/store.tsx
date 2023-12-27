import { configureStore } from '@reduxjs/toolkit';
import groceryListsReducer from './state/groceryListSlice'
import userReducer from './state/userSlice'

export default configureStore({
  reducer: {
    groceryListState: groceryListsReducer,
    userState: userReducer
  },
});
