import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
const SingleProject = () => {
    const [single_product,setSingleProduct] = useState([])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then(response=>{
            console.log(response);
            setSingleProduct(response.data)
        })
    },[])
    const url = window.location.href.split("/")
    let id = Number(url[4])
  return (
    <div className='container'>
       <div className="row m-5">
        <div className="col-md-6">
            <img src={single_product.image} className='w-50 h-70' alt="" />
        </div>
        <div className="col-md-6 ">
           <h4>{single_product.title}</h4>
           <h6>price: ${single_product.price}</h6>
           <h4>Description</h4>
           <p>{single_product.description}</p>
           <button className='btn btn-info'>Add project</button>
        </div>
       </div>
    </div>
  )
}

export default SingleProject

