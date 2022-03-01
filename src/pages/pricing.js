import React from "react";

async function GetStripe(instaname, email, serviceID) {

    try {
      const response = await fetch(`https://api.thebigbusiness.xyz/api/payment/stripe/create`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          link: instaname,
          customerEmail: email,
          serviceId: serviceID,
        })
      })
      const json = await response.json();
      window.location.href = json.url;
      console.log(json);
    } catch (err) {
      console.error(err);
    }
  };

export default class LoginForm extends React.Component {
  
    handleSubmit = event => {
      event.preventDefault();
      console.log(this.instaname.value)
      GetStripe(this.instaname.value, this.email.value, this.serviceID.value);
    };

    render() {
      return (
        
        <div style={{ padding:"300px" }}>
          <div>Please Copy the service ID from the URL before clicking Buy</div>
        <form onSubmit={this.handleSubmit}>
                <input
            type="text"
            className="form-control mb-2 mr-sm-2 mb-sm-0"
            placeholder="instagram name"
            ref={input => this.instaname = input}/>
            <input
            type="text"
            className="form-control mb-2 mr-sm-2 mb-sm-0"
            placeholder="serviceID"
            ref={input => this.serviceID = input}/>
        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
        <input
            type="text"
            className="form-control"
            placeholder="email"
            ref={input => this.email = input}/>
        </div>  
        <button 
            type="submit" 
            className="btn btn-primary">Buy
        </button>
        </form>
        </div>
      );
    }
   }
  
   