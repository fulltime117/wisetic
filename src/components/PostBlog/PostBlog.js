import React, { Component } from 'react'
import { Row, Col, Form, InputGroup } from 'react-bootstrap';

import WysiwygEditor from '../WysiwygEditor/WysiwygEditor'
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FriendHooklist from './FriendHook.js'
import Keywordtag from './Keywordtag'

export class PostBlog extends Component {
    render() {
        return (
            <div className="post-wirte-paper blog-post">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4} style={{ padding: "12px 0px 12px 12px", display: "flex", alignItems: "center" }}>
                        <Form.Label>
                            Title of your blog post
                        </Form.Label>
                    </Grid>
                    <Grid item xs>
                        <Form.Control type="text" placeholder="Type Title here" />
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4} style={{ padding: "12px 0px 12px 12px", display: "flex", alignItems: "center" }}>
                        <Form.Label>
                            Attach feature image
                        </Form.Label>
                    </Grid>
                    <Grid item xs>
                        <Form.Text className="text-muted" style={{ fontSize: "12px" }}>
                            Attach 1 file (JPEG or PNG, 1820 - 1825 x 510 - 530 )
                        </Form.Text>
                        <Form.File
                            id="custom-file"
                            label="Custom file input"
                            data-browse="Choose File"
                            custom
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4} style={{ padding: "12px 0px 12px 12px", display: "flex", alignItems: "flex-start" }}>
                        <Form.Label>
                            Description
                        </Form.Label>
                    </Grid>
                    <Grid item xs>
                        <WysiwygEditor />
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4} style={{ padding: "12px 0px 12px 12px", display: "flex", alignItems: "center" }}>
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
                        {/* <Keywordtag /> */}
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4} style={{ padding: "12px 0px 12px 12px", display: "flex", alignItems: "center" }}>
                        <Form.Label>
                            Tag Friends
                        </Form.Label>
                    </Grid>
                    <Grid item xs>
                        <FriendHooklist />
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4} style={{ padding: "12px 0px 12px 12px", display: "flex", alignItems: "flex-start" }}>
                        <Form.Label>
                            References and External links
                        </Form.Label>
                    </Grid>
                    <Grid item xs>
                        <TextareaAutosize
                            aria-label=""
                            style={{ outline: "none", resize: "none", padding: "12px" }}
                            rowsMin={6}
                            placeholder="Minimum 3 rows"
                            defaultValue=" 1- www.wwe.com
                        2- Benson, J. R.; Jatoi, I. The global breast cancer
                        burden. Future Oncol. 2012, 8, 697– 702, DOI:
                        10.2217/fon.12.61 [Crossref], [PubMed], [CAS],
                        Google Scholar"
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default PostBlog


