import React, {Component} from 'react';
import './MessagesList.css';

import MessageForm from 'components/MessageForm';
import Message from 'components/Message';

export default class MessagesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
        }
    }

    handleMessage = (message) => {
        //console.log('MessagesList | ', message);
        this.setState((prevState) => ({
            messages: prevState.messages.concat([message]),
        }));
    };

    componentDidUpdate() {
        const {author} = this.state.messages[this.state.messages.length - 1];
        if (author !== 'bot') {
            this.handleMessage({message: 'Ответ от бота...', author: 'bot'})
        }
    }

    render() {
        const {messages} = this.state;
        return (
            <div className={"message-container"}>
                {messages.map((el, idx) => <Message key={idx} author={el.author} message={el.message}/>)}
                <hr/>
                <MessageForm onMessage={this.handleMessage}/>
            </div>
        );
    }
}
