import React, { useEffect, useState } from 'react';
import './App.scss';
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import axios from './axios'
import Pusher from 'pusher-js'

function App() {

  const [messages, setMessages] = useState([])

  useEffect(( ) => {
    axios.get('/messages/sync')
      .then(response => {
        setMessages(response.data)
      })
  }, [])

  useEffect(() => {
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    const pusher = new Pusher('47b153ecf5693cf3ae6c', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])

  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
    
  );
}

export default App;
