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

    //Below we are just adding our new message to our previous chatHistory component (using previous state)
    componentDidMount() {
        connect((msg) => {
            console.log("New Message")
            this.setState(prevState => ({
                chatHistory : [...prevState.chatHistory, msg]
            }))
            console.log(this.state);
        });
    }

    render(){
        return (
            <div className="App">
                <Header/>

                {/*sending chatHistory as props to our component*/}
                <ChatHistory chatHistory={ this.state.chatHistory }/>

                <ChatInput send={ this.send }/>

            </div>
        )
    }
}

export default App;
