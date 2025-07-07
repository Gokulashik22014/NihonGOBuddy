import React from 'react'
import axios from "axios"
import { useEffect } from 'react'
import { useState } from 'react'
const Home = () => {
    const [message,setMessage]=useState("")
    useEffect(()=>{
        const load=async()=>{
            await axios.get("http://localhost:3001/message").then((res)=>setMessage(res.data.message))
        }
        load()
    },[])
  return (
    <div>{message.length>0?message:"Home"}</div>
  )
}

export default Home