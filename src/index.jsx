import React from 'react';
import {render} from 'react-dom';

import Navbar from './layout/navbar.jsx'
import BodyContent from './layout/bodycontent.jsx'

class App extends React.Component {
  render () {
    return (
        <div>
            <Navbar />
            <BodyContent />
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
