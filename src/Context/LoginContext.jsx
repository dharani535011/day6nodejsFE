import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Usercontext=createContext()

const Logincontext=({children})=>{
   const [islogin,setlogin]= useState(false)
   
   useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.post('http://localhost:3500/users/checklogin',{},{withCredentials:true});
        if (response.data.message === "okk") {
          setlogin(true);
        }
      } catch (error) {
        setlogin(false);
      }
    };
    checkLoginStatus();
  }, []);
   
   return(<>
   <Usercontext.Provider value={[islogin,setlogin]}>
    {children}
   </Usercontext.Provider>
    </>)
}
export default Logincontext