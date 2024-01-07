import { SERVICE_URL } from "../constants/url";
import { CreateGroceryListRequest } from "../model/CreateGroceryListRequest";
import GroceryList from "../model/GroceryList";
import GroceryListItem from "../model/GroceryListItem";
import UpdateGroceryItemRequest from "../model/UpdateGroceryItemRequest";

export const getGroceryLists = () : Promise<GroceryList[] | null> => {
    return fetch (SERVICE_URL + '/api/groceryLists', 
        {
            mode: 'cors',
            credentials: 'include'
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

export const createNewGroceryList = (request: CreateGroceryListRequest): Promise<GroceryList | null> => {
    return fetch(SERVICE_URL + '/api/groceryLists/create', {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request)
        })
        .then((response) => {
            return response.json();
        })
        .catch(error => {
            console.log('error while attempting to create grocery list: ', error);
            return null;
        });
}

export const deleteGroceryList = (listId: number): Promise<GroceryList | null> => {
    return fetch(SERVICE_URL + '/api/groceryLists/' + listId, {
            method: 'DELETE',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            return response.json();
        })
        .catch(error => {
            console.log('error while attempting to delete grocery list: ', error);
            return null;
        });
}

export const addGroceryListItem = (listId: number, item: GroceryListItem): Promise<GroceryList | null> => {
    return fetch(SERVICE_URL + '/api/groceryLists/' + listId + "/addItem", {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
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

export const removeGroceryListItem = (listId: number, itemIndex: number): Promise<GroceryList | null> => {
    return fetch(SERVICE_URL + '/api/groceryLists/' + listId + "/removeItem", {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
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

export const removeCheckedItems = (listId: number): Promise<GroceryList | null> => {
    return fetch(SERVICE_URL + '/api/groceryLists/' + listId + "/removeCheckedItems", {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            return response.json();
        })
        .catch(error => {
            console.log('error while attempting to remove all checked items: ', error);
            return null;
        });
}

export const removeAllItems = (listId: number): Promise<GroceryList | null> => {
    return fetch(SERVICE_URL + '/api/groceryLists/' + listId + "/removeAllItems", {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            return response.json();
        })
        .catch(error => {
            console.log('error while attempting to remove all items: ', error);
            return null;
        });
}

export const updateGroceryListItem = (listId: number, request: UpdateGroceryItemRequest): Promise<GroceryList | null> => {
    return fetch(SERVICE_URL + '/api/groceryLists/' + listId + "/updateItem", {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request)
        })
        .then((response) => {
            return response.json();
        })
        .catch(error => {
            console.log('error while attempting to update grocery list item: ', error);
            return null;
        });
}