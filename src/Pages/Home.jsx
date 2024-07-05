import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Usercontext } from '../Context/LoginContext'

const Home = () => {
    const [islogin,setlogin]= useContext(Usercontext)
    const handlelogout= async()=>{
      const rees= await axios.post("https://day6nodejsbe.onrender.com/users/logout",{},{withCredentials:true})
       alert(rees.data.message)  
       setlogin(false)
    }
    const [mail,setmail]=useState([])
    useState(async()=>{
       const rees=await axios.get("https://day6nodejsbe.onrender.com/input/urls")
       setmail(rees.data)

    },[])
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Url Shorten</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/history">History</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" onClick={handlelogout}>logout</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" >Created urls :{mail.length}</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <Outlet/>
  </>
  )
}

export default Home