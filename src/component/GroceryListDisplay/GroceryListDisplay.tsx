import { useState } from "react";
import NewItemForm from "../NewItemForm/NewItemForm";
import GroceryItemDisplay from "../GroceryItemDisplay/GroceryItemDisplay";
import './GroceryListDisplay.css'
import GroceryList from "../../model/GroceryList";
import GroceryListItem from "../../model/GroceryListItem";

interface GroceryListProps {
  list: GroceryList
}

function GroceryListComponent(props: GroceryListProps) {

    console.log(props.list);

    const deleteItem: Function = (deleteItem: GroceryListItem) => {
      
    }

    return ( 
      <div>
        <NewItemForm></NewItemForm>
        {props.list.items.map((item, index) => {
          return <GroceryItemDisplay item={item} key={index} deleteItem={deleteItem}></GroceryItemDisplay>
        })}
      </div>
    );
  }
  
  export default GroceryListComponent;