import React from 'react';
import '../hojas-de-estilo/Cotnador.css';

function Contador({ numClicks }) {
	return <div className='contador'>{numClicks}</div>;
}
export default Contador;
