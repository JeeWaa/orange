import './App.css'
import SignIn from "../pages/sign-in/index.jsx";
import SignUp from "../pages/sign-up/index.jsx";
import { Route, Routes, Navigate} from "react-router-dom";
import DashboardLayout from "../common/components/dashboardLayout/index.jsx";
import {useEffect, useState} from "react";

function App() {

    const token = window.localStorage.getItem('sign-in-token');

    useEffect(() => {
        if (token) {
            setLogin(true);
        }
    }, []);

    const [getLogin, setLogin] = useState(false);

    return (
        <>
            {!getLogin ?
                <Routes>
                    <Route exact path="*" element={<Navigate to={"/signin"}/>}/>
                    <Route exact path="/signin" element={<SignIn/>}/>
                    <Route exact path="/signup" element={<SignUp/>}/>
                </Routes>
                :
                <DashboardLayout/>
            }
        </>
    )
}

export default App
