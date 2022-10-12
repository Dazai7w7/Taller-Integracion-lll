import React from 'react';
import ReactDOM from 'react-dom';
import './sesion/index.css';
import Login from "./sesion/login";
import Register from "./sesion/register";

ReactDOM.render(
	<React.StrictMode>
		<div className="contenedor">
			<Login />
			<br />
			<Register />
		</div>
	</React.StrictMode>,
	document.getElementById('root')
);