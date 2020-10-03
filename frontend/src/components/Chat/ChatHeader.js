import React from 'react'

import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons'

function ChatHeader() {
    return (
        <div className="chat_header">
            <Avatar />
            <div className="chat_headerInfo">
                <h3>Room Name</h3>
                <p> last seen at...</p>
            </div>
            <div className="chat_headerRight">
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
        </div>
    )
}

export default ChatHeader
