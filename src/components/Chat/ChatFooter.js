import React, {useState} from 'react'
import './style.scss'
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic"
import { IconButton } from '@material-ui/core'
import axios from '../../axios'

function ChatFooter() {

    const [input, setInput] = useState("")

    const sendMessage = async (e) => {
        e.preventDefault()
        await axios.post('/messages/new', {
            "message": input,
            "name": "pestrino",
            "timestamp": new Date(),
            "received": false
        })
        setInput("")
    }

    return (
        <div className="chat_footer">
            <IconButton>
                <InsertEmoticonIcon />
            </IconButton>
            <form>
                <input
                    placeholer="Type a message"
                    type="text"
                    value={input}
                    onChange={ e => { setInput(e.target.value)}}
                />
                <button type="submit" onClick={sendMessage}>
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
