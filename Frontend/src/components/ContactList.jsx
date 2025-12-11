import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore.js'
import UsersLoadingSkeleton from './UsersLoadingSkeleton.jsx';

function ContactList() {

  const { getAllContacts , allContacts , setSelectedUser , isUsersLoading } = useChatStore();

  useEffect(() => {
    getAllContacts();
  } , [getAllContacts]);

  if(isUsersLoading) return <UsersLoadingSkeleton />;


  return (
    <>
      {allContacts.map((contact)  => (
        <div
          key={contact._id}
          className="bg-cyan-500/10 p-4 rounded-lg cursor-pointer hover:bg-cyan-500/20 transition-colors"
          onClick={() => setSelectedUser(contact)}
        >
          <div className="flex items-center gap-3">

            {/* This has to be fixed when user is online then only here online status can be seen using with web soket.io  */}
            
            <div className={`avatar online`}>
              <div className="size-12 rounded-full">
                <img
                  src={contact.profilePic || "/avatar.png"}
                  alt={contact.fullname}
                />
              </div>
            </div>

            <h4 className="text-slate-200 font-medium truncate">
              {contact.fullname}
            
            </h4>

          </div>
        </div>
      ))}
    </>
  );
}

export default ContactList