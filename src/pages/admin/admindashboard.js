import React from 'react'
import SideBar from './sidebard.js'
import { Routes, Route } from "react-router-dom";
import AddEdit from './AddEdit.js'
import Home from './home.js'
import ViewServices from './viewservices.js'
import AddEditServices from './AddEditServices'
import '../../CSS/admindashboard.css'

const AdminDashboard = () => {
  
    return (
      <div>
     <SideBar style={{ position:"relative" }}/>
        <Routes>
            <Route exact path="/" element={<Home />}>
            </Route>
            <Route path="/add" element={<AddEdit />}>
            </Route>
            <Route path="/update/:id" element={<AddEdit />}>
            </Route>
            <Route path="/services" element={<ViewServices />}>
            </Route>
            <Route path="/services/addservice" element={<AddEditServices />}>
            </Route>
            <Route path="/services/updateservice/:id" element={<AddEditServices />}>
            </Route>
      </Routes>
 </div>
    )
};
  
  export default AdminDashboard;