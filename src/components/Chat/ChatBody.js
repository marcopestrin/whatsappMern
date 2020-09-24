import React from 'react'
import './style.scss'

import ChatMessage from './ChatMessage'

function ChatBody() {
    return (
        <div className="chat_body">
            <ChatMessage />
            <ChatMessage receiver/>
            <ChatMessage />
            <ChatMessage receiver/>
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage receiver/>
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
        </div>
    )
}

export default ChatBody
