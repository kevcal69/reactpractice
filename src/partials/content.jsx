import React from 'react';
import { Segment, Header, Icon, Table} from 'semantic-ui-react';
import { StyleSheet, css } from 'aphrodite';
import Dropzone from 'react-dropzone';
import FileTable from './table.jsx';
import _ from 'lodash';


export default class Content extends React.Component {
    constructor () {
        super()
        this.state = {
            files: []
        };
        this.onDrop = this.onDrop.bind(this);
        this.interval = this.interval.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
    }

    onDrop (afiles) {
        let mfiles = afiles.map((obj, i) => {
            return {
                filename: obj.name,
                prog: 0,
                totalprog: '100',
                size:  obj.size,
                key: obj.name
            }
        });
        this.setState({
           files: mfiles
       });
       this.handleDrop()
    }

    interval () {
        let fileobj = _.cloneDeep(this.state.files);
        console.log('fuck');
        for(let i=0; i < fileobj.length; i++) {
            fileobj[i].prog += 5
        }
        this.setState({
            files: fileobj
        })
    }

    handleDrop () {
        let i = 0;
        let b = setInterval(() => {
            console.log(i);
            this.interval()
            i++;
            if (i>=10) {
                console.log(i);
                clearInterval(b)
            }
        }, 1000);
    }
    render () {


        return(
            <Segment className={css(styles.container)} >
                <div className={css(styles.contentWrapper)}>
                    <Header as='h5'>
                        <Header.Content>
                            Create Task
                                <Header.Subheader>
                                    upload files to create a job task
                                </Header.Subheader>
                        </Header.Content>
                    </Header>
                    <Dropzone className={css(styles.dropzone)} onDrop={this.onDrop} >
                        Click to open file browser or drag and drop files.
                    </Dropzone>
                    {this.state.k}
                    <Header as='h5'>
                        <Header.Content>
                            Files
                                <Header.Subheader>
                                    list of files uploaded
                                </Header.Subheader>
                        </Header.Content>
                        <FileTable files={this.state.files}/>
                    </Header>
                </div>
            </Segment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        flexGrow: '1',
        marginTop: '0px',
        marginLeft: '10px',
        display: 'flex',
        justifyContent: 'center'
    },
    contentWrapper: {
        width: '85%'
    },
    dropzone: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '90px',
        border: '2px dashed #95a5a6',
        backgroundColor: '#ecf0f1',
        color: '#95a5a6'
    }
});
