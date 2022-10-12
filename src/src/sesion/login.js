import React, {useState} from 'react';

const Login = () => {
    const [inputNombre, cambiarInputNombre] = useState('');   
    const [inputPass, cambiarInputPass] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        //ejecutar funcion de envio de formulario
    }

    //cambio de estado para el input del nombre
    const handleInputNombre = (e) => {
        cambiarInputNombre(e.target.value);
    }

    const handleInputPass = (e) => {
        cambiarInputPass(e.target.value);
    }


    return (
		<>
			<form action="" onSubmit={handleSubmit} className="formulario">
				<div>
					<label htmlFor="nombre">Nombre</label>
					<input
						type="text"
						name="nombre"
						placeholder="Nombre"
						id="nombre"
						value={inputNombre}
						onChange={handleInputNombre}
					/>
				</div>

                <div>
					<label htmlFor="pass">Contraseña</label>
					<input
						type="text"
						name="pass"
						placeholder="Pass"
						id="pass"
						value={inputPass}
						onChange={handleInputPass}
					/>
				</div>

				<button type="submit">Enviar</button>
			</form>
		</>
	);
}

export default Login;