import { Link } from "react-router-dom"

export default function Titulo() {
  return (
    <div>
        <div className=" lg:pl-[100px] lg:pr-[50px] 2xl:pl-[300px]">

            <div className=" border w-[311px] border-Gris opacity-20 mx-auto sm:w-[690px] lg:w-[350px]"> </div>

            <div className=" px-[60px] sm:grid sm:grid-cols-4 sm:grid-rows-3 lg:flex lg:flex-col">

                <div className="sm:col-span-2 lg:col-span-1 lg:row-span-1">
                    <h2 className=" py-6 text-Gris font-Ibarra text-[40px] font-bold leading-[42px] tracking-[-0.375] lg:py-7"> Space </h2>
                </div>

                <div className="sm:col-span-2 sm:row-span-3 sm:col-start-3 sm:pt-8  lg:col-span-1 lg:row-span-1">
                    <p className=" text-Gris font-Sans text-[15px] leading-[30px] opacity-80 pb-6 sm:pb-0 lg:mt-[-30px] lg:pb-[20px]"> Este proyecto requirió que construyera una página de destino completamente receptiva según los diseños proporcionados. Utilicé HTML5, junto con CSS Grid y JavaScript para las áreas que requerían interactividad, como el deslizador de planetas. </p>
                </div>

                <div className="sm:col-span-2 sm:row-start-2  lg:col-span-1 lg:row-span-1">
                    <h4 className=" text-Verde font-Sans text-[13px] font-bold leading-[30px]"> Diseño de Interacción / Desarrollo Front-End </h4>
                    <h4 className=" text-Verde font-Sans text-[13px] font-bold leading-[30px]"> HTML / CSS / JS </h4>
                </div>
                    
                <div className="sm:col-span-2 sm:row-start-3  lg:col-span-1 lg:row-span-1">
                    <a href="https://space-web-jhechus.vercel.app" target="_blank" rel="noopener noreferrer">
                        <button className='my-6 w-[175px] h-[48px] border border-Gris border-solid text-[12px] tracking-[2px] uppercase font-Sans sm:my-0 lg:my-7'>
                            Ver Pagina
                        </button>
                    </a>
                </div>
            </div>

            <div className=" border w-[311px] border-Gris opacity-20 mx-auto sm:w-[690px] lg:w-[350px] lg:hidden"> </div>

        </div>
    </div>
  )
}
