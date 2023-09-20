import BurguerMenu from '../assets/images/icons/hamburger.svg'
import CloseMenu from '../assets/images/icons/close.svg'
import { useState } from 'react'

import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {

    const [menuClicked, setmenuClicked] = useState(false)

    const handleClick = () => {
        setmenuClicked( prevState => !prevState)
    }

   
    return (
    <div>

        <nav>
            <div className='cursor-pointer sm:hidden z-10 relative' onClick={handleClick}>
                {menuClicked ? <img src={CloseMenu} /> : <img src={BurguerMenu} />}
            </div>

            <ul className={`${menuClicked ? 'flex' : 'hidden'}  absolute right-0  flex-col 
             bg-Gris w-[225px] h-[190px] mr-8 mt-6 text-center gap-8 justify-center text-white text-[12px] tracking-[2px] uppercase
             sm:text-Gris sm:flex sm:flex-row sm:bg-transparent sm:mt-0 sm:mr-10 sm:justify-end 
             lg:px-[165px]
            `}>
                <li>
                    <Link to={'/'}>
                        <div>
                           Inicio
                        </div>
                    </Link>
                </li>

                <li>
                    <Link to={'/portfolio'}> 
                        <div>
                           Portafolio
                        </div>
                    </Link>
                </li>

                <li>
                    <Link to={'/contact'}>
                        <div>
                           Contactame
                        </div>
                    </Link>
                </li>

            </ul>
        </nav>

    </div>
  )
}