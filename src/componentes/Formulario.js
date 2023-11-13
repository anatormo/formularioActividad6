import { useState, useCallback } from "react";
import'./estilos.css';

function Formulario() {
    /*declaracion de las variable que necesitamos*/
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [mail, setMail] = useState("");
    const [sexo, setSexo] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [terminos, setTerminos] = useState();
    
    /*creamos la funcion de handleSubmit: manejo del envio, utilizando el hook useCallback: usar devolucion de llamada,
    para saltarse la renderizacion de los componentes y guardar su valor así en el return evaluara las condiciones */

    const handleSubmit = useCallback ((e) => {
        e.preventDefault();

        /*condicion para el nombre */
        if (nombre.length === 0 || nombre.length > 10){
            return alert('Nombre es campo obligatorio, máximo 10 caractéres');
        }

        /*condicion para el apellido */
        if (apellido.length === 0 || apellido.length > 20) {
            return alert ('Apellido es campo obligatorio, máximo 20 caracteres');
        }

        /*condicion para el mail */
        if (!mail.includes('@') || !mail.includes('.') || mail.length === 0 || mail.length > 20) {
            return alert ('Introduce un correo electrónico válido');
        }

        /*condicion para el mensaje */
        if (mensaje.length > 500 ) {
            return alert ('El campo contiene más de 500 caractéres');
        }

        /*condicion para los terminos */
        if (!terminos) {
            return alert('Debes aceptar los términos y condiciones.');
          }
    });
    
    return (
    
      <form className = "formulario" onSubmit={handleSubmit}> 
        <h1 >Formulario de contacto</h1>
        <p>Nombre: <input value={nombre}
            onChange={(e) => setNombre(e.target.value)}/>
        </p>

        <p>Apellido: <input value={apellido}
            onChange={(e) => setApellido(e.target.value)}/>
        </p>

        <p>Mail:    <input value={mail}
            onChange={(e) => setMail(e.target.value)}/>
        </p>

        <p>Sexo: <select name="sexo" value={sexo} onChange={(e) => setSexo(e.target.value)}>
            <option value="Masculino"></option>  
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            </select>
        </p>

        <p>Mensaje: <textarea value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}/><br></br>
            <p> Te quedan {500 - mensaje.length} caracteres.</p>
        </p>
        <br></br> 
        <label>
        <input type="checkbox"  checked={terminos} 
        onChange={(e) => setTerminos(e.target.value)} />
        Acepto los términos y condiciones
      </label>
      <br></br> <br></br> 
         <button className = "button" type="submit">Submit</button>
      </form>
    );
} 
  export default Formulario;