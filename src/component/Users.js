import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
const Users = () => {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then(response=>{
            console.log(response);
            setUsers(response.data)
        })
    },[])
  return (
    <div className="container">
    <div className="row">
    {
            users.map((item,index)=>{
              return  <div key={index} className='col-3'>
                <div className="card w-100 h-100 p-2 m-4">
                <img src={item.image}  className='w-50 h-50 ' alt="product"  lazy="loading"/>
                <p>{item.title}</p>
                <Link to={`/single_project/${item.id}`} className='btn btn-info'>open</Link>
                </div>
              </div>
            })
           }
    </div>
  </div>

  )
}

export default Users

