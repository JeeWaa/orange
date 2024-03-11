import './App.css'
import SignIn from "../pages/sign-in/index.jsx";
import SignUp from "../pages/sign-up/index.jsx";
import { Route, Routes, Navigate} from "react-router-dom";
import DashboardLayout from "../common/components/dashboardLayout/index.jsx";
import {useState} from "react";

function App() {

    const [getLogin, setLogin] = useState(true)
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
