import arrowdown from '../assets/images/icons/down-arrows.svg'
import { Link } from 'react-router-dom';

export default function Presentation() {

    function scrollToSobreMi(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
      
        const sobreMiElement = document.getElementById('sobre_mi');
      
        if (sobreMiElement) {
          sobreMiElement.scrollIntoView({ behavior: 'smooth' });
        }
      }

  return (
    <div>
      <div 
        className=' sm:absolute sm:bg-[#FAFAFA] sm:w-[514px] sm:h-[280px] sm:mt-[-304px] sm:ml-[40px]
         lg:w-[445px] lg:h-[357px] lg:mt-[-381px] lg:ml-[157px] 
         2xl:ml-[377px]
        '> 
          <h1 
            className=' text-Gris text-[40px] font-bold leading-[42px] tracking-[-0.357px] w-[337px] mx-auto font-Ibarra 
              sm:w-[458px] sm:mx-0 sm:pt-[56px]
              lg:w-[390px] lg:h-[50px]
          '> Hola, soy Jesus Rosas y me encanta construir paginas web hermosas. </h1>

          <a href="#sobre_mi" onClick={scrollToSobreMi}>
              <button 
                className=' font-Sans text-white text-xs uppercase tracking-[2px] border w-[200px] h-[48px] bg-Azuloscuro flex mt-8 ml-[50px] sm:ml-0 sm:mt-[50px]
                lg:mt-[250px]
              ' > 
                  <img className='h-[90px] w-[90px] my-[10px] ml-[15px] absolute' src={arrowdown} alt="arrow" />
                  <p className=' ml-[40%] my-auto font-Sans text-xs tracking-[2px] uppercase'> Sobre mi </p>
              </button>
          </a>
        </div>
    </div>
  )
}
