import React from 'react';
import ReactDOM from 'react-dom';
import { Route,  BrowserRouter as Router, Provider } from 'react-router-dom';

import FileUploadComponent from './pages/uploadfile.jsx';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route exact={true} path="/" component={FileUploadComponent} />
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
