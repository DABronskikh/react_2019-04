import React from 'react';
import './Message.css';
import classNames from 'classnames';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
});

export default function Message(props) {
    Message.classes = classNames({
        "message-box": true,
        "message-bot": props.author === "bot",
    });
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="avatar" src="https://placehold.it/40x40" />
            </ListItemAvatar>
            <ListItemText
                primary={props.author}
                secondary={
                    <React.Fragment>
                        {props.message}
                    </React.Fragment>
                }
            />
        </ListItem>
    );
}
