import React, { useState } from "react";
import LoginForm from './loginform.js'
import { Login } from '../../functions/login.js'
import { LocalLogin } from '../../functions/bgauth.js'


function AdminLogin() {

    LocalLogin()
    const [user, setUser] = useState({name:"", email:""});
    const [error, setError] = useState("");
Login()

//react parsing
    return (
                <LoginForm Login={Login} error={error}/>
    ); 
}

export default AdminLogin;