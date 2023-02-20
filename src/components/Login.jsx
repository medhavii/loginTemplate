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
        <div className="app">
          <h1>Login!</h1>
            <form onSubmit={submit} className="form">
              
              <input id="jik"
                type="email"
                value={email}
                placeholder="Your Email"
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
              <input id='jak'
                type="password" 
                value={password} 
                placeholder="Password" 
                onChange={(e)=>setPassword(e.target.value)}
                // value={password} 
                required 
              />
              <button id='joe'
              type="Submit" >Login</button>

            </form>
        </div>
    )


}

export default Medhavi