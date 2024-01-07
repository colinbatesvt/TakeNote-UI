import { SERVICE_URL } from "../constants/url";
import { CreateGroceryListRequest } from "../model/CreateGroceryListRequest";
import GroceryList from "../model/GroceryList";
import GroceryListItem from "../model/GroceryListItem";
import UpdateGroceryItemRequest from "../model/UpdateGroceryItemRequest";

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

export const createNewGroceryList = (token: string, request: CreateGroceryListRequest): Promise<GroceryList | null> => {
    return fetch(SERVICE_URL + '/api/groceryLists/create', {
            method: 'POST',
            mode: 'cors',
            headers: {
                Authorization: token,
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

export const deleteGroceryList = (token: string, listId: number): Promise<GroceryList | null> => {
    return fetch(SERVICE_URL + '/api/groceryLists/' + listId, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                Authorization: token,
                'Content-Type': 'application/json',
            }
        })
        .then((response) => {
            return response.json();
        })
        .catch(error => {
            console.log('error while attempting to delete grocery list: ', error);
            return null;
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

export const removeCheckedItems = (token: string, listId: number): Promise<GroceryList | null> => {
    return fetch(SERVICE_URL + '/api/groceryLists/' + listId + "/removeCheckedItems", {
            method: 'POST',
            mode: 'cors',
            headers: {
                Authorization: token,
                'Content-Type': 'application/json',
            }
        })
        .then((response) => {
            return response.json();
        })
        .catch(error => {
            console.log('error while attempting to remove all checked items: ', error);
            return null;
        });
}

export const removeAllItems = (token: string, listId: number): Promise<GroceryList | null> => {
    return fetch(SERVICE_URL + '/api/groceryLists/' + listId + "/removeAllItems", {
            method: 'POST',
            mode: 'cors',
            headers: {
                Authorization: token,
                'Content-Type': 'application/json',
            }
        })
        .then((response) => {
            return response.json();
        })
        .catch(error => {
            console.log('error while attempting to remove all items: ', error);
            return null;
        });
}

export const updateGroceryListItem = (token: string, listId: number, request: UpdateGroceryItemRequest): Promise<GroceryList | null> => {
    return fetch(SERVICE_URL + '/api/groceryLists/' + listId + "/updateItem", {
            method: 'POST',
            mode: 'cors',
            headers: {
                Authorization: token,
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