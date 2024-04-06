import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom
import { contextName } from './context/MyContext.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Perfil() {
    const { user,setUser ,password,setPassword, confirmPassword, setConfirmPassword, setNewPassword,setLogged, localStorageDelete, localStorageDonados, localStorageGet,localStorageSavePassword, localStorageFoto,toastifye, toastifys,foto ,setFoto } = useContext(contextName);
    const [dispositivosDonados, setDispositivosDonados] = useState(localStorageGet().donados || []); // Crea un estado para almacenar los dispositivos donados (inicialmente vacío
    const navigate = useNavigate(); // Utiliza useNavigate para obtener el objeto de navegación

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
                <p>Estado: {e.statusDonacion}</p>
                <button onClick={()=>borrar(e.id)}>borrar</button>
            </div>
        )
    });
    return (
        <div className='perfil'>
            <h2>Perfil</h2>
            <p>Foto de perfil:</p>
            {foto ? <img src={foto} alt="Foto de perfil" width="200" height="300"/> : <img src={localStorageGet()  && localStorageGet().foto} alt="Foto de perfil" width="800" height="300"/>}
            <input type="file" onChange={(event) => {
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
            <button onClick={localStorageFoto}>Guardar foto</button>
            <p>Nombre: {localStorageGet()  && localStorageGet().nombre}</p>
            <p>Nombre de usuario: {user}</p>
            <p>Cambiar Contraseña</p>
            <input type="password" placeholder="Contraseña Nueva" onInput={(e)=> setNewPassword(e.target.value)}/>
            <br />
            <input type="password" placeholder="Actual contraseña" onInput={(e)=> setPassword(e.target.value)}/>
            <br />
            <input type="password" placeholder="Repetir contraseña actual" onInput={(e)=> setConfirmPassword(e.target.value)}/>
            <br />
            <button onClick={cambiarPass}>Guardar</button>
            <button onClick={handleDeleteProfilePop}>Borrar perfil</button>
            {borrarPerfil && <div><p>¿Estás seguro de que deseas borrar tu perfil?</p><button onClick={handleDeleteProfile}>Sí</button><button onClick={handleDeleteProfilePop}>No</button></div>}
            <h2>Dispositivos donados</h2>
            <div className='gridejem'>
                {mapeoDonados}
                </div>
        <ToastContainer />
        </div>
    );
}
