import {useEffect, useState, useContext} from 'react'
import { motion } from 'framer-motion';
import { SobreNosotros } from './SobreNosotros';
import { contextName } from './context/MyContext.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

export function Inicio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {user, password, logged, toastifys, showedToast, setShowedToast, localStorageGet, nombre, foto} = useContext(contextName)
  function calculateLocalStorageSize() {
    let totalSize = 0;
    // Iterar sobre cada clave en localStorage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        // Calcular el tamaño aproximado de la clave y el valor
        const itemSize = (key.length + value.length) * 2; // Consideramos que cada carácter ocupa 2 bytes

        // Sumar al tamaño total
        totalSize += itemSize;
    }

    // Devolver el tamaño total en bytes
    return totalSize;
}
/* localStorage.clear(); */
// Llamamos a la función para obtener el tamaño aproximado de localStorage
const localStorageSize = calculateLocalStorageSize();

// Convertimos el tamaño a kilobytes (KB) para mayor legibilidad
const localStorageSizeKB = localStorageSize / 1024;
console.log("Tamaño aproximado de localStorage:", localStorageSizeKB.toFixed(2), "KB");
  const images = [
    {img: "src/assets/img1.png", message: "Transformando dispositivos olvidados en oportunidades renovadas.", id: 1},
    {img: "/assets/img2.jpeg", message: "Unidos por un futuro más sostenible y tecnológicamente inclusivo." , id: 2},
    {img: "/assets/img3.jpeg", message: "Cada dispositivo cuenta: ¡Únete a nuestra misión de renovación!" , id: 3},
    {img: "/assets/img4.jpeg", message: "Innovación con propósito: ¡Juntos, podemos hacer la diferencia!" , id: 4},
    {img: "src/assets/carrusel-5.png", message: "Deja tu huella digital en el camino hacia la renovación tecnológica." , id: 5}
    ];


useEffect(()=>{
  setInterval(goToNextSlide, 3000);
},[])

useEffect(()=>{
  if(logged && !showedToast) {
  toastifys(`Sesion iniciada exitosamente, bienvenido a RenovaTech ${user}`)
  setShowedToast(true)
  }
},[user, logged, toastifys])


console.log(nombre, logged, user, password)
const goToNextSlide = () => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    };
  
    const goToPrevSlide = () => {
      setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };


  return (
    <>
    <div className='carousel'>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')
    </style>
      <motion.div
        className="slide-container"
        style={{
          width: `${images.length * 100}%`,
          height: `100%`,
          marginLeft: `${-currentIndex * 100}%`
        }}
        transition={{ duration: 0.5 }}
      >
        {images.map((obj) => (
          <div key={obj.id} className="slide">
            <motion.img
              src={obj.img}
              title={`Este es el slide con el mensaje ${obj.message}`}
              className="slide-image"
              style={{
                width: `100%`,
                height: `100%`,
                opacity: 1// Cambiado a 0.5 para resaltar la imagen activa
              }}
              transition={{ duration: 0.5 }}
            />
            <p className="slide-message">{obj.message}</p>
          </div>
        ))}
      </motion.div>
      <button onClick={goToPrevSlide} className="prev-button">◀</button>
      <button onClick={goToNextSlide} className="next-button">▶</button>
    </div>
    <SobreNosotros/>
    <ToastContainer />
    </>
  )
}
