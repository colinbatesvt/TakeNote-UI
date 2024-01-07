// import { useDispatch } from "react-redux";
import { SERVICE_URL } from "../constants/url";
import { User } from "../model/User"

export const getUser = () : Promise<User | null> => {
    return fetch (SERVICE_URL + '/user', 
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
                return undefined;
            }
        })
        .catch(error => {
            console.log('error while fetching current User: ', error);
        });
}

export const signIn = (username: string, password: string): Promise<string | null> => {
    return fetch(SERVICE_URL + '/user/authenticate', {
            method: 'POST',
            mode: 'cors',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then((response) => {
            console.log("user authenticated successfully");
            return response.headers.get("Authorization");
        })
        .catch(error => {
            console.log('error while attempting to authenticate: ', error);
            return '';
        });
}