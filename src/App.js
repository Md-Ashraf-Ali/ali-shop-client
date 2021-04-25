import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import RegisterEvent from './Components/RegisterEvent/RegisterEvent';
import MyEvents from './Components/MyEvents/MyEvents';
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AddEvents from "./Components/AddEvents/AddEvents";
import AllRegistration from "./Components/AllRegistration/AllRegistration";



function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/login">
          <Navbar/>
          <Login></Login>
          </Route>
          <PrivateRoute path="/registerEvent/:id">
          <Navbar/>
          <RegisterEvent></RegisterEvent>
          </PrivateRoute>
          <PrivateRoute path="/myEvents">
          <Navbar/>
          <MyEvents></MyEvents>
          </PrivateRoute>
          <PrivateRoute path="/allRegistration">
          <Navbar/>
          <AllRegistration></AllRegistration>
          </PrivateRoute>
          <PrivateRoute path="/addEvents">
          <Navbar/>
          <AddEvents></AddEvents>
          </PrivateRoute>
          <Route path="*">
          <Navbar/>
          <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
