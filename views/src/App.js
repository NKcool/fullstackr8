import React, { useEffect } from "react";
import axios from "./axios";
import { asyncsignup, asyncloaduser, asyncsignin } from "./store/userActions";
import { useDispatch, useSelector } from "react-redux";
const App = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    // console.log(error);
    // console.log(isAuthenticated);
    useEffect(() => {
        dispatch(asyncloaduser());
    }, []);

    const registerUser = () => {
        dispatch(
            asyncsignup({
                name: "Ravi Kumar",
                username: "ravi_kumar",
                email: "ravi@kumar.com",
                password: "Aa@123",
            })
        );
    };

    const loginUser = () => {
        dispatch(
            asyncsignin({
                email: "ravi@kumar.com",
                password: "Aa@123",
            })
        );
    };

    return (
        <div>
            <button onClick={registerUser}>Signup</button>
            <button onClick={loginUser}>Signin</button>
        </div>
    );
};

export default App;
