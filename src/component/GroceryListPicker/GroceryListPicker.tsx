import { useDispatch, useSelector } from "react-redux";
import GroceryList from "../../model/GroceryList";
import { AppState } from "../../model/AppState";
import { useNavigate } from "react-router-dom";
import "./GroceryListPicker.css"
import { useState } from "react";
import { CreateGroceryListRequest } from "../../model/CreateGroceryListRequest";
import { createNewGroceryList, deleteGroceryList } from "../../service/GroceryListService";
import { addGroceryList, removeGroceryList } from "../../store/state/groceryListSlice";

interface GroceryListProps {
  className?: string;
}

function GroceryListPicker(props: GroceryListProps) {
    const [enteredName, setEnteredName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const groceryLists: GroceryList[] = useSelector((state: AppState) => {
      return state.groceryListState.groceryLists
    }
    );

    const nameChanged = (event: React.FormEvent<HTMLInputElement>) => {
      setEnteredName(event.currentTarget.value);
    };

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const request: CreateGroceryListRequest = {
          listName: enteredName
      };
      
      createNewGroceryList(request).then(newList => {
        if(newList) {
          dispatch(addGroceryList(newList));
        }
      });

      setEnteredName("");
    }

    const deleteList = (listId: number) => {
      deleteGroceryList(listId).then(() => {
        dispatch(removeGroceryList(listId));
      });
    }


    const format = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });

    return (
      <div>
        <form onSubmit={submit} className="newListForm">
          <div className="form-group mb-2">
              <input className="form-control" id="nameInput" type="text" placeholder="Enter List Name" value={enteredName} onChange={nameChanged}></input>
          </div>
          <button className="btn btn-primary submit mb-2" type="submit">create list</button>
        </form>
        <ul className="list-group list-picker">
          {groceryLists.map((list, index) => {
            return <li className="list-group-item fill-width" key={index}>
              <div className="list-item fill-width">
                <div className="list-name-container"><b className="list-name">{list.name}</b> <i>{format.format(new Date(list.createdOn))}</i></div>
                <button className="btn btn-primary" onClick={ () => {navigate("/list/" + list.id)}}>
                view
                </button>
                <button className="btn btn-primary" onClick={ () => {deleteList(list.id)}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                  </svg>
                </button>
              </div>
            </li>
          })}
        </ul>
      </div> 
      
    );
  }
  
  export default GroceryListPicker;