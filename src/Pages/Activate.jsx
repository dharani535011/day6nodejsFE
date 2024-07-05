import axios from 'axios'
import React, { useState } from 'react'

const Activate = () => {
    const [mail,setmail]=useState("")
    const handlemail= async(e)=>{
        e.preventDefault()
      try{
        if(!mail){
            return alert("enter the mail")
        }
       const rees= await axios.post("http://localhost:3500/users/activate",{
            email:mail
        },{
            withCredentials:true
        })
        setmail("")
        alert(rees.data.message)
      }catch(e){
        alert(e.message)
      }
    }
  return (
    <div><div className='common'><form>
    <h5>Enter your email id to activate your account</h5>
<div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={mail} onChange={(e)=>setmail(e.target.value)}/>
  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
</div>

<button type="submit" className="btn btn-primary" onClick={handlemail}>Activate</button>  
</form>
</div></div>
  )
}

export default Activate