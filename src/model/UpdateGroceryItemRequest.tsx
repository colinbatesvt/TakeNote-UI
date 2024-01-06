import GroceryListItem from "./GroceryListItem";

export default interface UpdateGroceryItemRequest {
    index: number;
    item: GroceryListItem;
}