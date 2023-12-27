import { useDispatch, useSelector } from "react-redux";
import { setSelectedGroceryList } from "../../store/state/groceryListSlice";
import GroceryList from "../../model/GroceryList";
import { AppState } from "../../model/AppState";

interface GroceryListProps {
  className?: string;
  token: string;
}

function GroceryListPicker(props: GroceryListProps) {

    const groceryLists: GroceryList[] = useSelector((state: AppState) => {
      return state.groceryListState.groceryLists
    }
    );
    const dispatch = useDispatch();

    return ( 
      <div>
        {groceryLists.map((list, index) => {
          return <div key={index}>
            {list.name}
            <button className="btn btn-primary" onClick={ () => {dispatch(setSelectedGroceryList(list))}}>expand</button>
          </div>
        })}
      </div>
    );
  }
  
  export default GroceryListPicker;