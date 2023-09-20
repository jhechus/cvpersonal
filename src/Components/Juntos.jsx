import { Link } from "react-router-dom"

export default function Juntos() {
  return (
    <div>
        <div className=' sm:grid sm:grid-cols-2 sm:py-[46px] items-center'>

            <h2 
            className=' text-center text-Gris font-Ibarra text-[40px] font-bold leading-[42px] tracking-[-0.357px] px-[60px] py-[40px] 
            sm:px-0 sm:w-[350px] sm:py-0 sm:text-left sm:ml-[40px]
            lg:ml-[160px] 2xl:ml-[350px]
            '> 
              ¿interesado en hacer un proyecto juntos? 
            </h2>

            <div className=' text-center pb-[80px] sm:pb-0 flex items-center'>
                <div className=' border border-solid border-Gris opacity-[0.15] w-[113px] hidden sm:flex h-[1px] ml-[32px] lg:w-[530px] lg:ml-[-150px]'> </div>
                <Link to='/contact'>
                <button className=' w-[162px] h-[48px] border border-Gris border-solid mx-auto sm:ml-[32px]'> contactame </button>
                </Link>
            </div>

        </div>
    </div>
  )
}
