import React, {Component} from 'react';
import MessagesList from 'components/MessagesList';
import Header from 'components/Header';

class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [
                 {message: 'Привет!', author: 'user'},
                 {message: 'Ответ от бота...', author: 'bot'},
            ],
        }
    }

    handleMessage = (message) => {
        //console.log('MessagesList | ', message);
        this.setState((prevState) => ({
            messages: prevState.messages.concat([message]),
        }));
    };

    render() {
        const {messages} = this.state;
        return (
            <div>
                <Header messages={messages}/>
                <MessagesList messages={messages} onMessage={this.handleMessage}/>
            </div>
        );
    }
}

export default Layout;