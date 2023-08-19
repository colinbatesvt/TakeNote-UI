import { useState } from "react";
import NewItemForm from "../NewItemForm/NewItemForm";
import GroceryItemDisplay from "../GroceryItemDisplay/GroceryItemDisplay";
import GroceryItem from "../model/GroceryItem";

interface GroceryListProps {
  className?: string;
}

function GroceryList(props: GroceryListProps) {

    const [groceryListItems, setGroceryListItems] = useState<GroceryItem[]>([]);

    const deleteItem: Function = (deleteItem: GroceryItem) => {
      setGroceryListItems((currentItems: GroceryItem[]) => {
        return currentItems.filter(item => item !== deleteItem);
    })
    }

    return ( 
      <div>
        <NewItemForm setGroceryListItems={setGroceryListItems}></NewItemForm>
        {groceryListItems.map((item, index) => {
          return <GroceryItemDisplay item={item} key={index} deleteItem={deleteItem}></GroceryItemDisplay>
        })}
      </div>
    );
  }
  
  export default GroceryList;