import React from 'react';
import { Sidebar, Menu} from 'semantic-ui-react';
import { StyleSheet, css } from 'aphrodite';

export default class BodyContent extends React.Component {
    render () {
        return(
                <Menu vertical className={css(styles.container)}>
                    <Menu.Item>
                        <Menu.Header>Task</Menu.Header>

                        <Menu.Menu>
                            <Menu.Item name='Upload Form' link/>
                            <Menu.Item name='View Status' link/>
                        </Menu.Menu>
                    </Menu.Item>
                    <Menu.Item>
                        <Menu.Header>Form</Menu.Header>

                        <Menu.Menu>
                            <Menu.Item name='View Output' link/>
                            <Menu.Item name='Download Results' link/>
                        </Menu.Menu>
                    </Menu.Item>
                </Menu>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: '20px',
        flexShrink: 1,
        width: '210px'
    }
});
