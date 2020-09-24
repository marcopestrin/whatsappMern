import React from 'react'
import './style.scss'

function ChatMessage(props) {
    const { receiver } = props
    const classMessage = `chat_message ${receiver ? 'chat_receiver' : ''}`
    
    return (
        <p className={classMessage}>
            <span className="chat_name">Marco</span>
            This is a message
            <span className="chat_timestamp">
                {new Date().toUTCString()}
            </span>
        </p>
    )
}

export default ChatMessage
