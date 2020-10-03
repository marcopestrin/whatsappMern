import React from 'react'
import './style.scss'
import ChatMessage from './ChatMessage'

function ChatBody({messages}) {
    return (
        <div className="chat_body">
            {messages.map((mex, index) => {
                return (
                    <ChatMessage 
                        key={index}
                        timestamp={mex.timestamp}
                        receiver={mex.receiver}
                        name={mex.name}
                        message={mex.message}
                    />
                )
            })}
        </div>
    )
}

export default ChatBody
