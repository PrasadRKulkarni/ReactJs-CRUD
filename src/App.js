import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";
import Navbar from "./components/layout/Navbar";

import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";

import {
  BrowserRouter,
  Route,
  Switch} from "react-router-dom";


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} /> 
          <Route exact path="/users/:id" component={User} /> 
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
