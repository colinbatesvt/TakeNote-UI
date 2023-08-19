import { useState } from "react";
import NewItemForm from "../NewItemForm/NewItemForm";
import GroceryItemDisplay from "../GroceryItemDisplay/GroceryItemDisplay";

function GroceryList() {

    const [groceryListItems, setGroceryListItems] = useState([]);

    return ( 
      <div>
        <NewItemForm setGroceryListItems={setGroceryListItems}></NewItemForm>
        {groceryListItems.map(item => {
          return <GroceryItemDisplay item={item}></GroceryItemDisplay>
        })}
      </div>
    );
  }
  
  export default GroceryList;