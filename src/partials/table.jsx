import React from 'react';
import { Grid, Icon, Progress } from 'semantic-ui-react';
import { StyleSheet, css } from 'aphrodite';


export default class FileTable extends React.Component {

    render () {
        let files = this.props.files.map(file => <TableContents {...file} />)

        return(
            <Grid className={css(styles.table)}>
                <Grid.Row className={css(styles.header)}>
                    <Grid.Column width={2}>
                    </Grid.Column>
                    <Grid.Column width={8}>Filename</Grid.Column>
                    <Grid.Column width={2}>Size</Grid.Column>
                    <Grid.Column width={4}>Progress</Grid.Column>
                </Grid.Row>
                {files}
            </Grid>
        )
    }
}

const TableContents = ({filename, prog, totalprog, size}) => {
    let size_toString = ((bytes) => {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
        if (bytes == 0) return '0 Byte'
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i]
    })(size)
    return (
        <Grid.Row className={css(styles.tablecontent)}>
            <Grid.Column width={2}>
                <Icon name='remove' size='small'/>
            </Grid.Column>
            <Grid.Column width={8}>
                {filename}
            </Grid.Column>
            <Grid.Column width={2}>
                {size_toString}
            </Grid.Column>
            <Grid.Column width={4}>
                 <Progress
                    value={prog}
                    total={totalprog}
                    progress='percent'
                    className={css(styles.progressbar)}
                    size='small'
                    color='orange'/>
            </Grid.Column>
        </Grid.Row>
    )
}


const styles = StyleSheet.create({
    table: {
        width: '100%',
        fontSize: '.8em',
        margin: '10px 0px 10px 0px'
    },
    header: {
        borderBottom: '1px solid black',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: '5px',
        fontSize: '1.1em',
    },
    tablecontent: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: '5px',
        fontSize: '1.1em',
    },
    progressbar: {
        fontSize: '.9em',
        margin: '0'
    }
})
