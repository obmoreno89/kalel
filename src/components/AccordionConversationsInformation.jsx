import { useState } from 'react';
import icons from '../images/icons/icons';

export default function AccordionConversationsInformation(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className=''>
      <button
        className='flex items-center justify-between w-full group mb-1 bg-secondary px-2 py-3'
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <div className='text-sm text-slate-800 font-bold'>{props.title}</div>
        <img
          src={open ? icons.minus : icons.plus}
          alt={open ? 'Open' : 'Closed'}
          style={{ width: '20px', height: '20px' }}
        />
      </button>
      <div className='px-2 flex flex-col gap-2'>
        <article className={`${!open && 'hidden'}`}>
          <h5 className='text-black font font-semibold'>Iniciada el</h5>
          <p className='text-sm'>Lunes 3 de Abril a las 11:15 AM</p>
        </article>
        <article className={`${!open && 'hidden'}`}>
          <h5 className='text-black font font-semibold'>Origen</h5>
          <p className='text-sm'>WhatsApp (Orgánico)</p>
        </article>
      </div>
    </div>
  );
}
