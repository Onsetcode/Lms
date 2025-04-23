// import React from 'react'

import toast from "react-hot-toast";
import { useAuth } from "../context/AutoProvider"

function Logout() {
  const [authUser, setAuthUser]=useAuth()
  const handlelogout=()=>{
  try {
    setAuthUser({
      ...authUser,
      user:null
    })
    localStorage.removeItem("Users");
    toast.success("logout successfully");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
   
    
  } catch (error) {
    toast.error("erroe : "+error.message)
  }
  }
  return (
    
    <div>
      <button className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer" onClick={handlelogout}>
        
        logout</button>
    </div>
  )
}

export default Logout
