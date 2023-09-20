import yo from '../assets/images/yo.jpeg'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
        <div className='sm:grid sm:grid-cols-2'>

            <img 
            className=' w-[311px] h-[346px] object-cover mx-auto mt-[80px] mb-[30px] sm:w-[281px] sm:h-[600px] lg:w-[540px] lg:h-[600px] sm:mx-0 sm:ml-[50px] lg:mx-auto' 
            src={yo} 
            alt="yo" 
            />

            <div className=' pt-[80px] lg:pr-[250px]'>

                <div className=' border border-Gris opacity-[0.15] w-[311px] h-[1px] mx-auto'> </div>

                <h2 
                    className=' py-7 text-center text-Gris font-Ibarra text-[40px] font-bold leading-[42px] tracking-[-0.357]' 
                    id='sobre_mi'> 
                    Sobre mi
                </h2>

                <p className=' text-Gris font-Sans text-base leading-[30px] px-8 opacity-[0.8] sm:leading-[24px]'> 
                Soy un desarrollador web que busca construir una carrera como freelancer y estoy emocionado por la oportunidad de trabajar en proyectos interesantes. Mi enfoque se centra en crear código HTML accesible, emplear prácticas modernas de CSS y escribir JavaScript limpio. A la hora de trabajar en proyectos JavaScript, prefiero utilizar React. Estoy ubicado en Mexico, pero me encanta trabajar de forma remota. Cuando no estoy frente a la computadora, me encontrarás disfrutando del aire libre. Me encantaría que echaras un vistazo a mi trabajo y estoy emocionado por la oportunidad de colaborar contigo en tu próximo proyecto. </p>

                <Link to={'/portfolio'}>
                    <button className=' w-[202px] h-[48px] text-Gris text-center border border-Gris border-solid mt-6 ml-[30px]'> Ver Portafolio </button>
                </Link>

                <div className=' border border-Gris opacity-[0.15] w-[311px] h-[1px] mx-auto my-[50px]'> </div>

            </div>

        </div>
    </div>
            )
            }
