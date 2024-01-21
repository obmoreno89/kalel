import React from 'react';
import icons from '../../images/icons/icons';

function InformationMessages() {
  return (
    <div className=''>
      <div className='flex flex-col gap-3'>
        <div className='flex items-center gap-1 bg-secondary p-2 rounded-lg'>
          <img src={icons.messageText} alt='icono mensaje' />
          <h5 className='text-sm text-primary font-semibold cursor-pointer'>
            Todas las conversaciones
          </h5>
        </div>
        <div className='flex items-center gap-1 p-2'>
          <img src={icons.mention} alt='icono @' />
          <h5 className='text-sm text-gray font-semibold cursor-pointer'>
            Menciones
          </h5>
        </div>
        <div>
          <h5 className='text-black font-semibold mb-2 text-sm'>Equipos</h5>
          <ul className='text-sm'>
            <li className='font-semibold'>#Soporte</li>
            <li className='font-semibold'>#ventas</li>
            <li className='font-semibold'>#tecnología</li>
            <li className='font-semibold'>#finanzas</li>
            <button className='text-gray100'>+ Crear grupo</button>
          </ul>
        </div>
        <div className='mt-2'>
          <h5 className='text-black font-semibold mb-2 text-sm'>Bandejas</h5>
          <ul className='text-sm flex flex-col gap-1'>
            <li className='font-semibold flex gap-1'>
              <div className='bg-secondary flex justify-center items-center w-5 rounded-lg'>
                <img src={icons.whatsapp} alt='whatsapp' />
              </div>
              <span>WhatSapp Business</span>
            </li>
            <li className='font-semibold flex gap-1'>
              <div className='bg-secondary flex justify-center items-center w-5 rounded-lg'>
                <img src={icons.facebook} alt='facebook' />
              </div>
              <span>Facebook Pages</span>
            </li>
            <li className='font-semibold flex gap-1'>
              <div className='bg-secondary flex justify-center items-center w-5 rounded-lg'>
                <img src={icons.sms} alt='sms' />
              </div>
              <span>soporte@tryblond.com</span>
            </li>
            <li className='font-semibold flex gap-1'>
              <div className='bg-secondary flex justify-center items-center w-5 rounded-lg'>
                <img src={icons.global} alt='global' />
              </div>
              <span>Sitio web (tryblond.com)</span>
            </li>
            <button className='text-gray100 text-left'>
              + Agregar bandeja
            </button>
          </ul>
        </div>
        <div className='mt-2'>
          <h5 className='text-black font-semibold text-sm mb-2'>Etiquetas</h5>
          <ul className='text-sm flex flex-col gap-1'>
            <li className='font-semibold flex gap-1 mb-1'>
              <div className='bg-aqua w-5 h-5 rounded-lg'></div>
              <span>Prueba gratis</span>
            </li>
            <li className='font-semibold flex gap-1'>
              <div className='bg-orange w-5 h-5 rounded-lg'></div>
              <span>Cliente vips</span>
            </li>

            <button className='text-gray100 text-left'>+ Crear etiqueta</button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InformationMessages;
