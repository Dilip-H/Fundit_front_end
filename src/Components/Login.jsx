import React, { useState } from 'react'
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        axios.post("http://localhost:4000/login", {
            email,
            password
        }, {
            withCredentials: true
        }).then(res => {
            console.log(res)
        })
    }

    function handleUser() {
        axios.get('http://localhost:4000/user', { withCredentials: true }).then(res => console.log(res))
    }

    return (
        <>
            <form>
                <input placeholder="email" type="text" onChange={e => setEmail(e.target.value)} value={email} />
                <input placeholder="password" type="password" onChange={e => setPassword(e.target.value)} value={password} />
                <button onClick={handleSubmit}>login</button>
            </form>
            <button onClick={handleUser}>get user</button>
        </>
    )
}

export default Login
