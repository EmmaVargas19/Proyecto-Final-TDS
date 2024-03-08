import {useEffect, useState, useContext} from 'react'
import { motion } from 'framer-motion';
import { SobreNosotros } from './SobreNosotros';
import { contextName } from './context/myContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

export function Inicio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {user, password, logged, toastifys, showedToast, setShowedToast} = useContext(contextName)
  const images = [
    {img: "src/assets/img1.jpeg", message: "Transformando dispositivos olvidados en oportunidades renovadas.", id: 1},
    {img: "src/assets/img2.jpeg", message: "Unidos por un futuro más sostenible y tecnológicamente inclusivo." , id: 2},
    {img: "src/assets/img3.jpeg", message: "Cada dispositivo cuenta: ¡Únete a nuestra misión de renovación!" , id: 3},
    {img: "src/assets/img4.jpeg", message: "Innovación con propósito: ¡Juntos, podemos hacer la diferencia!" , id: 4},
    {img: "src/assets/img5.jpeg", message: "Deja tu huella digital en el camino hacia la renovación tecnológica." , id: 5}
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

console.log(logged, user, password)
const goToNextSlide = () => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    };
  
    const goToPrevSlide = () => {
      setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

  return (
    <>
    <div className='carousel'>
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
              alt={`Slide ${obj.id}`}
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
