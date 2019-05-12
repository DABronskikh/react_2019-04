import React, {Component} from 'react';
import ReactDom from 'react-dom';

import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {blue, red} from '@material-ui/core/colors';

import Layout from 'components/Layout';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: red,
    },
    status: {
        danger: 'orange',
    },
});


class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Layout/>
            </MuiThemeProvider>
        )
    }
}

ReactDom.render(
    <App/>,
    document.querySelector('#root'),
);
