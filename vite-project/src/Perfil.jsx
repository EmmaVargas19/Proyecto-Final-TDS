import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom
import { contextName } from './context/MyContext.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Perfil() {
    const { user, password,setPassword, confirmPassword, setConfirmPassword, setNewPassword,setLogged, localStorageDelete, localStorageGet,localStorageSavePassword, localStorageFoto,toastifye, toastifys,foto ,setFoto } = useContext(contextName);
    const navigate = useNavigate(); // Utiliza useNavigate para obtener el objeto de navegación

    const handleDeleteProfile = () => {
        localStorageDelete();
        setLogged(false);
        // Navega a la página de inicio
        navigate("/");
        // Muestra un toastify de usuario eliminado
        toastifye("Usuario eliminado");
    }

    function cambiarPass(){
        if (localStorage.getItem(user) !== null) {
            if (localStorageGet().password === password && password === confirmPassword) {
                localStorageSavePassword()
                toastifys("Contraseña cambiada exitosamente");
            } else {
                toastifye("Contraseña incorrecta");
            }
        } else {
            toastifye("Usuario no encontrado");
        }
    }
    console.log(cambiarPass)
    return (
        <div>
            <p>Perfil</p>
            <p>Foto de perfil: {localStorageGet().foto && <img src={foto} alt="Foto de perfil" width="800" height="300"/>}</p>
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
            <p>Nombre: {localStorageGet().nombre}</p>
            <p>Nombre de usuario: {user}</p>
            <p>Cambiar Contraseña</p>
            <input type="password" placeholder="Contraseña Nueva" onInput={(e)=> setNewPassword(e.target.value)}/>
            <br />
            <input type="password" placeholder="Actual contraseña" onInput={(e)=> setPassword(e.target.value)}/>
            <br />
            <input type="password" placeholder="Repetir contraseña actual" onInput={(e)=> setConfirmPassword(e.target.value)}/>
            <br />
            <button onClick={cambiarPass}>Guardar</button>
            <button onClick={handleDeleteProfile}>Borrar perfil</button>
            <h2>Dispositivos donados</h2>
            <div className='gridejem'>
                {localStorageGet().donados.map((e) => {
                    return (
                        <div key={e.id} className='card'>
                            {localStorageGet().foto && <img src={foto} alt="Foto de perfil" width="50" height="50" />}
                            <p>Nombre: {e.nombre}</p>
                            <p>Nombre del negocio: {e.negocio}</p>
                            <p>Direccion del negocio: {e.direccion}</p>
                            <p>Dispositivo: {e.dispositivo}</p>
                            <p>Modelo: {e.modelo}</p>
                        </div>
                    )
                })}
            </div>
        <ToastContainer />
        </div>
    );
}
