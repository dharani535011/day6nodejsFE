import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
   const navigate= useNavigate()
    const [values,setvalues]=useState({
        first:"",
        last:"",
        email:"",
        password:""
    })
    const handlechange=(e)=>{
     const {value,name}=e.target
     setvalues((pre)=>({
        ...pre,[name]:value
     }))
    }
    const handlesubmit=async(e)=>{
        e.preventDefault()
        
       try{
        if(!values.email||!values.last||!values.first||!values.password){
            return alert("fill all inputs")
        }
        const rees=  await axios.post("https://day6nodejsbe.onrender.com/users/signup",{
            firstname:values.first,
            lastname:values.last,
            email:values.email,
            password:values.password
        },{
            withCredentials:true
        })
        setvalues({
            first:"",
            last:"",
            email:"",
            password:""
        })
        alert(rees.data.message)
        navigate("/login")
       }catch(e){
        alert(e.message)
       }
    }
  return (
    <div className='common'><form>
          <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Firstname</label>
      <input type="name" className="form-control" id="exampleInputPassword1" name='first' value={values.first} onChange={handlechange}/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword2" className="form-label">Lastname</label>
      <input type="name" className="form-control" id="exampleInputPassword2" name='last' value={values.last} onChange={handlechange}/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={values.email} onChange={handlechange}/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword3" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword3" name='password' value={values.password} onChange={handlechange}/>
    </div>
    <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
  </form></div>
  )
}

export default Signup