import { useSelector } from "react-redux";
import GroceryList from "../../model/GroceryList";
import { AppState } from "../../model/AppState";
import { useNavigate } from "react-router-dom";

interface GroceryListProps {
  className?: string;
}

function GroceryListPicker(props: GroceryListProps) {

    const groceryLists: GroceryList[] = useSelector((state: AppState) => {
      return state.groceryListState.groceryLists
    }
    );
    const navigate = useNavigate();

    return ( 
      <div>
        {groceryLists.map((list, index) => {
          return <div key={index}>
            {list.name}
            <button className="btn btn-primary" onClick={ () => {navigate("/list/" + list.id)}}>expand</button>
          </div>
        })}
      </div>
    );
  }
  
  export default GroceryListPicker;