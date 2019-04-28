import React, {Component} from 'react';
import './MessageForm.css';

export default class MessageForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            author: '',
            message: '',
        }
    }

    handleSend = () => {
        const {onMessage} = this.props;
        onMessage(this.state);
        this.setState({message: ''});
    };

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render() {
        const {author, message} = this.state;
        return (
            <div className={"message-form"}>
                <input className={"message-input"} onChange={this.handleInput} type="test" name="author"
                       placeholder="Автор" value={author}/>
                <input className={"message-input"} onChange={this.handleInput} type="test" name="message"
                       placeholder="Сообщение" value={message}/>
                <button className={"message-btn"} onClick={this.handleSend}>Оптравить</button>
            </div>
        );
    }
}
