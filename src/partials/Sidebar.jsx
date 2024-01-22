import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import SidebarLinkGroup from './SidebarLinkGroup';
import icons from '../images/icons/icons';
import User01 from '../images/user-32-01.jpg';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed∏
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-blackSide bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden='true'
      ></div>

      {/* Sidebar */}
      <div
        id='sidebar'
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-blackSide p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        {/* Sidebar header */}
        <div className='flex justify-between mb-10 pr-3 sm:px-2'>
          {/* Close button */}
          <button
            ref={trigger}
            className='lg:hidden text-slate-500 hover:text-slate-400'
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls='sidebar'
            aria-expanded={sidebarOpen}
          >
            <span className='sr-only'>Close sidebar</span>
            <svg
              className='w-6 h-6 fill-current'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z' />
            </svg>
          </button>
          {/* Logo */}

          {sidebarExpanded ? (
            <NavLink end to='/' className='block'>
              <img src={icons.nameKalelWhite} alt='logo' />
            </NavLink>
          ) : (
            <NavLink end to='/' className='block'>
              <img src={icons.kalelLogo} alt='logo' />
            </NavLink>
          )}
        </div>

        {/* Links */}
        <div className='space-y-8'>
          {/* Pages group */}
          <div>
            <ul className='mt-3 space-y-4'>
              {/* Messages */}
              <li
                className={`px-3 py-3 rounded-lg mb-0.5 last:mb-0 ${
                  pathname.includes('messages') && 'bg-primary'
                }`}
              >
                <NavLink
                  end
                  to='/messages'
                  className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                    pathname.includes('messages') && 'hover:text-slate-200'
                  }`}
                >
                  <div className='flex items-center justify-between'>
                    <div className='grow flex items-center'>
                      <img src={icons.messageTextSideBar} alt='mensajes' />
                      <span className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                        Mensajes
                      </span>
                    </div>
                    {/* Badge */}
                    <div className='flex flex-shrink-0 ml-2'>
                      <span className='inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-primary px-2 rounded'>
                        4
                      </span>
                    </div>
                  </div>
                </NavLink>
              </li>
              {/* User */}
              <li
                className={`px-3 py-3 rounded-lg mb-0.5 last:mb-0 ${
                  pathname.includes('user') && 'bg-primary'
                }`}
              >
                <NavLink
                  end
                  to='/user'
                  className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                    pathname.includes('user') && 'hover:text-slate-200'
                  }`}
                >
                  <div className='flex items-center'>
                    <img src={icons.userSquare} alt='Usuario' />
                    <span className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                      One option
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Diagram */}
              <li
                className={`px-3 py-3 rounded-lg mb-0.5 last:mb-0 ${
                  pathname.includes('diagram') && 'bg-primary'
                }`}
              >
                <NavLink
                  end
                  to='/diagram'
                  className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                    pathname.includes('diagram') && 'hover:text-slate-200'
                  }`}
                >
                  <div className='flex items-center'>
                    <img src={icons.diagram} alt='grafica' />
                    <span className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                      One option
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Ticket */}
              <li
                className={`px-3 py-3 rounded-lg mb-0.5 last:mb-0 ${
                  pathname.includes('ticket') && 'bg-primary'
                }`}
              >
                <NavLink
                  end
                  to='/ticket'
                  className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                    pathname.includes('ticket') && 'hover:text-slate-200'
                  }`}
                >
                  <div className='flex items-center'>
                    <img src={icons.ticket} alt='ticket' />
                    <span className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                      One option
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Send */}
              <li
                className={`px-3 py-3 rounded-lg mb-0.5 last:mb-0 ${
                  pathname.includes('send') && 'bg-primary'
                }`}
              >
                <NavLink
                  end
                  to='/send'
                  className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                    pathname.includes('send') && 'hover:text-slate-200'
                  }`}
                >
                  <div className='flex items-center'>
                    <img src={icons.send} alt='enviando mensaje' />
                    <span className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                      One option
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* TaskSquare */}
              <li
                className={`px-3 py-3 rounded-lg mb-0.5 last:mb-0 ${
                  pathname.includes('taskSquare') && 'bg-primary'
                }`}
              >
                <NavLink
                  end
                  to='/taskSquare'
                  className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                    pathname.includes('taskSquare') && 'hover:text-slate-200'
                  }`}
                >
                  <div className='flex items-center'>
                    <img src={icons.taskSquare} alt='tareas' />
                    <span className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                      One option
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Link */}
              <li
                className={`px-3 py-3 rounded-lg mb-0.5 last:mb-0 ${
                  pathname.includes('link') && 'bg-primary'
                }`}
              >
                <NavLink
                  end
                  to='/link'
                  className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                    pathname.includes('link') && 'hover:text-slate-200'
                  }`}
                >
                  <div className='flex items-center'>
                    <img src={icons.link} alt='enlace' />
                    <span className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                      One option
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Setting */}
            </ul>
          </div>
        </div>

        <div>
          <div className=''>
            <li
              className={`px-3 py-3 rounded-lg mb-0.5 mt-24 last:mb-0 list-none ${
                pathname.includes('setting') && 'bg-primary'
              }`}
            >
              <NavLink
                end
                to='/setting'
                className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                  pathname.includes('setting') && 'hover:text-slate-200'
                }`}
              >
                <div className='flex items-center'>
                  <img src={icons.setting} alt='ajustes' />
                  <span className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                    One option
                  </span>
                </div>
              </NavLink>
            </li>
          </div>
          <figure>
            <img className='rounded-full mt-3' src={User01} alt='foto' />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
