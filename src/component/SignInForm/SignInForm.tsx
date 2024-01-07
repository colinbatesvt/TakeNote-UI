import { useState } from "react";
import './SignInForm.css';
import { getGroceryLists } from "../../service/GroceryListService";
import { useDispatch } from "react-redux";
import { setGroceryLists } from "../../store/state/groceryListSlice";
// import { setToken } from "../../store/state/userSlice";
// import { useCookies } from "react-cookie";
// import { TOKEN_COOKIE } from "../../constants/Cookies";
import { signIn } from "../../service/UserService";
import { useNavigate } from "react-router-dom";

interface SignInFormProps {
}

function SignInForm(props: SignInFormProps) {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const [, setCookie] = useCookies([TOKEN_COOKIE]);

    const userNameChanged = (event: React.FormEvent<HTMLInputElement>) => {
        setEnteredUsername(event.currentTarget.value);
    };

    const passwordChanged = (event: React.FormEvent<HTMLInputElement>) => {
        setEnteredPassword(event.currentTarget.value);
    };

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        signIn(enteredUsername, enteredPassword).then(() => {
                // dispatch(setToken(token));
                getGroceryLists().then(lists => {
                    dispatch(setGroceryLists(lists));
                });
                //TODO: figure out http only cookie
                // setCookie(TOKEN_COOKIE, token, {
                //     path: "/",
                //     maxAge: 99999
                //   });
                navigate('/lists');
        });

        setEnteredUsername("");
        setEnteredPassword("");
    }

    return (
        <div className="sign-in card">
            <div className="card-body">
                <h5 className="card-title">Sign In</h5>
                <form onSubmit={submit}>
                    <div className="form-group">
                        <label htmlFor="usernameInput">Username</label>
                        <input className="form-control" id="usernameInput" placeholder="Enter username" type="text" value={enteredUsername} onChange={userNameChanged}></input>
                    </div>
                    <div className="form-group space-top">
                        <label htmlFor="passwordInput">Password</label>
                        <input className="form-control" id="passwordInput" placeholder="Enter password" type="password" value={enteredPassword} onChange={passwordChanged}></input>
                    </div>
                    <button type="submit" className="btn btn-primary space-top">Submit</button>
                </form>
            </div>
      </div>
    );
  }
  
  export default SignInForm;