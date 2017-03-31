import React from 'react';
import { Container} from 'semantic-ui-react';
import { StyleSheet, css } from 'aphrodite';

import Sidebar from '../partials/sidebar.jsx'
import Content from '../partials/content.jsx'

export default class BodyContent extends React.Component {
    render () {
        return(
            <Container fluid className={css(styles.container)}>
                <div className={css(styles.bodycontainer)}>
                    <Sidebar />
                    <Content />
                </div>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: '20px',
        display: 'flex',
        justifyContent: 'center',
    },
    bodycontainer: {
        width: '90vw',
        maxWidth: '1024px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start'
    }
});
