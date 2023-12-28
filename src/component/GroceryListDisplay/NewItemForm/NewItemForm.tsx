import { useState } from "react";
import GroceryItem from "../../../model/GroceryListItem";
import './NewItemForm.css'


interface NewItemFormProps {
}

function NewItemForm(props: NewItemFormProps) {
    const [enteredName, setEnteredName] = useState('');

    const nameChanged = (event: React.FormEvent<HTMLInputElement>) => {
        setEnteredName(event.currentTarget.value);
    };

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newItem: GroceryItem = {
            name: enteredName
        };
        
        //todo: send post to add new item
        setEnteredName("");
    }

    return (
      <form onSubmit={submit} className="flexCenter">
        <div className="form-group mb-2">
            <input className="form-control" id="nameInput" type="text" placeholder="Enter Item Name" value={enteredName} onChange={nameChanged}></input>
        </div>
        
        <button className="btn btn-primary submit mb-2" type="submit">Submit</button>
      </form>
    );
  }
  
  export default NewItemForm;
