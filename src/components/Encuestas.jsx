import React from 'react';
function Encuestas({ encuestas }) {
    return (
        <div>
            <h2>Encuestas Disponibles</h2>
            <ul>
        {encuestas.map(encuesta => (
            <li key={encuesta.id}>
                {encuesta.pregunta}
                {encuesta.opciones.map(opcion => (
                    <><br/><input type="radio" value={opcion} name={encuesta.pregunta}/>
                        {opcion}
                    </>
                ))}    
            </li>
           
        ))}
        </ul>
    </div>
    );
}
export default Encuestas;
