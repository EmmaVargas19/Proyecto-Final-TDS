import {useEffect, useState} from 'react'
import { motion } from 'framer-motion';
import { SobreNosotros } from './SobreNosotros';
import './App.css'

export function Inicio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {img: "src/assets/img1.jpeg", message: "Soy un ejemplo 1", id: 1},
    {img: "src/assets/img2.jpeg", message: "Soy un ejemplo 2" , id: 2},
    {img: "src/assets/img3.jpeg", message: "Soy un ejemplo 3" , id: 3},
    {img: "src/assets/img4.jpeg", message: "Soy un ejemplo 4" , id: 4},
    {img: "src/assets/img5.jpeg", message: "Soy un ejemplo 5" , id: 5}
    ];


useEffect(()=>{
  setInterval(goToNextSlide, 3000);
},[])
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
    </>
  )
}
