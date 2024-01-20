import React from 'react';
import icons from '../../images/icons/icons';

function DirectMessages() {
	return (
		<div className=''>
			<div className='flex flex-col gap-3'>
				<div className='flex items-center gap-1 bg-secondary p-2 rounded-lg'>
					<img src={icons.messageText} alt='icono mensaje' />
					<h5 className='text-sm text-primary font-medium'>
						Todas las conversaciones
					</h5>
				</div>
				<div className='flex items-center gap-1 p-2'>
					<img src={icons.mention} alt='icono @' />
					<h5 className='text-sm  font-medium'>Todas las conversaciones</h5>
				</div>
			</div>
		</div>
	);
}

export default DirectMessages;
