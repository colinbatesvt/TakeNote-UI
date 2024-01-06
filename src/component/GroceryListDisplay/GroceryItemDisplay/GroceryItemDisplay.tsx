import GroceryItem from "../../../model/GroceryListItem";
import "./GroceryItemDisplay.css"

interface GroceryItemDisplayProps {
    item: GroceryItem;
    index: number;
    deleteItem: Function;
    updateItem: Function;
}

function GroceryItemDisplay(props: GroceryItemDisplayProps) {

    const onDeleteClicked = () => {
        props.deleteItem(props.index);
    };

    const changeCheckState = () => {
        props.updateItem(props.index, {
            ...props.item,
            checked: !props.item.checked
        });
    }

    const itemClicked = (event: React.MouseEvent<HTMLElement>) => {
        const div = event.currentTarget;
        const removeButton = div.querySelector('.delete-button');
        const removeButtonIcon = div.querySelector('svg');
        if (removeButton === event.target || removeButtonIcon === event.target) {
            return;
        } else {
            changeCheckState();
        }
    }
    
    return (
        <li className="list-group-item list-item" onClick={itemClicked}>
            <div className="list-item-content">
                {props.item.name}
                <div>
                    <input type="checkbox" onChange={changeCheckState} className="form-check-input check-box" checked={props.item.checked}></input>
                    <button onClick={onDeleteClicked} className="btn btn-primary delete-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </li>
    );
}

export default GroceryItemDisplay;