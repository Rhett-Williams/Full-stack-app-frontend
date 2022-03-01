import React from 'react'
import {useState, useEffect} from 'react'
import '../CSS/admindashboard.css'
import { Link } from 'react-router-dom';


const Services = () => {
    let [data, setData] = useState([]);

  useEffect(() => {
      showAll();
  }, []);



  const showAll = async () => {
    const request = await fetch(`https://api.thebigbusiness.xyz/api/service/public`);
    const response = await request.json()
    if (request.status === 200) {
      setData(response.services);
    }
  };

  return (
        <div style={{marginTop: "150px",}}>
     <table className="styled-table">
         <thead>
             <tr>
                 <th style={{ textAlign: "center" }}>Index</th>
                 <th style={{ textAlign: "center" }}>Name</th>
                 <th style={{ textAlign: "center" }}>Type</th>
                 <th style={{ textAlign: "center" }}>Rate</th>
                 <th style={{ textAlign: "center" }}>Quantity</th>
                 <th style={{ textAlign: "center" }}>Category</th>
                 <th style={{ textAlign: "center" }}>Action</th>
             </tr>
         </thead>
         <tbody>
             {data && data.map((item, index) => {
                 console.log()
                 return (
                     <tr key={index}>
                         <th scope="row">{index + 1}</th>
                         <td>{item.name}</td>
                         <td>{item.type}</td>
                         <td>{item.rate}</td>
                         <td>{item.quantity}</td>
                         <td>{item.category}</td>
                         <td>
                            <Link to={`/pricing/${item.serviceId}`}>
                                <button className="btn btn-edit">Buy</button>
                            </Link>                           
                            </td>
                        </tr>
                     )
                 })}
         </tbody>
     </table>
    </div>
  );
};

export default Services;