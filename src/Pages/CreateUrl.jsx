import axios from 'axios'
import React, { useState } from 'react'

const CreateUrl = () => {
    const [mail,setmail]=useState("")
    const [names,setname]=useState(false)
    const [result,setresult]=useState("")
    const handlemail= async(e)=>{
        setresult("")
        e.preventDefault()
      try{
        if(!mail){
            return alert("enter the url")
        }
       const rees= await axios.post("http://localhost:3500/input/url",{
            url:mail
        },{
            withCredentials:true
        })
        console.log(rees.data)
        setmail("")
        setresult(rees.data.message)
        setname(true)
      }catch(e){
        alert(e.message)
      }
    }
  return (
    <>
    {names?(  <div><div className='common'><form>
    <h5>Shorten Url</h5>
<div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">url :</label>
  <input type="url" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={result} />

</div>

<button type="submit" className="btn btn-primary" onClick={()=>setname(false)}>okk</button>  
</form>
</div></div>):(<div><div className='common'><form>
    <h5>Enter your long length Url</h5>
<div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">url :</label>
  <input type="url" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={mail} onChange={(e)=>setmail(e.target.value)}/>

</div>

<button type="submit" className="btn btn-primary" onClick={handlemail}>submit</button>  
</form>
</div></div>)}
  
    </>
  )
}

export default CreateUrl