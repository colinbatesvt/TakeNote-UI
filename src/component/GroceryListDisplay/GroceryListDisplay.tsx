import NewItemForm from "./NewItemForm/NewItemForm";
import GroceryItemDisplay from "./GroceryItemDisplay/GroceryItemDisplay";
import './GroceryListDisplay.css'
import GroceryList from "../../model/GroceryList";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../model/AppState";
import { useParams } from "react-router-dom";
import { removeGroceryListItem, updateGroceryListItem } from "../../service/GroceryListService";
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
    const token = useSelector((state: AppState) => state.userState.token);

    const deleteItem: Function = (deleteItemIndex: number) => {
      if(list) {
        removeGroceryListItem(token, list.id, deleteItemIndex).then(updatedList => {
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
        updateGroceryListItem(token, list.id, request).then(updatedList => {
          if(updatedList) {
            dispatch(updateGroceryList(updatedList));
          }
        });
      }
    }

    return ( 
      <div>
        { list ? <div>
          <NewItemForm listId={list.id}></NewItemForm>
          <ul className="list-group">
            {list.items.map((item, index) => {
              return <GroceryItemDisplay item={item} key={index} index={index} deleteItem={deleteItem} updateItem={updateItem}></GroceryItemDisplay>
            })}
          </ul>
        </div> : <div>No list found</div>}
      </div>
    );
  }
  
  export default GroceryListComponent;