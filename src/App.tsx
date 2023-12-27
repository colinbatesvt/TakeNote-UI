import './App.css';
import SignInForm from './component/SignInForm/SignInForm';
import GroceryListComponent from './component/GroceryListDisplay/GroceryListDisplay';
import GroceryListPicker from './component/GroceryListPicker/GroceryListPicker';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from './model/AppState';
import { getGroceryLists } from './service/GroceryListService';
import { setGroceryLists } from './store/state/groceryListSlice';
import { setToken, setUser } from './store/state/userSlice';
import { getUser } from './service/UserService';
import { TOKEN_COOKIE } from './constants/Cookies';
import NavBar from './component/NavBar/NavBar';

function App() {

  const dispatch = useDispatch();
  const [cookies,, removeCookie] = useCookies([TOKEN_COOKIE]);

  const selectedList = useSelector((state: AppState) => state.groceryListState.selectedGroceryList);
  const user = useSelector((state: AppState) => state.userState.user);
  const token = useSelector((state: AppState) => state.userState.token);

  if(cookies.token && !token) {
    dispatch(setToken(cookies.token));
    getUser(cookies.token).then(user => {
      if(user === undefined) {
        removeCookie(TOKEN_COOKIE);
        dispatch(setToken(''));
        dispatch(setUser(undefined));
      } else {
        dispatch(setUser(user));
      }
    })
    dispatch(setUser(user));
    getGroceryLists(cookies.token).then(lists => {
      dispatch(setGroceryLists(lists));
    });
  }

  return (
    <div className="app">
      <NavBar></NavBar>
      {
        !user ?
        <SignInForm></SignInForm> : <></>
      }
      {
        selectedList ? 
        <GroceryListComponent list={selectedList}></GroceryListComponent> : 
        <GroceryListPicker token={token}></GroceryListPicker>
      }
    </div>
  );
}

export default App;
