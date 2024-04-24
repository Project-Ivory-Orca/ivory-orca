import {useRoutes, BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import MyAccount from './Pages/MyAccount';
import MyOrder from './Pages/MyOrder';
import MyOrders from './Pages/MyOrders';
import NotFound from './Pages/NotFound';
import NavBar from './Components/Navbar/index'
import Clearance from './Pages/Clearance';
import Jerseys from './Pages/Jerseys/indext';


const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/' , element:  <Home/>},
    {path: '/My Account' , element:  <MyAccount/>},
    {path: '/My Order' , element: <MyOrder/>},
    {path: '/My Orders' , element:  <MyOrders/>},
    {path: '/Clearance' , element:  <Clearance/>},
    {path: '/Jerseys' , element:  <Jerseys/>},
    {path: '*' , element:  <NotFound/>},
  ]);
  return routes;
};

function App() {
  return(
    <Router>
      <NavBar/>
      <AppRoutes/>
    </Router>
  );
}

export default App;