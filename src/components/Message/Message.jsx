import React from 'react';
import './Message.css';
import classNames from 'classnames';

export default function Message(props) {
    Message.classes = classNames({
        "message-box": true,
        "message-bot": props.author === "bot",
    });
    return (
        <div className={Message.classes}>
            <div className="icon-user"></div>
            <div className="message-content">
                <p className={"message-author"}>{props.author} </p>
                <p className={"message-text"}>{props.message}</p>
            </div>
        </div>

    );
}
