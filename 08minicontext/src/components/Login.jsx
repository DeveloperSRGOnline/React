import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    // state maintaining 
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    // let's get set user from the UserContextProvider
    const { setUser } = useContext(UserContext)

    

    const handleSubmit = (e) => {
        e.preventDefault()// by default value submit hone par kahi na kahi chale jati hai isliye
        setUser({ username, password })
    }
    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                onClick={handleSubmit}
            >Submit</button>
        </div>
    )
}

export default Login