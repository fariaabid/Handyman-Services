import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import NoMatch from './Pages/NoMatch/NoMatch';
import Login from './Pages/Login/Login';
import Order from './Pages/Customer/Order/Order';
import ServiceList from './Pages/Customer/ServiceList/ServiceList';
import Review from './Pages/Customer/Review/Review';
import AdminServiceList from './Pages/Admin/ServiceList/AdminServiceList';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddService from './Pages/Admin/AddService/AddService';
import MakeAdmin from './Pages/Admin/MakeAdmin/MakeAdmin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <PrivateRoute path="/customerOrder">
            <Order/>
          </PrivateRoute>
          <PrivateRoute path="/customerServiceList">
            <ServiceList/>
          </PrivateRoute>
          <PrivateRoute path="/customerReview">
            <Review/>
          </PrivateRoute>

          <PrivateRoute path="/adminServiceList">
            <AdminServiceList/>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService/>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin/>
          </PrivateRoute>

          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;