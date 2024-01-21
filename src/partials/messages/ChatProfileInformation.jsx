import React from 'react';
import icons from '../../images/icons/icons';
import UserImage01 from '../../images/user-32-01.jpg';

function ChatProfileInformation() {
  return (
    <div>
      <div className='flex items-start justify-between'>
        <img className='rounded-full' src={UserImage01} alt='foto' />
        <img className='cursor-pointer' src={icons.arrowRight} alt='icono' />
      </div>
      <h5 className='mt-4 text-2xl font-bold'>Jhon Doe</h5>
      <ul className='flex flex-col gap-2'>
        <li className='flex gap-1'>
          <img className='w-5' src={icons.sms} alt='icono' />
          <p>jhon_doe@acme.inc</p>
          <img className='w-5' src={icons.documentNormal} alt='icono' />
        </li>
        <li className='flex gap-1'>
          <img className='w-5' src={icons.phone} alt='icono' />
          <p>+529371303699</p>
          <img className='w-5' src={icons.documentNormal} alt='icono' />
        </li>
        <li className='flex gap-1'>
          <img className='w-5' src={icons.location} alt='icono' />
          <p>Monterrey, NL MX</p>
        </li>
      </ul>
      <div className='mt-5 flex gap-2'>
        <button className='bg-secondary w-8 h-8 rounded-lg flex justify-center items-center'>
          <img className='w-5' src={icons.pencilBlue} alt='lapiz' />
        </button>
        <button className='bg-red-100 w-8 h-8 rounded-lg flex justify-center items-center'>
          <img className='w-5' src={icons.trash} alt='bote' />
        </button>
      </div>
    </div>
  );
}

export default ChatProfileInformation;