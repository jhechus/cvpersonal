import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Presentation from '../Components/Presentation'
import About from '../Components/About'
import Juntos from '../Components/Juntos'

import Fotocel from '../assets/images/homepage/mobile/image-homepage-hero.jpg'
import Fototablet from '../assets/images/homepage/tablet/image-homepage-hero.jpg'
import FotoDesk from '../assets/images/homepage/desktop/image-homepage-hero.jpg'

import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    // Realiza el scroll hacia la parte superior al montar el componente
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />

        <picture>
            <source media='(max-width: 639px)' srcSet={Fotocel}  />
            <source media='(max-width: 1000px)' srcSet={Fototablet}  />
            <source media='(min-width: 1001px)' srcSet={FotoDesk}  />
            <img className='object-cover mx-auto pt-10 pb-6' src={Fotocel} alt="Fondo" />
        </picture>

      <Presentation />

      <About />
        
      <Juntos />
  
      <Footer />

    </div>
  )
}
