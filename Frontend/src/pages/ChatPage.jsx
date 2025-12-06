import React from 'react'
import { useAuthStore } from '../store/useAuthStore';

function ChatPage() {

  const { logout } = useAuthStore();

    
  return (
    <div>
      <button className='btn btn-primary' onClick={logout}>logged out</button>
    </div>
  )
}

export default ChatPage