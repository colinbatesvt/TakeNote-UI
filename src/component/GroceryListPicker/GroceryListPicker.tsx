import { useEffect, useState } from "react";
import GroceryList from "../../model/GroceryList";

interface GroceryListProps {
  className?: string;
  selectList: Function;
  token: string;
}

function GroceryListPicker(props: GroceryListProps) {

    const [groceryLists, setGroceryLists] = useState<GroceryList[]>([]);

      useEffect(() => {
        if(props.token) {
          fetch(
            'http://localhost:8080/api/groceryLists', 
            {
              mode: 'cors',
              headers: {
                Authorization: props.token
              }
            }
            )
          .then((response) => {
            if(response) {
              return response.json();
            } else {
              return null;
            }
          })
          .then((resData) => {
            if(resData) {
              setGroceryLists(resData);
            }
          })
          .catch(error => {
            console.log('error while fetching grocery lists: ', error);
          });
        }
      }, [props.token]);

    return ( 
      <div>
        {groceryLists.map((list, index) => {
          return <div key={index}>
            {list.name}
            <button className="btn btn-primary" onClick={ () => {props.selectList(list)}}>expand</button>
          </div>
        })}
      </div>
    );
  }
  
  export default GroceryListPicker;