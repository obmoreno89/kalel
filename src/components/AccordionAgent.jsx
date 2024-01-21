import { useState } from 'react';
export default function AccordionAgent(props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className='flex justify-between'>
        <h5 className='text-black font-semibold'>Agente asignado</h5>
        <button className='text-xs text-primary font-semibold'>
          Asignarme
        </button>
      </div>
      <div className=' mt-2 px-3 py-1 rounded-lg border border-slate-200'>
        <button
          className='flex items-center justify-between w-full group mb-1'
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <div className='text-sm font-semibold flex items-center gap-2'>
            <h5 className='text-primary w-10 h-10 rounded-full bg-secondary flex justify-center items-center'>
              {props.title}
            </h5>
            <p>Marcus Dantus</p>
          </div>
          <svg
            className={`w-8 h-8 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 ${
              open && 'rotate-180'
            }`}
            viewBox='0 0 32 32'
          >
            <path d='M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z' />
          </svg>
        </button>
        <div className={`text-sm ${!open && 'hidden'}`}>{props.children}</div>
      </div>
    </div>
  );
}
