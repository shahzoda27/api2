import React, { useEffect, useState } from 'react'
import "./sidebar.scss"
const Sidebar = () => {
    const [lists,setLists] = useState([
        {id:1, title:"Users", path:"users"},
        {id:2, title:"Products", path:"products"},
        {id:3, title:"Cards", path:"cards"},
    ])
    const [active,setActive] = useState(1)
    const activeTab =(id)=>{
        setActive(id)
        localStorage.setItem("id" , id)
    }
    useEffect(()=>{
        let val = +localStorage.getItem("id")
        if (val) {
            setActive(val)
        }else{
            setActive(1)
        }
    },[])
  return (
    <div className='sidebar'>
      <ul>
        {
            lists.map((item,index)=>{
                return <li key={index}>
                         <button className={active === item.id ? "active_btn" : ""} onClick={()=>activeTab(item.id)}>{item.title}</button>
                </li>
            })
        }
      </ul>
    </div>
  )
}

export default Sidebar