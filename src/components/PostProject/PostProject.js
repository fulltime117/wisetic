import React, { Component } from 'react'
import { Row, Col, Form, InputGroup } from 'react-bootstrap';
import WysiwygEditor from '../WysiwygEditor/WysiwygEditor'
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FriendHooklist from './FriendHook.js'
import Keywordtag from './Keywordtag'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export class PostProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            privacy:10,

        };
        this.handleChangePrivacy = this.handleChangePrivacy.bind(this);
        this.handleChangePrivacy = this.handleChangePrivacy.bind(this);
    } 

    handleChangePrivacy(e){
        const val = e.target.value;
        this.setState({privacy: val})
    }
    
    render() {
        return (
            <div className="post-wirte-paper blog-post">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3} style={{padding:"12px 0px 12px 12px", display:"flex", alignItems:"center"}}>
                        <Form.Label>
                            Project Title
                        </Form.Label>
                    </Grid>
                    <Grid item xs>
                        <Form.Control type="text" placeholder="Type Title here" />
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3} style={{padding:"12px 0px 12px 12px", display:"flex", alignItems:"flex-start"}}>
                        <Form.Label>
                            Description
                        </Form.Label>
                    </Grid>
                    <Grid item xs>
                        <WysiwygEditor/>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3} style={{padding:"12px 0px 12px 12px", display:"flex", alignItems:"center"}}>
                        <Form.Label>
                            Attach image
                        </Form.Label>
                    </Grid>
                    <Grid item xs>
                        <Form.File 
                            id="custom-file"
                            label="Custom file input"
                            data-browse="Choose File"
                            custom
                        />
                    </Grid>
                </Grid>
                
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3} style={{padding:"12px 0px 12px 12px", display:"flex", alignItems:"center"}}>
                        <Form.Label>
                            Hashtags
                        </Form.Label>
                    </Grid>
                    <Grid item xs>
                        <InputGroup className="mb-2 mr-sm-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text>#</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="text" placeholder="Put your Keyword here" />
                        </InputGroup>
                        {/* <Keywordtag/> */}
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3} style={{padding:"12px 0px 12px 12px", display:"flex", alignItems:"center"}}>
                        <Form.Label>
                            Project Collaborators
                        </Form.Label>
                    </Grid>
                    <Grid item xs>
                        <FriendHooklist/>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3 } style={{padding:"12px 0px 12px 12px", display:"flex", alignItems:"center"}}>
                        <Form.Label>
                            Privacy 
                        </Form.Label>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <FormControl variant="outlined">        
                            <Select
                            id="privateselect"
                            value={this.state.privacy}
                            onChange={this.handleChangePrivacy}
                            color="secondary"
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Public</MenuItem>
                            <MenuItem value={20}>MyConnections only</MenuItem>
                            <MenuItem value={30}>Only me</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>              
            </div>
        )
    }
}

export default PostProject


