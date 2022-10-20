import React, {useState} from 'react';

const Register = () => {
    const [inputNombre, cambiarInputNombre] = useState('');
    const [inputCorreo, cambiarInputCorreo] = useState('');
    const [inputPass, cambiarInputPass] = useState('');
    const [inputconfPass, cambiarInputconfPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        //ejecutar funcion de envio de formulario
    }

    //cambio de estado para el input del nombre
    const handleInputNombre = (e) => {
        cambiarInputNombre(e.target.value);
    }

    const handleInputCorreo = (e) => {
        cambiarInputCorreo(e.target.value);
    }

    const handleInputPass = (e) => {
        cambiarInputPass(e.target.value);
    }

    const handleInputconfPass = (e) => {
        cambiarInputconfPass(e.target.value);
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
					<label htmlFor="correo">Correo</label>
					<input
						type="text"
						name="correo"
						placeholder="Correo"
						id="correo"
						value={inputCorreo}
						onChange={handleInputCorreo}
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

                <div>
					<label htmlFor="confPass">Confirmar Contraseña</label>
					<input
						type="text"
						name="confPass"
						placeholder="Nombre"
						id="confPass"
						value={inputconfPass}
						onChange={handleInputconfPass}
					/>
				</div>
				<button type="submit">Enviar</button>
			</form>
		</>
	);
}

export default Register;