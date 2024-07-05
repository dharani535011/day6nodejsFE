import axios from 'axios'
import React, { useState } from 'react'

const History = () => {
    const [mail,setmail]=useState([])
    useState(async()=>{
       const rees=await axios.get("http://localhost:3500/input/urls")
       setmail(rees.data)
    },[])
  return (
    <div className='common'><table className="table table-striped">
    <thead><tr><td>No.</td><td>urls</td></tr></thead>
    <tbody>{mail.map((val)=>(
        <tr key={val.lengths}><td>{val.lengths}</td><td>{val.random}</td></tr>
    ))}</tbody>
  </table></div>
  )
}

export default History