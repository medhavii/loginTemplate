import React from "react";
import { useState } from "react";


const Medhavi = () => {
    const [email, setEmail]= useState(" ")
    const [password, setPassword]=useState(" ")

    const submit = (e)=>{
        e.preventDefault()

        const obj={
            "email":email,
            "password":password
        }

        console.log(obj)

        setEmail("")
        setPassword("")
    }

    return(
        <div>
            <form onSubmit={submit}>
              
              <input
                type="email"
                value={email}
                placeholder="Your Email"
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
              <input 
                type="text" 
                value={password} 
                placeholder="password" 
                onChange={(e)=>setPassword(e.target.value)}
                required 
              />
              <button type="Submit" >Login</button>

            </form>
        </div>
    )


}

export default Medhavi