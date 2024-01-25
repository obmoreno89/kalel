import { useState } from 'react';
import icons from '../images/icons/icons';

export default function AccordionNotes(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className=''>
      <button
        className='flex items-center justify-between w-full group mb-1 bg-secondary px-5 py-3'
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
      <div className={`px-2 flex flex-col gap-2 ${!open && 'hidden'}`}>
        <div className='bg-note p-5 flex flex-col mt-3 mb-5'>
          <p className='text-sm'>
            Jhon reportó su pago pero se encuentra pendiente. Vamos a darle
            seguimiento con el ticket #30031339
          </p>
          <div>
            <p className='text-xs'>
              Creada por Marcus (Yo) <br /> Abril 3, 11:21 AM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
