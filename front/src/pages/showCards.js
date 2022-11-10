import React, { useState } from 'react';
import axios from 'axios';


const tarjetas = async (e) => {
    const [body, setBody] = useState({
        game: "",
        descripcion: "",
        horario:
    })

    e.preventDefault();
        console.log(body)
    const {game, horario, descripcion} = body
    await axios.get("http://localhost:4000/mostrarTarjeta", body)

return(
    <>
    <div className="container">   
         { tarjetas.map(item => (
          <div key={item._id}>
            <div>
               <p>Videojuego: {item.game}</p>
               <p>Horario: {item.horario}</p>  
               <p>Descripción: {item.descripcion}</p>
            </div>
          
          </div>

        ))} 
    </div>
    </>
)
}