import React, { useEffect } from "react";
import axios from "./axios";
const App = () => {
    const getbackend = async () => {
        try {
            const data = await axios.get("/");
            console.log(data);
        } catch (error) {
            console.log(error.response);
        }
    };

    useEffect(() => {
        getbackend();
    }, []);

    return <div>App</div>;
};

export default App;
