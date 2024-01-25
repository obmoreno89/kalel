import React from 'react';

import User01 from '../../images/user-32-01.jpg';
import User02 from '../../images/user-32-07.jpg';
import icons from '../../images/icons/icons';

function MessagesHeader({ sidebarOpenInformation, informationSidebarOpen }) {
  const handleClicksidebarInformation = () =>
    sidebarOpenInformation(!informationSidebarOpen);

  return (
    <div>
      <div className='flex items-center justify-between bg-white border-b border-slate-200 px-4 sm:px-6 md:px-5 h-16'>
        <div className='flex gap-2 items-center'>
          <img className='rounded-full w-12' src={User01} alt='foto' />
          <div>
            <p className='text-lg font-bold text-black'>Jhon Doe</p>
            <div className='flex gap-1'>
              <img src={icons.whatsapp} alt='whatsapp' />
              <p className='text-sm text-gray200 font-semibold'>WhatsApp</p>
              <button
                onClick={handleClicksidebarInformation}
                className='text-sm text-blue100 font-semibold'
              >
                {informationSidebarOpen ? (
                  <span>Ocultar Detalles</span>
                ) : (
                  <span>Mostrar Detalles</span>
                )}
              </button>
            </div>
          </div>
        </div>
        <button className='btn-lg gap-7 bg-green text-white flex font-bold rounded-lg'>
          <p>Cerrado</p>
          <img src={icons.arrowDown} alt='flecha abajo' />
        </button>
      </div>
    </div>
  );
}

export default MessagesHeader;
