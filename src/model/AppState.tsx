import GroceryList from "./GroceryList";
import { User } from "./User";

export interface AppState {
    groceryListState: GroceryListState;
    userState: UserState;
};

export interface GroceryListState {
    groceryLists: GroceryList[];
    selectedGroceryList: GroceryList;
};

export interface UserState {
    token: string;
    user: User;
};
