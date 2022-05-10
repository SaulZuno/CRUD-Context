import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./componentes/Dashboard";
import Menu from "./componentes/Menu";
import "./css/styles.css"
import AddUser from "./componentes/AddUser";
import EditUser from "./componentes/EditUser";

//CONTEXT
import UserState from './context/User/UserState'

function App() {
  return (
    <UserState>
    <Router>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/add-user" element={<AddUser />} />
        <Route exact path="/edituser/:target" element={<EditUser />} />
      </Routes>
    </Router>
    </UserState>
  );
}

export default App;
