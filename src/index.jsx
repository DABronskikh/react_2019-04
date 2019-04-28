import React, {Component} from 'react';
import ReactDom from 'react-dom';
import MessagesList from 'components/MessagesList';

class App extends Component {
    render() {
        return (
            <div>
                <MessagesList/>
            </div>
        )
    }
}

ReactDom.render(
    <App/>,
    document.querySelector('#root'),
);
