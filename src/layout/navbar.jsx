import React from 'react';
import { Container, Grid, Header, Icon} from 'semantic-ui-react';
import { StyleSheet, css } from 'aphrodite';

export default class Navbar extends React.Component {
    render () {
        return(
            <Container textAlign='center' fluid className={css(styles.container)}>
                <div className={css(styles.navContainer)}>
                    <Grid>
                        <Grid.Column width={4} textAlign='left'>
                            <Header as='h2' className={css(styles.logo)}>
                                <Header.Content>
                                    Bloomfield Tech
                                    <Header.Subheader className={css(styles.subheader)}>
                                        Manage your preferences
                                    </Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Grid.Column>
                        <Grid.Column textAlign='right' width={12}>
                            <div className={css(styles.navButtons)}>
                                <div className={css(styles.navItems)}>
                                    <Icon className={css(styles.navIcons)} circular link name='bell outline'/>
                                    <span className={css(styles.navIconsLabel)}> Notifications </span>
                                </div>
                                <div className={css(styles.navItems)}>
                                    <Icon className={css(styles.navIcons)} circular link name='mail outline'/>
                                    <span className={css(styles.navIconsLabel)}> Contact Support </span>
                                </div>
                                <div className={css(styles.navItems)}>
                                    <Icon className={css(styles.navIcons)} circular link name='log out'/>
                                    <span className={css(styles.navIconsLabel)}> Logout </span>
                                </div>
                            </div>
                        </Grid.Column>
                    </Grid>
                </div>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    navContainer: {
        padding: '10px',
        height: '5%',
        width: '90vw',
        maxWidth: '1024px'
    },
    logo: {
        marginTop: '5px'
    },
    subheader: {
        fontSize: '.5em'
    },
    navButtons: {
        float: 'right',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: '5px'
    },
    navItems: {
        width: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        ':hover span': {
            opacity: '1'
        }
    },
    navIconsLabel: {
        opacity: '0',
        transition: 'opacity .5s',
        fontSize: '.8em',
        position: 'absolute',
        top: '53px'
    }
});
