import React ,{useState}from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const createCard = () => {
    const [body,setBody] = useState({
        game : "",
        descripcion : "",
        horario : ""
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
    const {game, descripcion, horario} = body
    if(game && descripcion && horario){
        // console.log("si se cargan estos campos")
        await axios.post("http://localhost:4000/crearTarjeta", body)
        .then((res) => {
            alert(res.data.message)
            navigate("/")
        })

        }
    else{
        alert("Por favor rellene los campos")
    }

}
  return (
    <div className='container'>
        <form>
            <label htmlFor='firstname'>Ingresa el videojuego</label>
            <input type="text" id="firstname" onChange={handleChange} name="game" value={body.game}/>

            <label htmlFor='lastname'>Nombre de usuario</label>
            <input type="text" id="lastname" onChange={handleChange} name="descripcion" value={body.descripcion}/>

            <label htmlFor='email'>Email</label>
            <input type="email" id="email"  name='horario' value={body.horario} onChange={handleChange}/>


            <button className="btn" onClick={handleSubmit}>Register</button>

            <button className="btn" onClick={()=>navigate("/")}>Back</button>
        </form>
    </div>
  )
}

export default createCard