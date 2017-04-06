import React from 'react';

import Navbar from '../layout/navbar.jsx';
import BodyContent from '../layout/bodycontent.jsx';

export default class FileUploadComponent extends React.Component {
    render () {
        return (
            <div>
                <Navbar />
                <BodyContent />
            </div>
        );
    }
}
