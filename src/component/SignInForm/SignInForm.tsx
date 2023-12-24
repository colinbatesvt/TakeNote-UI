import { useState } from "react";
import './SignInForm.css';

interface SignInFormProps {
    setAccessToken: Function;
}

function SignInForm(props: SignInFormProps) {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const userNameChanged = (event: React.FormEvent<HTMLInputElement>) => {
        setEnteredUsername(event.currentTarget.value);
    };

    const passwordChanged = (event: React.FormEvent<HTMLInputElement>) => {
        setEnteredPassword(event.currentTarget.value);
    };

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        fetch('http://localhost:8080/user/authenticate', {
            method: 'POST',
            mode: 'cors',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: enteredUsername,
                password: enteredPassword
            })
        })
        .then((response) => {
            console.log("user authenticated successfully");
            props.setAccessToken(response.headers.get("Authorization"));
        })
        .catch(error => {
            console.log('error while attempting to authenticate: ', error);
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