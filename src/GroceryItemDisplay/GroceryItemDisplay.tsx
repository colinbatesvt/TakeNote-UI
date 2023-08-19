import GroceryItem from "../model/GroceryItem";

interface GroceryItemDisplayProps {
    item: GroceryItem;
}

function GroceryItemDisplay(props: GroceryItemDisplayProps) {
    return <h1>{props.item.name}</h1>
}

export default GroceryItemDisplay;