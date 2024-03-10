import './App.css'
import SignIn from "../pages/sign-in/index.jsx";
import SignUp from "../pages/sign-up/index.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "../pages/dashboard/index.jsx";
import Customer from "../pages/customer/index.jsx";
import Item from "../pages/item/index.jsx";
import Order from "../pages/order/index.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<SignIn/>}/>
                    <Route exact path="/signin" element={<SignIn/>}/>
                    <Route exact path="/signup" element={<SignUp/>}/>
                    <Route exact path="/dashboard" element={<Dashboard/>}/>
                    <Route exact path="/customer" element={<Customer/>}/>
                    <Route exact path="/item" element={<Item/>}/>
                    <Route exact path="/order" element={<Order/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
