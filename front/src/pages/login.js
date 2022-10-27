import React, { useContext, useState } from 'react'
import axios from 'axios'
// import data from '../data'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const [body, setBody] = useState({
        username: "",
        repassword: ""
    })
    // const { info } = useContext(data)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBody((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

	const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/login", body)
            .then((res) => {
                alert(res.data.message)
                // info(res.data.body)
				console.log(body)
                navigate("/")
            })
    }

    

    return (
        <div className='container'>
            <form>
                <label htmlFor='username'>Nombre de usuario</label>
                <input type="text" id="email" name='username' value={body.username} onChange={handleChange} />

                <label htmlFor="repassword">Password</label>
                <input type="password" id="password" name='repassword' value={body.repassword} onChange={handleChange} />

                <div className='btn-container'>
                    <button className="btn" onClick={handleSubmit}>Login</button>
                    <button className="btn" onClick={()=>navigate("/register")}>Register</button>
                </div>
            </form>
        </div>
    )
}

export default Login