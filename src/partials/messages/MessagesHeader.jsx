import React from 'react';

import User01 from '../../images/user-32-01.jpg';
import User02 from '../../images/user-32-07.jpg';
import icons from '../../images/icons/icons';

function MessagesHeader({ msgSidebarOpen, setMsgSidebarOpen }) {
  return (
    <div>
      <div className='flex items-center justify-between bg-white border-b border-slate-200 px-4 sm:px-6 md:px-5 h-20'>
        <div className='flex gap-2 items-center'>
          <img className='rounded-full' src={User01} alt='foto' />
          <div>
            <p className='text-xl font-bold text-black'>Jhon Doe</p>
            <div className='flex gap-1'>
              <img src={icons.whatsapp} alt='whatsapp' />
              <p className='text-sm text-gray200 font-semibold'>WhatsApp</p>
              <button className='text-sm text-blue100 font-semibold'>
                Ocultar detalles
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
