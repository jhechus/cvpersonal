import whats from '../assets/images/icons/whatsapp2.svg'
import link from '../assets/images/icons/linkedin2.svg'
import git from '../assets/images/icons/github2.svg'

export default function Contacto() {
  return (
    <div>
      <div className=" border border-Gris w-[311px] opacity-20 mx-auto my-7 sm:w-[690px] lg:w-[1110px] 2xl:w-[1500px]"> </div>

        <div className=" px-[60px] items-center">
            <div className=" lg:grid lg:grid-cols-2 lg:px-[100px] 2xl:px-[200px]">
                <div>
                    <h1 className=" text-Gris font-Ibarra text-[40px] font-bold leading-[42px] tracking-[-0.357]"> Ponte en contacto </h1>
                </div>
                <div>
                    <p className=" text-Gris font-Sans text-[15px] leading-[30px] py-6"> Me encantaría conocer más sobre tus proyectos y cómo puedo contribuir. Actualmente, estoy en busca de nuevos clientes y estoy abierto a una amplia variedad de oportunidades. Soy una persona dedicada y positiva que siempre abordará cada proyecto con un fuerte sentido de compromiso y atención al detalle. No dudes en echar un vistazo a mis perfiles y ponerte en contacto conmigo. Espero con interés la posibilidad de trabajar juntos en tu próximo proyecto. </p>
                </div>

                <ul className=' flex items-center gap-4 cursor-pointer sm:ml-auto sm:pr-[50px] lg:mr-[-150px] '>
                <li> <a href="https://w.app/u6AXiJ" target="_blank"> <img src={whats} alt="" /> </a> </li>
                <li> <a href="https://www.linkedin.com/in/jesusrosascruz/" target='_blank'> <img src={link} alt="" /> </a> </li>
                <li> <a href="https://github.com/jhechus" target='_blank'> <img src={git} alt="" /> </a></li>
                </ul>
            </div>

        </div>

    <div className=" border border-Gris w-[311px] opacity-20 mx-auto my-7 sm:w-[690px] lg:w-[1110px] 2xl:w-[1500px]"> </div>

    </div>
  )
}
