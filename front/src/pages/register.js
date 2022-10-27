import React ,{useState}from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const [body,setBody] = useState({
        name : "",
        username : "",
        email : "",
        password : "",
        repassword: ""
    })
    const navigate = useNavigate()

const handleChange = (e)=>{
    const { name , value} = e.target;
    setBody((preve)=>{
        return{
            ...preve,
            [name] : value
        }
    })
}

const handleSubmit = async(e)=>{
    e.preventDefault();
        console.log(body)
    const {name,username,email,password,repassword} = body
    if(name && username && email && password){
        if(password === repassword){
            console.log("si se cargan estos campos")
            await axios.post("http://localhost:4000/register", body)
            .then((res) => {
                alert(res.data.message)
                navigate("/login")

            })

        }
        else{
            alert("check Your Password")
        }
    }
    else{
        alert("Enter the Required Fields")
    }

        

}
  return (
    <div className='container'>
        <form>
            <label htmlFor='firstname'>Nombre Completo</label>
            <input type="text" id="firstname" onChange={handleChange} name="name" value={body.name}/>

            <label htmlFor='lastname'>Nombre de usuario</label>
            <input type="text" id="lastname" onChange={handleChange} name="username" value={body.username}/>

            <label htmlFor='email'>Email</label>
            <input type="email" id="email"  name='email' value={body.email} onChange={handleChange}/>

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name='password' value={body.password} onChange={handleChange}/>
            
            <label htmlFor="re-password">Re-Password</label>
            <input type="password" id="re-password" name='repassword' value={body.repassword} onChange={handleChange}/>

            <button className="btn" onClick={handleSubmit}>Register</button>

            <button className="btn" onClick={()=>navigate("/login")}>Login</button>
        </form>
    </div>
  )
}

export default Register