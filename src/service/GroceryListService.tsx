import { SERVICE_URL } from "../constants/url";
import GroceryList from "../model/GroceryList";
import GroceryListItem from "../model/GroceryListItem";

export const getGroceryLists = (token: string) : Promise<GroceryList[] | null> => {
    return fetch (SERVICE_URL + '/api/groceryLists', 
        {
            mode: 'cors',
            headers: {
            Authorization: token
            }
        })
        .then((response) => {
            if(response) {
              return response.json();
            } else {
              return null;
            }
        })
        .then((resData) => {
            if(resData) {
                return resData;
            } else {
                return [];
            }
        })
        .catch(error => {
            console.log('error while fetching grocery lists: ', error);
        });
}

export const addGroceryListItem = (token: string, listId: number, item: GroceryListItem): Promise<GroceryList | null> => {
    return fetch(SERVICE_URL + '/api/groceryLists/' + listId + "/addItem", {
            method: 'POST',
            mode: 'cors',
            headers: {
                Authorization: token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item)
        })
        .then((response) => {
            return response.json();
        })
        .catch(error => {
            console.log('error while attempting to add grocery list item: ', error);
            return null;
        });
}

export const removeGroceryListItem = (token: string, listId: number, itemIndex: number): Promise<GroceryList | null> => {
    return fetch(SERVICE_URL + '/api/groceryLists/' + listId + "/removeItem", {
            method: 'POST',
            mode: 'cors',
            headers: {
                Authorization: token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(itemIndex)
        })
        .then((response) => {
            return response.json();
        })
        .catch(error => {
            console.log('error while attempting to remove grocery list item: ', error);
            return null;
        });
}