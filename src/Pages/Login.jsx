import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Usercontext } from '../Context/LoginContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
   const [islogin,setlogin]= useContext(Usercontext)
    const [reset,setreset]=useState(false)
    const [mail,setmail]=useState("")
    const [values,setvalues]=useState({
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
        const rees=await axios.post("https://day6nodejsbe.onrender.com/users/login",{
            email:values.email,
            password:values.password
        },{
            withCredentials:true
        })
        alert(rees.data.message)
        if(rees.data.message=="login successfully"){
               setlogin(true)
        }
        setvalues({
            email:"",
            password:""
        })
       }catch(e){
        console.log(e.message)
       }
    }
   const navigate= useNavigate()
    const handlemail= async(e)=>{
        e.preventDefault()
      try{
        if(!mail){
            return alert("enter the mail")
        }
       const rees= await axios.post("https://day6nodejsbe.onrender.com/users/forgetpassword",{
            email:mail
        },{
            withCredentials:true
        })
        setreset(false)
        setmail("")
        alert(rees.data.message)
      }catch(e){
        alert(e.message)
      }
    }
    const handlesignup=()=>{
        navigate("/signup")
    }
  return (
    <>{
     reset?( <div className='common'><form>
        <h5>Enter your email id to get otp via email</h5>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail5" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail5" aria-describedby="emailHelp"  value={mail} onChange={(e)=>setmail(e.target.value)}/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
   
    <button type="submit" className="btn btn-primary" onClick={handlemail}>Submit</button>  
  </form>
  </div>):( <div className='common'><form>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={values.email} onChange={handlechange}/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={values.password} onChange={handlechange}/>
    </div>
    <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
      <h6 className='forget' onClick={()=>setreset(true)}>forget password</h6>  
      <h6 className='forget' onClick={handlesignup}>SignUp</h6>  
  </form>
  </div>)
    }
   
   </>
  )
}

export default Login