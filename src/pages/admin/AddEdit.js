import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../CSS/AddEdit.css';
import { toast } from 'react-toastify'

const initialState = {
    name: "",
    _id: "",
    isDisabled: "",
  };
  
  const AddEdit = () => {
    const [state, setState] = useState(initialState);
    const { name, isDisabled } = state;
  
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
        try {
            const isDisabled1 = (isDisabled === "true")
          const response = await fetch(`https://api.thebigbusiness.xyz/api/category/create`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem("authToken")
            },
            body: JSON.stringify({
              name: name,
              isDisabled: isDisabled1
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
        try {
            let isDisabled1 = (isDisabled.toLowerCase() === 'true');
          const response = await fetch(`https://api.thebigbusiness.xyz/api/category/update`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem("authToken")
            },
            body: JSON.stringify({
              categoryId: id,
                name: state.name,
              isDisabled: isDisabled1
            })
          })
          const json = await response.json();
          if (json.error){
            toast.error(json.errorMessage);
          }
        } catch (err) {
          toast.error(err.message);
        }
      }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!name || !isDisabled) {
        toast.error("Please provide value in each input field");
      } else {
        if (!id) {
          addUser(state);
        } else {
          updateUser(state, id);
        }
  
        setTimeout(() => navigate("/admindashboard"), 500);
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

        <label htmlFor="contact">isDisabled</label>
        <input
          type="text"
          id="isDisabled"
          name="isDisabled"
          placeholder="Enter disabled ..."
          value={isDisabled}
          onChange={handleInputChange}
        />

        <input type="submit" value={_id ? "Update" : "Add"} />
      </form>
    </div>
    );
};

export default AddEdit;