import Dashboard from "../../pages/dashboard/index.jsx";
import Customer from "../../pages/customer/index.jsx";
import Item from "../../pages/item/index.jsx";
import Order from "../../pages/order/index.jsx";
import DashboardIcon from "@mui/icons-material/Dashboard.js";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt.js";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda.js";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag.js";

const route = [
    {
        name: 'Dashboard',
        route: '/dashboard',
        key: 'dashboard',
        component: <Dashboard/>,
        icon:<DashboardIcon/>,
    },
    {
        name: 'Customer',
        route: '/customer',
        key: 'customer',
        component: <Customer/>,
        icon:<PeopleAltIcon/>,
    },
    {
        name: 'Item',
        route: '/item',
        key: 'item',
        component: <Item/>,
        icon:<ViewAgendaIcon/>,
    },
    {
        name: 'Order',
        route: '/order',
        key: 'order',
        component: <Order/>,
        icon:<ShoppingBagIcon/>,
    }
]

export default route;