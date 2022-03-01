import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../CSS/AddEdit.css';
import { toast } from 'react-toastify'

const initialState = {
    CategoryID: "",
    supplierServiceID: "",
    name: "",
    serviceType: "",
    retailPrice: "",
    quantity: "",
    quality: "",
    denyLinkDuplicates: "",
  };
  
  const AddEditServices = () => {
    const [state, setState] = useState(initialState);
    const { categoryId, supplierServiceId, name, serviceType, retailPrice, quantity, quality, denyLinkDuplicates } = state;
  
    const navigate = useNavigate();
  
    const { id } = useParams();
    
    const handleInputChange = (e) => {
      let { name, value } = e.target;
      setState({
        ...state,
        [name]: value,
      });
    };
  
    async function addUser() {
        let isDisabled1 = (denyLinkDuplicates.toLowerCase() === 'true');

        try {
            
          const response = await fetch(`https://api.thebigbusiness.xyz/api/service/admin/create`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem("authToken")
            },
            body: JSON.stringify({
                categoryId: categoryId,
                supplierServiceId: supplierServiceId,
                name: name,
                serviceType: serviceType,
                retailPrice: retailPrice,
                quantity: quantity,
                quality: quality,
                denyLinkDuplicates: isDisabled1,
            })
          })
          const json = await response.json();
          if (json.error){
            toast.error(json.errorMessage);
          }
        } catch (err) {
          console.error(err);
        }
      }

      async function updateUser(state) {
        let isDisabled1 = (state.denyLinkDuplicates.toLowerCase() === 'true');
        try {
          const response = await fetch(`https://api.thebigbusiness.xyz/api/service/admin/update`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem("authToken")
            },
            body: JSON.stringify({
                serviceId: id,
                supplierServiceId: state.supplierServiceId,
                name: state.name,
                serviceType: state.serviceType,
                retailPrice: state.retailPrice,
                quantity: state.quantity,
                quality: state.quality,
                denyLinkDuplicates: isDisabled1
            })
          })
          const json = await response.json();
          if (json.error){
            toast.error(json.errorMessage);
          }
          toast.error(json.message)
        } catch (err) {
          toast.error(err.message);
        }
      }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!categoryId || !supplierServiceId || !name || !serviceType || !retailPrice || !quantity || !quality || !denyLinkDuplicates) {
        toast.error("Please provide value in each input field");
      } else {
        if (!id) {
          addUser(state);
        } else {
          updateUser(state, id);
        }
  
        setTimeout(() => navigate("/admindashboard/services"), 500);
      }
    };

    const queryParams = new URLSearchParams(window.location.search);

    const _id = queryParams.get('id');

    return (
        <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name..."
          value={name}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">categoryId</label>
        <input
          type="text"
          id="categoryId"
          name="categoryId"
          placeholder="Enter categoryId ..."
          value={categoryId}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">supplierServiceId</label>
        <input
          type="text"
          id="supplierServiceId"
          name="supplierServiceId"
          placeholder="Enter supplierServiceId ..."
          value={supplierServiceId}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">serviceType</label>
        <input
          type="text"
          id="serviceType"
          name="serviceType"
          placeholder="Enter serviceType ..."
          value={serviceType}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">retailPrice</label>
        <input
          type="text"
          id="retailPrice"
          name="retailPrice"
          placeholder="Enter retailPrice ..."
          value={retailPrice}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">quantity</label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          placeholder="Enter quantity ..."
          value={quantity}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">quality</label>
        <input
          type="text"
          id="quality"
          name="quality"
          placeholder="Enter quality ..."
          value={quality}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">denyLinkDuplicates</label>
        <input
          type="text"
          id="denyLinkDuplicates"
          name="denyLinkDuplicates"
          placeholder="Enter denyLinkDuplicates ..."
          value={denyLinkDuplicates}
          onChange={handleInputChange}
        />

        <input type="submit" value={_id ? "Update" : "Add"} />
      </form>
    </div>
    );
};

export default AddEditServices;