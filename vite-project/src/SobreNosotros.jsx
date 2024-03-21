import { useEffect, useRef } from 'react';
import './App.css'

export function SobreNosotros() {
const refe = useRef(null);

useEffect(()=>{
  refe.current = Array.from(document.querySelectorAll('.hidden'));
  console.log(refe.current)

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible')
      } else {
        entry.target.classList.remove('visible')
      }
    })
  })


  refe.current.forEach((element) => {
    observer.observe(element)
  })
},[])

  return (
    <section className='sobreNosotros'>
      <section className='ejemm hidden' id='mision'>
      <article className="articulo">
        <h2>Mision</h2>
        <p>Nuestra misión en RenovaTech es promover la gestión responsable de los residuos electrónicos en la República Dominicana, fomentando la conciencia ambiental y facilitando la recolección, reciclaje y reutilización de dispositivos electrónicos obsoletos. Nos comprometemos a proteger el medio ambiente y la salud pública mediante la implementación de programas y proyectos sostenibles que reduzcan el impacto negativo de los residuos electrónicos en nuestra sociedad.</p>
      </article>
      <section className='ejemm-img'>
        <img src="/src/assets/mision.jpeg" alt="" />
      </section>
      </section>
      <section className='ejemm hidden' id='vision'>
      <section className='ejemm-img'>
        <img src="/src/assets/vision.jpeg" alt="" />
      </section>
      <article className="articulo">
        <h2 id='vision'>Vision</h2>
        <p>Nuestra visión es convertirnos en líderes en el campo de la gestión de residuos electrónicos en la República Dominicana, siendo reconocidos por nuestra excelencia en la implementación de soluciones innovadoras y sostenibles. Nos esforzamos por crear un futuro en el que la gestión responsable de los residuos electrónicos sea una práctica estándar en nuestra sociedad, contribuyendo así a un entorno más limpio y saludable para las generaciones futuras.</p>
      </article>
      </section>
      <section className='ejemm hidden' id='valores'>
      <article className="articulo">
        <h2 id='valores'>Valores</h2>
        <ul>
          <li>Sostenibilidad: Nos comprometemos a promover prácticas sostenibles en la gestión de residuos electrónicos, minimizando el impacto ambiental y protegiendo los recursos naturales.</li>
          <li>Responsabilidad: Asumimos la responsabilidad de nuestras acciones y nos esforzamos por cumplir con los más altos estándares éticos en todas nuestras actividades.</li>
          <li>Colaboración: Valoramos la colaboración y el trabajo en equipo, reconociendo que la cooperación entre diferentes actores es fundamental para abordar los desafíos de la gestión de residuos electrónicos de manera efectiva.</li>
          <li>Innovación: Promovemos la innovación en todas nuestras iniciativas, buscando constantemente nuevas y mejores formas de gestionar los residuos electrónicos de manera más eficiente y efectiva.</li>
          <li>Transparencia: Nos comprometemos a ser transparentes en nuestras operaciones y a comunicarnos de manera abierta y honesta con todas las partes interesadas.</li>
        </ul>
      </article>
      <section className='ejemm-img'>
          <img src="/src/assets/valores.jpeg" alt="" />
        </section>
      </section>
    </section>
  )
}
