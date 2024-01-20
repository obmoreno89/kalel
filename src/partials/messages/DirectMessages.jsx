import React from 'react';

import UserImage01 from '../../images/user-32-01.jpg';
import UserImage02 from '../../images/user-32-02.jpg';
import UserImage03 from '../../images/user-32-03.jpg';
import UserImage04 from '../../images/user-32-04.jpg';
import UserImage05 from '../../images/user-32-05.jpg';
import UserImage06 from '../../images/user-32-06.jpg';
import icons from '../../images/icons/icons';

function DirectMessages({ setMsgSidebarOpen }) {
	return (
		<div className='mt-1'>
			<div className='text-xs font-semibold text-slate-400 mb-3 px-5'>
				<ul className='flex  justify-between'>
					<button className='flex gap-1 hover:text-primary font-semibold'>
						Asignadas{' '}
						<span className='bg-secondary rounded-full w-5 text-center '>
							6
						</span>
					</button>
					<button className='flex gap-1 hover:text-primary font-semibold'>
						Sin asignar{' '}
						<span className='bg-secondary rounded-full w-5 text-center hover:text-primary'>
							0
						</span>
					</button>
					<button className='flex gap-1 hover:text-primary font-semibold'>
						Todas{' '}
						<span className='bg-secondary rounded-full w-5 text-center hover:text-primary'>
							6
						</span>
					</button>
				</ul>
			</div>
			<ul className='mb-6bg-secondary px-2'>
				<li className='-mx-2 bg-secondary px-2 py-3 border-l-2 border-primary'>
					<button
						className=' w-full p-2'
						onClick={() => setMsgSidebarOpen(false)}
					>
						<div className='flex justify-between items-center'>
							<img
								className='w-14 h-14 rounded-full mr-2'
								src={UserImage01}
								width='32'
								height='32'
								alt='User 01'
							/>
							<div className=' w-full'>
								<div className='flex justify-between text-xs'>
									<div className='flex gap-1'>
										<img src={icons.userOctagon} alt='usuario' />
										<p>Marcus D.</p>
									</div>
									<p>Hace 20 min.</p>
								</div>
								<div className='text-left'>
									<p className='text-black font-bold text-lg'>Jhon Doe</p>
									<div className='flex'>
										<img src={icons.arrowInter} alt='icono' />
										<p className='text-sm'>Hola Jhon, gracias por esperar...</p>
									</div>
								</div>
							</div>
						</div>
					</button>
				</li>
				<li className='-mx-2 px-2 py-3'>
					<button
						className=' w-full p-2'
						onClick={() => setMsgSidebarOpen(false)}
					>
						<div className='flex justify-between items-center'>
							<img
								className='w-14 h-14 rounded-full mr-2'
								src={UserImage05}
								width='32'
								height='32'
								alt='User 01'
							/>
							<div className=' w-full'>
								<div className='flex justify-between text-xs'>
									<div className='flex gap-1'>
										<img src={icons.userOctagon} alt='usuario' />
										<p>Mike R. (Yo)</p>
									</div>
									<p>Hace 20 min.</p>
								</div>
								<div className='text-left'>
									<p className='text-black font-bold text-lg'>Kate Winslet</p>
									<div className='flex'>
										<img src={icons.arrowSent} alt='icono' />
										<p className='text-sm'>Gracias a ustedes por la ayuda</p>
									</div>
								</div>
							</div>
						</div>
					</button>
				</li>
			</ul>
		</div>
	);
}

export default DirectMessages;
