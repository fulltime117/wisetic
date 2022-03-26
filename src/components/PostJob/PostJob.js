import React, { Component } from 'react'
import { Row, Col, Form, InputGroup } from 'react-bootstrap';
import WysiwygEditor from '../WysiwygEditor/WysiwygEditor'
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Salarytag from './Salarytag'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


export class PostMedia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salaryRange:40,
            country: '',
            region: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.selectCountry = this.selectCountry.bind(this);
        this.selectRegion = this.selectRegion.bind(this);
        
    }   

    handleChange(e){
        const val = e.target.value;        
        this.setState({salaryRange: val});
    }

   selectCountry(text){
        this.setState({country: text});
   }

    selectRegion(text){
        this.setState({region: text});
    }



    render() {
        return (
            <div className="post-wirte-paper job-post">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3} style={{padding:"12px 0px 12px 12px", display:"flex", alignItems:"center"}}>
                        <Form.Label>
                            Job Title
                        </Form.Label>
                    </Grid>
                    <Grid item xs>
                        <Form.Control type="text" placeholder="Put job title here" />
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
                            Feature Image
                        </Form.Label>
                    </Grid>
                    <Grid item xs>
                        <Form.File 
                            id="custom-file"
                            label="Choose your media file"
                            data-browse="Choose File"
                            custom
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3} style={{padding:"12px 0px 12px 12px", display:"flex", alignItems:"center"}}>
                        <Form.Label>
                            Salary Range
                        </Form.Label>
                    </Grid>
                    <Grid item xs spacing={3} id="salary-select">
                        <FormControl>
                            <Select
                            id="salary-rang-type"
                            value={this.state.salaryRange}
                            onChange={this.handleChange}
                            placeholder="choose media"
                            className={this.state.salaryRange==40?"range":""}
                            style={{width:"197px"}}
                            >
                                <MenuItem value={40} disabled>
                                    Choose Currency
                                </MenuItem>
                                <MenuItem value={10}>USD</MenuItem>
                                <MenuItem value={20}>EUR</MenuItem>
                                <MenuItem value={30}>BTC</MenuItem>
                                <MenuItem value={30}>JPY</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <Select
                            id="salary-rang-type"
                            value={this.state.salaryRange}
                            onChange={this.handleChange}
                            placeholder="choose media"
                            className={this.state.salaryRange==40?"range":""}
                            style={{width:"197px"}}
                            >
                                <MenuItem value={40} disabled>
                                    Choose Salary Range..
                                </MenuItem>
                                <MenuItem value={10}>10 - 30</MenuItem>
                                <MenuItem value={20}>30 - 250</MenuItem>
                                <MenuItem value={30}>250 - 700</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3} style={{padding:"12px 0px 12px 12px", display:"flex", alignItems:"center"}}>
                        <Form.Label>
                            Complete Address
                        </Form.Label>
                    </Grid>
                    <Grid item xs>
                        <FormControl>
                            <div className="job-address-box">
                                <CountryDropdown
                                    defaultOptionLabel="Select Country"
                                    value={this.state.country}
                                    onChange={(val) => this.selectCountry(val)} 
                                    classes="job-address-select"
                                />
                                <RegionDropdown
                                    blankOptionLabel="No country selected"
                                    defaultOptionLabel="Region"
                                    country={this.state.country}
                                    value={this.state.region}
                                    onChange={(val) => this.selectRegion(val)} 
                                    classes="job-address-select"
                                />
                            </div>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3} style={{padding:"12px 0px 12px 12px", display:"flex", alignItems:"center"}}>
                        <Form.Label>
                            Experience Required
                        </Form.Label>
                    </Grid>
                    <Grid item xs>
                        <Form.Control type="text" placeholder="Put Required Experience" />
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3} style={{padding:"12px 0px 12px 12px", display:"flex", alignItems:"center"}}>
                        <Form.Label>
                            Qualification Required
                        </Form.Label>
                    </Grid>
                    <Grid item xs>
                        <Form.Control type="text" placeholder="Put Required Qualification" />
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3} style={{padding:"12px 0px 12px 12px", display:"flex", alignItems:"center"}}>
                        <Form.Label>
                            Application Link
                        </Form.Label>
                    </Grid>
                    <Grid item xs>
                        <Form.Control type="text" placeholder="Put Weblink" />
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3} style={{padding:"12px 0px 12px 12px", display:"flex", alignItems:"center"}}>
                        <Form.Label>
                            Tag (Keywords)
                        </Form.Label>
                    </Grid>
                    <Grid item xs>
                        <InputGroup className="mb-2 mr-sm-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text>#</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="text" placeholder="Put your Keyword here" />
                        </InputGroup>
                        {/* <Salarytag /> */}
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default PostMedia


