import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Contacto from "../Components/Contacto";
import Swal from "sweetalert2";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { useEffect } from "react";


export default function Contact() {

    useEffect(() => {
        // Realiza el scroll hacia la parte superior al montar el componente
        window.scrollTo(0, 0);
      }, []);

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_sa3g2ri', 'template_ap9fl9i', form.current, 'SAWRCsQMykvklf4uX')
        .then((result) => {
          console.log(result.text);
  
          // Muestra la alerta de éxito
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tu mensaje ha sido enviado con éxito',
            showConfirmButton: false,
            timer: 1500,
          });
  
          // Limpia el formulario si es necesario
          if (form.current) {
            form.current.reset();
          }
        })
        .catch((error) => {
          console.log(error.text);
  
          // Muestra la alerta de error
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un problema al enviar el mensaje. Inténtalo de nuevo más tarde.',
          });
        });
    };

  return (
    <div>
      <Header />

        <Contacto />

            <div class="py-8 lg:py-16 px-10 mx-auto max-w-screen-md lg:mx-0 lg:px-[150px] 2xl:px-[300px]">

                <div className="lg:grid lg:grid-cols-2">
                    <div className=" lg:order-1">
                        <h2 class="mb-4 text-Gris font-Ibarra text-[40px] font-bold leading-[42px] tracking-[-0.357px]">Contactame</h2>
                    </div>

                    <div className=" lg:order-2">
                        <form ref={form} onSubmit={sendEmail} action="#" class="space-y-8 lg:ml-[350px] 2xl:ml-[500px]">
                            <div>
                                <label for="email" class="block mb-2 text-Gris font-Sans text-[13px] font-bold leading-[30px] lg:w-[635px]">Tu Correo</label>
                                <input type="email" id="email" name="user_email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 lg:w-[635px]" placeholder="ejemplo@gmail.com" required />
                            </div>
                            <div>
                                <label for="subject" class="block mb-2 text-Gris font-Sans text-[13px] font-bold leading-[30px] lg:w-[635px]"> Tu Nombre </label>
                                <input type="text" id="subject" name="user_name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  lg:w-[635px]" placeholder="Nombre ejemplo" required />
                            </div>
                            <div class="sm:col-span-2">
                                <label for="message" class="block mb-2 text-Gris font-Sans text-[13px] font-bold leading-[30px] lg:w-[635px]"> Tu mensaje </label>
                                <textarea id="message" rows="6" name="message" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 lg:w-[635px]" placeholder="Dejame tu mensaje..."></textarea>
                            </div>
                            <button type="submit" value="Send" class=" bg-Azuloscuro py-3 px-5 text-[12px] font-Sans font-normal tracking-[2px] uppercase text-center text-white rounded-lg sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 lg:w-[200px] "> Enviar mensaje </button>
                        </form>
                    </div>
                </div>
            </div>
        

        <div className="pt-[50px]">
            <Footer />
        </div>



    </div>
  )
}
