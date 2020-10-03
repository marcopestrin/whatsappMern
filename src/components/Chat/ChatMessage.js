import React from 'react'
import './style.scss'

function ChatMessage(props) {
    const { receiver, name, message, timestamp } = props
    const classMessage = `chat_message ${receiver ? 'chat_receiver' : ''}`
    
    return (
        <p className={classMessage}>
            <span className="chat_name">{name}</span>
                {message}
            <span className="chat_timestamp">
                {new Date(timestamp).toUTCString()}
            </span>
        </p>
    )
}

export default ChatMessage
