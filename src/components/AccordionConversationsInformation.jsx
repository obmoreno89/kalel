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
      <div className={`text-sm ${!open && 'hidden'}`}>{props.children}</div>
    </div>
  );
}
