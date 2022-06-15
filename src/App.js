import './App.css';
import freeCodeCampLogo from '../src/imagenes/freecodecamp-logo.png';
import Boton from './componenetes/Boton';
import Contador from './componenetes/contador';
import { useState } from 'react';

function App() {
	const [numClicks, setNumberClicks] = useState(0);

	const manejarClick = () => {
		setNumberClicks(numClicks + 1);
	};
	const reiniciarContador = () => {
		setNumberClicks(0);
	};
	return (
		<div className='App'>
			<div className='freecodecamp-logo-contenedor'>
				<img
					className='freecodecamp-logo'
					src={freeCodeCampLogo}
					alt='Logo de freecodecamp'
				/>
			</div>
			<div className='contenedor-principal'>
				<Contador numClicks={numClicks} />
				<Boton
					texto='Click'
					esBotonDeClick={true}
					manejarClick={manejarClick}
				/>
				<Boton
					texto='Reinicio'
					esBotonDeClick={false}
					manejarClick={reiniciarContador}
				/>
			</div>
		</div>
	);
}

export default App;
