import Header from "../Components/Header"
import SpaceF from '../assets/images/detail/mobile/mobile-spacehero.png'
import Tablespace from '../assets/images/detail/tablet/tablet-spacehero.jpeg'
import Desktopspace from '../assets/images/detail/desktop/desktop-spacehero.jpeg'

import Juntos from "../Components/Juntos"
import Footer from "../Components/Footer"

import Titulo from "../Components/Titulo"
import Description from "../Components/Description"

import { useEffect } from "react"

export default function Space() {

  useEffect(() => {
    // Realiza el scroll hacia la parte superior al montar el componente
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />

        <picture>
            <source media='(max-width: 639px)' srcSet={SpaceF}  />
            <source media='(max-width: 1000px)' srcSet={Tablespace}  />
            <source media='(min-width: 1001px)' srcSet={Desktopspace}  />
            <img className='object-cover mx-auto pt-10 pb-8 sm:pt-[94px] lg:pt-[94px]' src={SpaceF} alt="Fondo" />
        </picture>



        <div className="lg:grid lg:grid-cols-2 lg:grid-rows-1">

        <Titulo />

        <Description />

        </div>

        <div className="pt-[64px]">

            <div className=" border w-[326px] border-Gris opacity-20 mx-auto sm:w-[690px] lg:w-[1110px]"> </div>

            <div className=" grid grid-cols-2 h-[146px]">
                
                <div className="my-auto pl-[50px] sm:pl-[100px] lg:pl-[250px] 2xl:pl-[500px]">
                    <img src="" alt="" />
                    <h3 className=" text-Gris font-Ibarra text-[25px] leading-[36px] tracking-[-0.286px]"> Proximamente </h3>
                    <h5 className=" text-Gris font-Sans text-[15px] leading-[30px] opacity-50"> Nuevos Proyectos </h5>
                </div>

                <div className=" my-auto pr-[40px] sm:pr-[100px] lg:pr-[250px] 2xl:pr-[500px] text-right">
                    <img src="" alt="" />
                    <h3 className=" text-Gris font-Ibarra text-[25px] leading-[36px] tracking-[-0.286px]"> Tu proyecto </h3>
                    <h5 className=" text-Gris font-Sans text-[15px] leading-[30px] opacity-50"> Puede ser el siguiente </h5>
                </div>

            </div>

            <div className=" border w-[326px] border-Gris opacity-20 mx-auto sm:w-[690px] lg:w-[1110px]"> </div>

            <div className="absolute border h-[146px] border-Gris opacity-20 w-[1px] mx-auto right-0 left-0 mt-[-146px] "> </div>

        </div>

        <Juntos />

        <Footer />

    </div>
  )
}
