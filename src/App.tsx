import './App.css';
import SignInForm from './component/SignInForm/SignInForm';
import GroceryListComponent from './component/GroceryListDisplay/GroceryListDisplay';
import GroceryListPicker from './component/GroceryListPicker/GroceryListPicker';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from './model/AppState';
import { getGroceryLists } from './service/GroceryListService';
import { setGroceryLists } from './store/state/groceryListSlice';
import { setUser } from './store/state/userSlice';
import { getUser } from './service/UserService';
import NavBar from './component/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const dispatch = useDispatch();

  const user = useSelector((state: AppState) => state.userState.user);

  // check if we have a valid token, if not log out
  if(!user) {
    getUser().then(user => {
      dispatch(setUser(user));
    })
    dispatch(setUser(user));
    if(user) {
      getGroceryLists().then(lists => {
        dispatch(setGroceryLists(lists));
      });
    } else {
      dispatch(setGroceryLists([]))
    }
  } else {
    getGroceryLists().then(lists => {
      dispatch(setGroceryLists(lists));
    });
  }

  return (
    <div className="app fill-height">
      <NavBar></NavBar>
      <div className="margins fill-height">
        <BrowserRouter>
          <Routes>
            <Route path="/signIn" element={<SignInForm/>}/>
            <Route path="/lists" element={<GroceryListPicker/>}/>
            <Route path="/list/:listId" element={<GroceryListComponent />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
