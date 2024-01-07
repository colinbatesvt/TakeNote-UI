import NewItemForm from "./NewItemForm/NewItemForm";
import GroceryItemDisplay from "./GroceryItemDisplay/GroceryItemDisplay";
import './GroceryListDisplay.css'
import GroceryList from "../../model/GroceryList";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../model/AppState";
import { useParams } from "react-router-dom";
import { removeAllItems, removeCheckedItems, removeGroceryListItem, updateGroceryListItem } from "../../service/GroceryListService";
import { updateGroceryList } from "../../store/state/groceryListSlice";
import GroceryListItem from "../../model/GroceryListItem";
import UpdateGroceryItemRequest from "../../model/UpdateGroceryItemRequest";

interface GroceryListProps {
}

function GroceryListComponent(props: GroceryListProps) {
  
    const {listId} = useParams();
    const listIdNum = Number.parseInt(listId ?? '');
    const list: GroceryList | undefined = useSelector((state: AppState) => {
      return state.groceryListState.groceryLists.find(list => list.id === listIdNum)
    });

    const dispatch = useDispatch();

    const deleteItem: Function = (deleteItemIndex: number) => {
      if(list) {
        removeGroceryListItem(list.id, deleteItemIndex).then(updatedList => {
          if(updatedList) {
            dispatch(updateGroceryList(updatedList));
          }
        });
      }
    };

    const removeChecked = () => {
      if(list) {
        removeCheckedItems(list.id).then(updatedList => {
          if(updatedList) {
            dispatch(updateGroceryList(updatedList));
          }
        });
      }
    };

    const clearList = () => {
      if(list) {
        removeAllItems(list.id).then(updatedList => {
          if(updatedList) {
            dispatch(updateGroceryList(updatedList));
          }
        });
      }
    };

    const updateItem: Function = (index: number, item: GroceryListItem) => {
      if(list) {
        const request: UpdateGroceryItemRequest = {
          index: index,
          item: item
        }
        updateGroceryListItem(list.id, request).then(updatedList => {
          if(updatedList) {
            dispatch(updateGroceryList(updatedList));
          }
        });
      }
    }

    return ( 
      <div className="fill-height">
        { list ? <div className="fill-height">
          <NewItemForm listId={list.id}></NewItemForm>
          <ul className="list-group item-list overflow-auto">
            {list.items.map((item, index) => {
              return <GroceryItemDisplay item={item} key={index} index={index} deleteItem={deleteItem} updateItem={updateItem}></GroceryItemDisplay>
            })}
          </ul>
        <button className="btn btn-primary list-delete-button" onClick={removeChecked}>Delete Checked</button>
        <button className="btn btn-primary list-delete-button" onClick={clearList}>Clear List</button>
        </div> : <div>No list found</div>}
      </div>
    );
  }
  
  export default GroceryListComponent;