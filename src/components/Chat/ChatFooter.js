import React from 'react'
import './style.scss'

import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic"

import { IconButton } from '@material-ui/core'

function ChatFooter() {

    return (
        <div className="chat_footer">
            <IconButton>
                <InsertEmoticonIcon />
            </IconButton>
            <form>
                <input
                    placeholer="Type a message"
                    type="text"
                />
                <button type="submit">
                    Send a message
                </button>
            </form>
            <IconButton>
                <MicIcon />
            </IconButton>

        </div>
    )
}

export default ChatFooter
