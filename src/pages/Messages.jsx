import React, { useState, useEffect, useRef } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import MessagesSidebar from '../partials/messages/MessagesSidebar';
import MessagesHeader from '../partials/messages/MessagesHeader';
import MessagesBody from '../partials/messages/MessagesBody';
import MessagesFooter from '../partials/messages/MessagesFooter';
import InformationMessage from '../partials/messages/InformationMessages';
import ChatProfileInformation from '../partials/messages/ChatProfileInformation';

function Messages() {
  const contentArea = useRef(null);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [msgSidebarOpen, setMsgSidebarOpen] = useState(true);
  const [informationSidebarOpen, setInformationSideBarOpen] = useState(false);

  useEffect(() => {
    contentArea.current.scrollTop = 99999999;
  }, [msgSidebarOpen]); // automatically scroll the chat and make the most recent message visible

  const sidebarOpenInformation = (value) => setInformationSideBarOpen(value);

  return (
    <div className='flex h-screen overflow-hidden'>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div
        className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden '
        ref={contentArea}
      >
        <main>
          <div className='relative flex'>
            <div className='bg-white overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 border-r border-slate-200 md:w-60 xl:w-64 '>
              <div className='px-3 py-4'>
                <InformationMessage />
              </div>
            </div>

            <div className='bg-white overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 border-r border-slate-200'>
              <div className='py-4'>
                <MessagesSidebar
                  msgSidebarOpen={msgSidebarOpen}
                  setMsgSidebarOpen={setMsgSidebarOpen}
                />
              </div>
            </div>

            <div
              className={`grow flex flex-col md:translate-x-0 transform transition-transform duration-300 ease-in-out ${
                msgSidebarOpen ? 'translate-x-1/3' : 'translate-x-0'
              }`}
            >
              <MessagesHeader
                sidebarOpenInformation={sidebarOpenInformation}
                informationSidebarOpen={informationSidebarOpen}
              />
              <div className='flex'>
                <div>
                  <MessagesBody />
                  <MessagesFooter />
                </div>
                {informationSidebarOpen && (
                  <div className='bg-white border-l border-slate-200 overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 md:w-64 xl:w-72'>
                    <ChatProfileInformation
                      sidebarOpenInformation={sidebarOpenInformation}
                      informationSidebarOpen={informationSidebarOpen}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Messages;
