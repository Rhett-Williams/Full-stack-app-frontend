import React from "react";

  async function register(instaname, email) {
    try {
      const response = await fetch("http://localhost:12346/api/auth/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiO…A4NH0.Zi00LSl5yV9Bg4UwgFxhUjJiC6EW0ycc1twJGU5YOG4'
        },
        body: JSON.stringify({
          email: instaname,
          password: email,
        })
      })
      const json = await response.json();
      console.log(json);
    } catch (err) {
      console.error(err);
    }
  };
  
  export default class LoginForm extends React.Component {

    handleSubmit = event => {
      event.preventDefault();
      register(this.instaname.value, this.email.value);   
    };

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
                <input
            type="text"
            className="form-control mb-2 mr-sm-2 mb-sm-0"
            placeholder="instagram name"
            ref={input => this.instaname = input}/>
        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
        <input
            type="text"
            className="form-control"
            placeholder="email"
            ref={input => this.email = input}/>
        </div>  
        <button 
            type="submit" 
            className="btn btn-primary">Save
        </button>
        </form>
        
      );
    }
   }
  