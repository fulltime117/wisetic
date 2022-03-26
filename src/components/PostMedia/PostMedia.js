import React, { Component } from 'react'
import styles from './PostMedia.module.css'

import { Row, Col, Form,InputGroup } from 'react-bootstrap';
import WysiwygEditor from '../WysiwygEditor/WysiwygEditor'
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Keywordtag from './Keywordtag'
import FriendHooklist from './FriendHook'

export class PostMedia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mediatype:40,
            privacy:10,

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangePrivacy = this.handleChangePrivacy.bind(this);
    }   

    handleChange(e){
        const val = e.target.value;        
        this.setState({mediatype: val});
    }

    handleChangePrivacy(e){
        const val = e.target.value;
        this.setState({privacy: val})

    }
    
    render() {
        return (
            <div className="post-wirte-paper blog-post">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3} className={styles.poat_type} >
                        <Form.Label >
                            Media Type
                        </Form.Label>
                    </Grid>
                    <Grid item xs>                        
                        <FormControl>
                            <Select
                            id="media-post-type"
                            value={this.state.mediatype}
                            onChange={this.handleChange}
                            placeholder="choose media"
                            className={this.state.mediatype==40?"mediapost":""}
                            >
                                <MenuItem value={40} disabled>
                                    Choose Media Type..
                                </MenuItem>
                                <MenuItem value={10}>Image</MenuItem>
                                <MenuItem value={20}>Video</MenuItem>
                                <MenuItem value={30}>Audio</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3} style={{padding:"12px 0px 12px 12px", display:"flex", alignItems:"center"}}>
                        <Form.Label>
                            Tile of the post
                        </Form.Label>
                    </Grid>
                    <Grid item xs>
                        <Form.Control type="text" placeholder="Put your title here" />
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3} style={{padding:"12px 0px 12px 12px", display:"flex", alignItems:"center"}}>
                        <Form.Label>
                            Upload Media
                        </Form.Label>
                    </Grid>
                    <Grid item xs>
                        <Form.File 
                            id="custom-file"
                            label="Upload file here"
                            data-browse="Choose File"
                            custom
                        />
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
                            Tag Friends
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
export default PostMedia


