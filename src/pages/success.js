import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify'
import { Box } from '@chakra-ui/react'
// const showAll = async () => {
//     const request = await fetch(`https://api.thebigbusiness.xyz/api/category/all`);
//     const response = await request.json()
//     if (request.status === 201) {
//       setData(response.categories);
//     }

//   };


async function SuccessTry(id){
  
  const request = await fetch(`https://api.thebigbusiness.xyz/api/payment/stripe/success/${id}`)
  const response = await request.json()
  if (response.message){
    toast.error(response.message)
  } else {
    return response
  }
}

  

function Success (){
  const { id } = useParams()
  
  const data = SuccessTry(id)
    return (
<div>
<Box style={{marginTop: "150px"}}bg='tomato' w='100%' p={4} color='white'>
  <div style={{color: "white"}}>{data.link}</div>
  YOUR ORDER HAS BEEN PLACED SUCCESSFULLY
</Box>
 </div>

    )};
  
  export default Success;