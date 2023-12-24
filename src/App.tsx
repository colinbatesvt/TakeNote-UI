import React, { useState } from 'react';
import './App.css';
import GroceryList from './model/GroceryList';
import SignInForm from './component/SignInForm/SignInForm';
import GroceryListComponent from './component/GroceryListDisplay/GroceryListDisplay';
import GroceryListPicker from './component/GroceryListPicker/GroceryListPicker';
import { useCookies } from 'react-cookie';

function App() {

  const [selectedList, setSelectedList] = useState<GroceryList | undefined>(undefined);
  const [token, setToken] = useState<string>("");
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const setAuthTokenAndCookie = (token: string) => {
    setToken(token);
    setCookie('token', token, {
      httpOnly: true,
    });
  };

  return (
    <div className="app">
      <SignInForm setAccessToken={setAuthTokenAndCookie}></SignInForm>
      {
        selectedList ? 
        <GroceryListComponent list={selectedList}></GroceryListComponent> : 
        <GroceryListPicker token={token} selectList={setSelectedList}></GroceryListPicker>
      }
    </div>
  );
}

export default App;
