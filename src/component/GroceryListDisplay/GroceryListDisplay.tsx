import NewItemForm from "./NewItemForm/NewItemForm";
import GroceryItemDisplay from "../GroceryItemDisplay/GroceryItemDisplay";
import './GroceryListDisplay.css'
import GroceryList from "../../model/GroceryList";
import GroceryListItem from "../../model/GroceryListItem";
import { useSelector } from "react-redux";
import { AppState } from "../../model/AppState";
import { useParams } from "react-router-dom";

interface GroceryListProps {
}

function GroceryListComponent(props: GroceryListProps) {
    //TODO: implement delete
    const deleteItem: Function = (deleteItem: GroceryListItem) => {}

    const {listId} = useParams();
    const listIdNum = Number.parseInt(listId ?? '');
    const list: GroceryList | undefined = useSelector((state: AppState) => {
      return state.groceryListState.groceryLists.find(list => list.id === listIdNum)
    });

    return ( 
      <div>
        { list ? <div>
          <NewItemForm></NewItemForm>
          {list.items.map((item, index) => {
            return <GroceryItemDisplay item={item} key={index} deleteItem={deleteItem}></GroceryItemDisplay>
          })}
        </div> : <div>No list found</div>}
      </div>
    );
  }
  
  export default GroceryListComponent;