import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCustomerList} from "../../service/customer/customer.jsx";

function Dashboard() {

    const dispatch = useDispatch();
    const data = useSelector((store) => store.customerSlice.customer);

    useEffect(() => {
        dispatch(getCustomerList());
    }, []);

    useEffect(()=> {
        console.log(data.data)
    },[data.data])

    return (
        <div>
            Dashboard
        </div>
    );
}

export default Dashboard;