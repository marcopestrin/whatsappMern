import React from 'react'
import './style.scss'

import { Avatar } from '@material-ui/core'

function SidebarChat() {
    return (
        <div className="sidebar_chat">
            <Avatar />
            <div className="sidebar_chatInfo">
                <h2>Room Name</h2>
                <p>this is the last message</p>
            </div>
        </div>
    )
}

export default SidebarChat
