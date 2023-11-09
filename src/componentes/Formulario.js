import { useState } from "react";

function Formulario() {
    /*declaracion de las variable que necesitamos*/
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [mail, setMail] = useState("");
    const [sexo, setSexo] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [mensajeError, setMensajeError] = useState('');
   
    const handleSubmitNombre = () => { 
        if (nombre.length > 0 && nombre.length <=10){
            return true;
        } else{
            return false;
        }
    }

    const handleSubmitApellido = () => { 
        if (apellido.length > 0 && apellido.length <=20) {
            setMensajeError('Campo obligatorio, no puede contener mas de 20 caracteres');
        } else{
            setMensajeError ('');
        }
    }
    
    const handleSubmitMail = () => {
        if (mail.includes('@') && mail.length >0 && mail.length <= 20) {
        setMensajeError('Inavalid email address entered!');
        } else{
        setMensajeError ('');
        }
    }

    const handleSubmitSexo = () => {
        if (sexo.includes('@') && mail.length >0 && mail.length <= 20) {
            setMensajeError('Inavalid email address entered!');
        } else{
            setMensajeError ('');
        }
    }

    const handleSubmitMensaje = () => {
        if (mensaje.length <= 500) {
        setMensajeError('Inavalid email address entered!');
        } else{
        setMensajeError ('');
        }
    }

    const handleSubmit = (e) => {
        if (handleSubmitNombre && handleSubmitApellido && handleSubmitMail && handleSubmitSexo && handleSubmitMensaje === true){
            setMensajeError('Datos mandados correctamente');
        } else{
        setMensajeError ('Los campos son incorrectos');


        }
    }

    
    return (
      <form onSubmit={(e) => (e.preventDefault())}> 
        <h1>Formulario de contacto</h1>
        <p>Nombre: </p>
        <p onSubmit={handleSubmitNombre}></p>
        <input value={nombre}
            onChange={() => setNombre(nombre.target.value)}/>

        <p>Apellido: </p>
        <p onSubmit={handleSubmitApellido}></p>
        <input value={apellido}
            onChange={() => setApellido(apellido.target.value)}/>

        <p>Mail: </p>
        <p onSubmit={handleSubmitMail}></p>
        <input value={mail}
            onChange={() => setMail(mail.target.value)}/>

        <p>Sexo: </p>
        <p onSubmit={handleSubmitSexo}></p>
        <input value={sexo}
            onChange={() => setSexo(sexo.target.value)}/>

        <p>Mensaje: </p>
        <p onSubmit={handleSubmitMensaje}></p>
        <input value={mensaje}
            onChange={() => setMensaje(mensaje.target.value)}/>

        <br></br> <br></br>
         
         <button type="submit">Submit</button>

         
       
       {mensajeError && <p>{mensajeError}</p>}
      </form>
    );
  }
  
  export default Formulario;