import React, { useState } from 'react';

import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';
import app from "../../firebase/firebase.init";

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error => {
            console.log(error)
        })
    }

    return ( 
        <div>
            <button onClick={handleGoogleSignIn}>Google login</button>
            {user && <div>
                <h3>User: {user.displayName}</h3>
                <h4>email: {user.email}</h4>
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};
export default Login;