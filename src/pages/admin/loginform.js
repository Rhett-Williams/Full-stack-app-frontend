import React, { useState } from 'react'

function Loginform({ Login, error }) {
  const [details, setDetails] = useState({email: "", password: ""});

  const submitHandler = e => {
      e.preventDefault();
       
      Login(details);
  };


  
    return (
    <form onSubmit={submitHandler}>
        <div className="form-inner">
            <h2>Login Form</h2>
            <h3>email: rick@gmail.com</h3>
            <h3>password: 123456</h3>
            <div></div>
            {(error !== "") ? (<div className="error">{error}</div> ) : ""}
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">password</label>
                <input type="text" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <input type="submit" value="LOGIN" />
        </div>
    </form>
  )
}

export default Loginform;