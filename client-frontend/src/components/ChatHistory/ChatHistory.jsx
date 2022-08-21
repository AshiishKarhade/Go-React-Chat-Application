import React, { Component } from 'react';
import './ChatHistory.scss';
import Message from "../Message/Message";


class ChatHistory extends Component {
    render(){
        console.log(this.props.chatHistory);
        this.props.chatHistory.map(msg=><Message key={msg.timestamp} message={msg.data}/>);

        return(
            <div className="chatHistory">
                <h2>History</h2>
                { messages }
            </div>
        )
    }
}

export default ChatHistory;