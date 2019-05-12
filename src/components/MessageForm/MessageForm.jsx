import React, {Component} from 'react';
import './MessageForm.css';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Icon from "@material-ui/core/Icon/Icon";
import Fab from "@material-ui/core/Fab/Fab";
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    textField: {
        width: '100%',
    },
    fab: {
        margin: theme.spacing.unit,
    },
});

class MessageForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            author: 'user',
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
        const {message} = this.state;
        const {classes} = this.props;
        return (
            <div>
                <Grid container spacing={12}>
                    <Grid item xs={10}>
                        <TextField
                            label="Ведите сообщение"
                            className={classNames(classes.textField)}
                            margin="dense"
                            name="message"
                            onChange={this.handleInput}
                            value={message}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Fab
                            onClick={this.handleSend}
                            color="primary" aria-label="Add"
                            className={classes.fab}>

                            <Icon className={classes.rightIcon}>send</Icon>

                        </Fab>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(MessageForm);