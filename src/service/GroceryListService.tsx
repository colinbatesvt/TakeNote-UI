import { SERVICE_URL } from "../constants/url";
import GroceryList from "../model/GroceryList";

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