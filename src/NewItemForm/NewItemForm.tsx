import { useState } from "react";
import GroceryItem from "../model/GroceryItem";

interface NewItemFormProps {
    setGroceryListItems: Function;
}

function NewItemForm(props: NewItemFormProps) {
    const [enteredName, setEnteredName] = useState('default');

    const nameChanged = (event: React.FormEvent<HTMLInputElement>) => {
        setEnteredName(event.currentTarget.value);
    };

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newItem: GroceryItem = {
            name: enteredName
        };
        props.setGroceryListItems((currentList: GroceryItem[]) => {
            return [...currentList, newItem];
        })
        setEnteredName("");
    }

    return (
      <form onSubmit={submit} className="new-item-form">
        <div className="row">
            <label>Name: </label><input type="text" value={enteredName} onChange={nameChanged}></input>
        </div>
        <div className="row">
            <input type="submit"></input>
        </div>
      </form>
    );
  }
  
  export default NewItemForm;