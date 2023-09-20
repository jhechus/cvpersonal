import Header from "../Components/Header"
import Juntos from "../Components/Juntos"
import Footer from "../Components/Footer"

import Spacecel from '../assets/images/portfolio/mobile/mobile-space.jpeg'
import Spacetablet from '../assets/images/portfolio/tablet/tablet-space.jpeg'
import Spacedesk from '../assets/images/portfolio/desktop/desktop-space.png'

import { Link, useLocation } from 'react-router-dom'
import { useEffect } from "react"

export default function Portfolio() {

    useEffect(() => {
        // Realiza el scroll hacia la parte superior al montar el componente
        window.scrollTo(0, 0);
      }, []);

  return (
    <div>
      <Header />

      <h2 className=" pt-6 text-center text-Gris font-Ibarra text-[40px] font-bold leading-[42px] tracking-[-0.375px]"> Proyectos... </h2>

        <div className="sm:grid sm:grid-cols-2">
            <picture>
                <source media='(max-width: 639px)' srcSet={Spacecel}  />
                <source media='(max-width: 1000px)' srcSet={Spacetablet}  />
                <source media='(min-width: 1001px)' srcSet={Spacedesk}  />
                <img className='object-cover mx-auto pt-10 pb-8 sm:pt-[146px] lg:pt-[94px]' src={Spacecel} alt="Fondo" />
            </picture>

            <div className=" sm:pt-[94px] lg:h-[500px] lg:my-auto">

                <div className=" border border-Gris w-[311px] opacity-[0.15] mx-auto lg:w-[350px] lg:mx-10"> </div>

                <div className="px-[70px] sm:px-10">
                    <h2 className=" py-6 text-Gris font-Ibarra text-[40px] font-bold leading-[42px] tracking-[-0.375px]"> Space web </h2>
                    <p className=" text-Gris font-Sans text-[15px] leading-[30px] opacity-80 lg:w-[350px] 2xl:w-[600px]"> Este proyecto me requirió construir una página de inicio completamente adaptable a los diseños proporcionados. Utilicé HTML5, junto con CSS Grid y JavaScript para las áreas que requerían interactividad, como las diferentes vistas entre planetas, equipos y tecnologias. </p>

                    <Link to={'/portfolio/space'}> 
                        <button className='my-6 w-[175px] h-[48px] border border-Gris border-solid text-[12px] tracking-[2px] uppercase font-Sans sm:my-9'>
                            Ver Proyecto 
                        </button>
                    </Link>
                </div>

                <div className=" border border-Gris w-[311px] opacity-[0.15] mx-auto lg:w-[350px] lg:mx-10"> </div>

            </div>
        </div>
        
        <div className=" sm:py-[96px]">
            <Juntos />
        </div>

        <Footer />


    </div>
  )
}
