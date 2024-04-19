import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom
import { contextName } from './context/MyContext.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './perfil.css';

export function Perfil() {
    const { user,setUser ,password,setPassword, confirmPassword, setConfirmPassword, setNewPassword,setLogged, localStorageDelete, localStorageDonados,localStorageDonados2 ,localStorageGet,localStorageSavePassword, localStorageFoto,toastifye, toastifys,foto ,setFoto, localStorageDonados3} = useContext(contextName);
    const [dispositivosDonados, setDispositivosDonados] = useState(localStorageGet().donados || []); // Crea un estado para almacenar los dispositivos donados (inicialmente vacío
    const [donaciones, setDonaciones] = useState(localStorageGet().donaciones || []); // Crea un estado para almacenar las donaciones (inicialmente vacío)
    const [ongValue, setOngValue] = useState(localStorageGet().ongValue || false); // Crea un estado para almacenar el valor de la ong seleccionada en el formulario de donación
    const navigate = useNavigate(); // Utiliza useNavigate para obtener el objeto de navegación
    console.log("esto son los dispositivos donados a la ong")
    console.log(donaciones)
    const [borrarPerfil, setBorrarPerfil] = useState(false); // Crea un estado para controlar la visibilidad del mensaje de confirmación de eliminación de perfil
    function handleDeleteProfilePop(){
        setBorrarPerfil(!borrarPerfil);
    }
    const handleDeleteProfile = () => {
        localStorageDelete();
        setLogged(false);
        localStorage.removeItem("preU");
        localStorage.removeItem("preL");
        setUser("");
        setPassword("");
        // Navega a la página de inicio
        navigate("/");
        // Muestra un toastify de usuario eliminado
        toastifye("Usuario eliminado");
    }

    function cambiarPass(){
        if (localStorage.getItem(user) !== null) {
            if (localStorageGet() && localStorageGet().password === password && password === confirmPassword) {
                localStorageSavePassword()
                toastifys("Contraseña cambiada exitosamente");
            } else {
                toastifye("Contraseña incorrecta");
            }
        } else {
            toastifye("Usuario no encontrado");
        }
    }

    function borrar(id){
        const newDonados = dispositivosDonados.filter((e) => e.id !== id);
        setDispositivosDonados(newDonados);
        localStorageDonados(newDonados);
    }
    
    console.log(cambiarPass)


    function aceptar(donante, id){
        const traer = localStorage.getItem(donante);
        const traerparse = JSON.parse(traer);
        const resultado = traerparse.donados.map((e)=> id === e.id ? {...e, statusDonacion: "aceptado"} : e);
        console.log("Esto es resultado")
        console.log(resultado)
        const ejem = donaciones.map((e)=> e.donante === donante ? {...e, donacion: resultado} : e);
        console.log("Esto es ejem")
        console.log(ejem)
        setDonaciones(ejem)
        localStorageDonados2(donante, resultado);
        localStorageDonados3(ejem);
    }

    function rechazar(donante, id){
        const traer = localStorage.getItem(donante);
        const traerparse = JSON.parse(traer);
        const resultado = traerparse.donados.map((e)=> id === e.id ? {...e, statusDonacion: "rechazado"} : e);
        const ejem = donaciones.map((e)=> e.donante === donante ? {...e, donacion: resultado} : e);
        setDonaciones(ejem)
        localStorageDonados2(donante, resultado);
        localStorageDonados3(ejem);
    }
    const mapeoDonados = dispositivosDonados.map((e) => {
        return (
            <div key={e.id} className='card'>
                {foto ? <img src={foto} alt="Foto de perfil" width="50" height="50"/> : <img src={localStorageGet() && localStorageGet().foto} alt="Foto de perfil" width="50" height="50"/>}
                <p>Nombre: {localStorageGet() 
                 && localStorageGet().nombre}</p>
                <p>Nombre del negocio: {e.negocio}</p>
                <p>Direccion del negocio: {e.direccion}</p>
                <p>Dispositivo: {e.dispositivo}</p>
                <p>Descripcion: {e.descripcion}</p>
                <p>Modelo: {e.modelo}</p>
                <p>Donacion a la ong: {e.ong}</p>
                <p>Estado: <span style={{color: e.statusDonacion === "aceptado" ? "green" : "red"}}>
                {e.statusDonacion}
                </span>
                </p>
                <button onClick={()=>borrar(e.id)}>borrar</button>
            </div>
        )
    });

    const donacionesRecibidas = donaciones.flatMap((donante) => (
        donante.donacion.map((donacion) => (
            <div key={donacion.id}>
                <p>Donante: {donante.donante}</p>
                <p>Negocio: {donacion.negocio}</p>
                <p>Direccion: {donacion.direccion}</p>
                <p>Dispositivo: {donacion.dispositivo}</p>
                <p>Descripcion: {donacion.descripcion}</p>
                <p>Modelo: {donacion.modelo}</p>
                <p>Donacion a la ong: {donacion.ong}</p>
                <p>Estado: <span style={{color: donacion.statusDonacion === "aceptado" ? "green" : "red"}}>
                {donacion.statusDonacion}
                </span>
                </p>
                <button onClick={()=> aceptar(donante.donante, donacion.id)}>Aceptar</button>
                <button onClick={()=> rechazar(donante.donante, donacion.id)}>Rechazar</button>
            </div>
        ))
    ));
    
    return (
        <div className='perfil'>
            <div className='banner'>
                <h2>Este es su perfil</h2>
                <p>Aquí podrás ver sus datos y donaciones</p>
            </div>
            <div className="perfil-usuario">
                <div className="image-fondo">
                    <img src="src/img/foto-dondo-perfil.png" alt="" />
                </div> 
                {foto ? <img src={foto}  alt="Foto de perfil" width="200" height="300" className='foto-perfil-ususario'/> : <img src={localStorageGet()  && localStorageGet().foto} className='foto-perfil-ususario' alt="Foto de perfil" width="800" height="300"/>}
                <label className="input-container">
                    <input type="file" className='archivo' onChange={(event) => {
                        const archivo = event.target.files[0];
                        if (archivo) {
                            const reader = new FileReader();
                            reader.onload = (e) => {
                                const fotoDataURL = e.target.result;
                                setFoto(fotoDataURL);
                            };
                            reader.readAsDataURL(archivo);
                        }
                    }} />
                    <i className="bx bxs-camera"></i>
                </label>
                <button onClick={localStorageFoto} id='guardar-foto'>Guardar foto</button>
                <div className="credenciales">
                    <h2 className='usuario'>Perfil</h2>
                    <p className='usuario'><b>Nombre:</b> {localStorageGet()  && localStorageGet().nombre}</p>
                    <p className='usuario'><b>Nombre de usuario:</b> {user}</p>
                    <p className='usuario' ><b>Cambiar Contraseña</b></p>
                    <i className="bx bx-lock-alt"></i>
                    <input type="password" placeholder="Contraseña Nueva" onInput={(e)=> setNewPassword(e.target.value)}/>
                    <br />
                    <input type="password" placeholder="Actual contraseña" onInput={(e)=> setPassword(e.target.value)}/>
                    <br />
                    <input type="password" placeholder="Repetir contraseña actual" onInput={(e)=> setConfirmPassword(e.target.value)}/>
                    <br />
                    <div className="botones-credenciales">
                        <button onClick={cambiarPass} className="guardar-perfil-1">Guardar</button>
                        <button onClick={handleDeleteProfilePop} className="guardar-perfil-1">Borrar perfil</button>
                    </div>
                    {borrarPerfil && <div><p>¿Estás seguro de que deseas borrar tu perfil?</p><button onClick={handleDeleteProfile} className='guardar-perfil-2'>Sí</button><button onClick={handleDeleteProfilePop} className='guardar-perfil-2'>No</button></div>}
                </div>
               
                <h2 id='ver-dispositivos-donados'>Dispositivos donados</h2>
                <div className='gridejem-perfil'>
                    {ongValue ? donacionesRecibidas : mapeoDonados}
                    </div>
             <ToastContainer />
            </div>
        </div>
    );
}
