import React from 'react'
import logow from '../assets/images/logow.svg'
import whats from '../assets/images/icons/whatsapp.svg'
import linkedin from '../assets/images/icons/linkedin.svg'
import git from '../assets/images/icons/github.svg'

import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='bg-Gris h-[350px] sm:h-[110px] sm:flex sm:pb-0'>
        <br /><br />
      <img className=' w-[60px] h-[32px] mx-auto object-cover sm:my-auto sm:mx-0 sm:ml-[40px] lg:ml-[165px]' src={logow} alt=" Logo " />

        <ul className=' h-[106px] mt-5 justify-center mb-10
             text-center gap-[42px] text-white text-[12px] tracking-[2px] uppercase
             sm:flex sm:flex-row sm:bg-transparent sm:mt-0 sm:mr-10 sm:justify-end sm:pl-[48px] sm:my-auto
             lg:pl-[50px]
             lg:px-[165px]'>
                
            <li className=' my-8 sm:my-auto'> 
                <Link to={'/'}>
                    <div>
                    Inicio
                    </div>
                </Link>
            </li>        

            <li className=' mb-8 sm:my-auto'>
                <Link to={'/portfolio'}> 
                    <div>
                    Portafolio
                    </div>
                </Link>
            </li>

            <li className=' mb-8 sm:my-auto'>
                <Link to={'/contact'}>
                    <div>
                    Contactame
                    </div>
                </Link>
            </li>        
        </ul>

        <ul className=' flex items-center justify-center gap-4 cursor-pointer sm:ml-auto sm:pr-[50px] lg:pr-[165px]'>
            <li> <a href="https://w.app/u6AXiJ" target="_blank"> <img src={whats} alt="" /> </a> </li>
            <li> <a href="https://www.linkedin.com/in/jesusrosascruz/" target='_blank'> <img src={linkedin} alt="" /> </a> </li>
            <li> <a href="https://github.com/jhechus" target='_blank'> <img src={git} alt="" /> </a></li>
        </ul>

    </div>
  )
}
