import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icons from '../images/icons/icons.js';
import imagesPNG from '../images/images-png/imagesPNG.js';
import { useForm } from 'react-hook-form';

function Signin() {
  const [eye, setEye] = useState(false);

  const toggleEye = () => {
    setEye((prevState) => !prevState);
  };

  const submit = (data) => console.log(data);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <main className='bg-white'>
      <div className='relative md:flex'>
        {/* Content */}
        <div className='md:w-1/2'>
          <div className='min-h-screen h-full flex flex-col 2xl:justify-center'>
            <div className='max-w-lg mx-auto px-6 py-10'>
              <div>
                <img
                  className='w-36 mb-3'
                  src={icons.nameKalelBlack}
                  alt='logo'
                />
              </div>
              <div>
                <h1 className='text-2xl text-slate-800 font-bold mb-6'>
                  Atrae, gestiona y logra la satisfacción total de tus clientes.
                  <p className='text-lg text-gray'>
                    Inicia sesión en tu cuenta.
                  </p>
                </h1>
              </div>
              {/* Form */}
              <form className='w-11/12' onSubmit={handleSubmit(submit)}>
                <div className='space-y-4'>
                  <div>
                    <label
                      className='block text-sm text-black font-medium mb-1'
                      htmlFor='email'
                    >
                      Correo electrónico
                    </label>
                    <input
                      autoComplete='off'
                      id='email'
                      className='form-input w-full'
                      type='email'
                      {...register('email', {
                        required: {
                          value: true,
                          message: 'El campo es requerido',
                        },
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: 'El formato no es correcto',
                        },
                      })}
                    />
                    {errors.email && (
                      <span className='text-red-500 text-sm'>
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className='relative'>
                    <label
                      className='block text-sm text-black font-medium mb-1'
                      htmlFor='password'
                    >
                      Contraseña
                    </label>
                    <input
                      id='password'
                      className='form-input w-full'
                      type={eye ? 'text' : 'password'}
                      autoComplete='on'
                    />
                    <button
                      onClick={toggleEye}
                      type='button'
                      className='absolute right-0 top-5 mt-3 mr-4'
                    >
                      {eye ? (
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M21.27 9.17999C20.98 8.71999 20.67 8.28999 20.35 7.88999C19.98 7.41999 19.28 7.37999 18.86 7.79999L15.86 10.8C16.08 11.46 16.12 12.22 15.92 13.01C15.57 14.42 14.43 15.56 13.02 15.91C12.23 16.11 11.47 16.07 10.81 15.85C10.81 15.85 9.38001 17.28 8.35001 18.31C7.85001 18.81 8.01001 19.69 8.68001 19.95C9.75001 20.36 10.86 20.57 12 20.57C13.78 20.57 15.51 20.05 17.09 19.08C18.7 18.08 20.15 16.61 21.32 14.74C22.27 13.23 22.22 10.69 21.27 9.17999Z'
                            fill='#BBC0C9'
                          />
                          <path
                            d='M14.02 9.98001L9.98001 14.02C9.47001 13.5 9.14001 12.78 9.14001 12C9.14001 10.43 10.42 9.14001 12 9.14001C12.78 9.14001 13.5 9.47001 14.02 9.98001Z'
                            fill='#BBC0C9'
                          />
                          <path
                            d='M18.25 5.74999L14.86 9.13999C14.13 8.39999 13.12 7.95999 12 7.95999C9.76 7.95999 7.96 9.76999 7.96 12C7.96 13.12 8.41 14.13 9.14 14.86L5.76 18.25H5.75C4.64 17.35 3.62 16.2 2.75 14.84C1.75 13.27 1.75 10.72 2.75 9.14999C3.91 7.32999 5.33 5.89999 6.91 4.91999C8.49 3.95999 10.22 3.42999 12 3.42999C14.23 3.42999 16.39 4.24999 18.25 5.74999Z'
                            fill='#BBC0C9'
                          />
                          <path
                            d='M14.86 12C14.86 13.57 13.58 14.86 12 14.86C11.94 14.86 11.89 14.86 11.83 14.84L14.84 11.83C14.86 11.89 14.86 11.94 14.86 12Z'
                            fill='#BBC0C9'
                          />
                          <path
                            d='M21.77 2.23C21.47 1.93 20.98 1.93 20.68 2.23L2.23 20.69C1.93 20.99 1.93 21.48 2.23 21.78C2.38 21.92 2.57 22 2.77 22C2.97 22 3.16 21.92 3.31 21.77L21.77 3.31C22.08 3.01 22.08 2.53 21.77 2.23Z'
                            fill='#BBC0C9'
                          />
                        </svg>
                      ) : (
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M21.25 9.14999C18.94 5.51999 15.56 3.42999 12 3.42999C10.22 3.42999 8.49 3.94999 6.91 4.91999C5.33 5.89999 3.91 7.32999 2.75 9.14999C1.75 10.72 1.75 13.27 2.75 14.84C5.06 18.48 8.44 20.56 12 20.56C13.78 20.56 15.51 20.04 17.09 19.07C18.67 18.09 20.09 16.66 21.25 14.84C22.25 13.28 22.25 10.72 21.25 9.14999ZM12 16.04C9.76 16.04 7.96 14.23 7.96 12C7.96 9.76999 9.76 7.95999 12 7.95999C14.24 7.95999 16.04 9.76999 16.04 12C16.04 14.23 14.24 16.04 12 16.04Z'
                            fill='#BBC0C9'
                          />
                          <path
                            d='M12 9.14001C10.43 9.14001 9.15002 10.42 9.15002 12C9.15002 13.57 10.43 14.85 12 14.85C13.57 14.85 14.86 13.57 14.86 12C14.86 10.43 13.57 9.14001 12 9.14001Z'
                            fill='#BBC0C9'
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <div className='flex items-center justify-end mt-6'>
                  <div className='mr-1'>
                    <Link
                      className='text-sm hover:no-underline text-primary font-medium'
                      to='/reset-password'
                    >
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>
                </div>
                {/* <Link
                  className='btn bg-primary text-white w-full mt-5 h-[45px]'
                  to='/'
                >
                  Iniciar sesión
                </Link> */}
                <button
                  className='btn bg-primary text-white w-full mt-5 h-[45px]'
                  type='submit'
                >
                  Iniciar sesión
                </button>
              </form>
              {/* Footer */}
              <div className='pt-5 mt-6'>
                {/* Warning */}
                <div className='mt-5 w-11/12'>
                  <div className='bg-red-200 text-red-600 px-3 py-2 rounded'>
                    <svg
                      className='inline w-3 h-3 shrink-0 fill-current mr-2'
                      viewBox='0 0 12 12'
                    >
                      <path d='M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z' />
                    </svg>
                    <span className='text-sm'>Credenciales invalidas</span>
                  </div>
                </div>
              </div>
              <div className='mt-3 flex justify-center w-11/12'>
                <p className='text-black font-bold text-sm'>
                  ¿Eres nuevo en Kalel?{' '}
                  <Link
                    className='text-sm hover:no-underline underline text-primary font-medium'
                    to='/reset-password'
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className='hidden md:block absolute 2xl:flex 2xl:items-center top-0 bottom-0 right-0 md:w-1/2 p-7 bg-primary'
          aria-hidden='true'
        >
          {/* <img
						className='object-cover object-center w-full h-full'
						src={AuthImage}
						width='760'
						height='1024'
						alt='Authentication'
					/> */}
          <section>
            <h5 className='text-lg text-white'>
              “Kalel nos ha ayudado crecer y consolidar <br /> nuestra base de
              datos de clientes”
            </h5>
            <div className='flex gap-2 items-center mt-3 text-white'>
              <img className='w-7' src={icons.person} alt='person' />
              <p className='text-sm font-thin'>Jhon Doe | CEO</p>
            </div>
            <img
              className='mt-3 w-[480px]'
              src={imagesPNG.chatBackground}
              alt=''
            />
            <div className='mt-3'>
              <p className='text-xs text-white'>
                Usado por más de 100 empresas, organizaciones y emprendedores,
                incluyendo:
              </p>
              <figure className='mt-2 flex flex-row gap-6 items-center'>
                <img src={icons.syncronik} alt='logos' />
                <img src={icons.nidec} alt='logos' />
                <img src={icons.hubmine} alt='logos' />
                <img src={icons.colegioChiapas} alt='logos' />
              </figure>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Signin;
