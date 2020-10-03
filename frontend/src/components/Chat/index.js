import React from 'react'
import './style.scss'
import ChatHeader from './ChatHeader'
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter'

function Chat(props) {
    return (
        <div className="chat">
            <ChatHeader />
            <ChatBody messages={props.messages} />
            <ChatFooter />
        </div>
    )
}

export default Chat
