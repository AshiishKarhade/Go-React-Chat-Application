import './App.css';
import React, {Component} from 'react';
import Header from './components/Header';
import ChatHistory from "./components/ChatHistory/ChatHistory";
import ChatInput from "./components/ChatInput/ChatInput";
import { connect, sendMessage } from './api';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatHistory : []
        }
    }

    componentDidMount() {
        connect()
    }
}

export default App;
