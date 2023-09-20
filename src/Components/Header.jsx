import React from 'react'
import logo from '../assets/images/logo.svg'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className=' items-center w-full px-8 pt-8 flex place-content-between sm:pt-16 sm:px-10 lg:px-[165px]'>
        <img className=' w-[60px] h-[32px]' src={logo} alt=" Logo " />
        <Navbar />
    </header>
  )
}
