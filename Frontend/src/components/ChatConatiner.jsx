import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore.js'
import { useAuthStore } from '../store/useAuthStore.js';
import ChatHeader from './ChatHeader.jsx';

function ChatConatiner() {

  const {selectedUser , messages , getMessagesByUserId , isMessagesLoading} = useChatStore();
  
  const {authUser} = useAuthStore();

  useEffect(() => {
    getMessagesByUserId(selectedUser._id);
  }, [selectedUser , getMessagesByUserId]) // this is dependency array here 


  return (
    <>
    <ChatHeader/>
    </>
  )
}

export default ChatConatiner