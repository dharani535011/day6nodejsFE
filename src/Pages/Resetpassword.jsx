import axios from 'axios'
import React, { useState } from 'react'

const Resetpassword = () => {
    const [values,setvalues]=useState({
         password:"",
        repassword:"",
        otp:"",
       
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
        if(!values.otp||!values.password||!values.repassword){
            return alert("fill all inputs")
        }
       const rees= await axios.post("http://localhost:3500/users/resetpassword",{
            otp:values.otp,
            repass:values.repassword,
            password:values.password
        },{
            withCredentials:true
        })
        setvalues({
           repassword:"",
           otp:"",
            password:""
        })
        alert(rees.data.message)
       }catch(e){
        alert(e.message)
       }
    }
  return (
    <div className='common'><form>
        <h4>Enter your OTP and new password</h4>
        <div className="mb-3">
<label htmlFor="exampleInputPassword3" className="form-label">OTP</label>
<input type="otp" className="form-control" id="exampleInputPassword3" name='otp' value={values.otp} onChange={handlechange}/>
</div>
 <div className="mb-3">
<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
<input type="password" className="form-control" id="exampleInputPassword1" name='password' value={values.password} onChange={handlechange}/>
</div>
<div className="mb-3">
<label htmlFor="exampleInputPassword2" className="form-label">RePassword</label>
<input type="password" className="form-control" id="exampleInputPassword2" name='repassword' value={values.repassword} onChange={handlechange}/>
</div>


<button type="submit" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
</form></div>
  )
}

export default Resetpassword