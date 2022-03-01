import React from 'react'
import {useState, useEffect} from 'react'
import '../../CSS/admindashboard.css'
import { Link } from 'react-router-dom';
import { toast } from '@chakra-ui/react';

const Home = () => {
    let [data, setData] = useState([]);

  useEffect(() => {
      showAll();
  }, []);

  const showAll = async () => {
    const request = await fetch(`https://api.thebigbusiness.xyz/api/service/admin/all`, { 
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("authToken")
          },
    });
    const response = await request.json()
    if (request.status === 201) {
      setData(response.services);
    }
  };

  async function onDeleteUser(id) {
    try {
      if (
      window.confirm("Are you sure that you wanted to delete that user record")
    ){
      const response = await fetch(`https://api.thebigbusiness.xyz/api/service/admin/delete`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("authToken")
        },
        body: JSON.stringify({
          serviceId: id
        })
      })
      const json = await response.json();
      showAll();
      if (json.error){
        toast.error(json.errorMessage);
      }
    }
      
    } catch (err) {
      console.error(err);
    }
  }
  return (
        <div style={{marginTop: "150px", marginLeft:"200px"}}>
     <table className="styled-table">
         <thead>
             <tr>
                 <th style={{ textAlign: "center" }}>Index</th>
                 <th style={{ textAlign: "center" }}>Name</th>
                 <th style={{ textAlign: "center" }}>ID</th>
                 <th style={{ textAlign: "center" }}>Is Active</th>
                 <th style={{ textAlign: "center" }}>Service ID</th>
                 <th style={{ textAlign: "center" }}>Type</th>
                 <th style={{ textAlign: "center" }}>Retail Price</th>
                 <th style={{ textAlign: "center" }}>Quantity</th>
                 <th style={{ textAlign: "center" }}>Quality</th>
                 <th style={{ textAlign: "center" }}>Action</th>
             </tr>
         </thead>
         <tbody>
             {data && data.map((item, index) => {
               let i=item.isActive.toString()
                 return (
                     <tr key={index}>
                         <th scope="row">{index + 1}</th>
                         <td>{item.name}</td>
                         <td>{item._id}</td>
                         <td>{i}</td>
                         <td>{item.supplierServiceId}</td>
                         <td>{item.serviceType}</td>
                         <td>{item.retailPrice}</td>
                         <td>{item.quantity}</td>
                         <td>{item.quality}</td>
                         <td><Link to={`updateservice/${item._id}`}>
                      <button className="btn btn-edit">Edit</button>
                    </Link>
                           <button className="btn btn-delete" onClick={() => onDeleteUser(item._id)}>Delete</button>
                           </td>
                        </tr>
                     )
                 })}
         </tbody>
     </table>
    </div>
  );
};

export default Home;