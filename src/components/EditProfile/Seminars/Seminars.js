import React from 'react';
import styles from './Seminars.module.css';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';


import { Form, Col} from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const Seminars = () =>{
    const [state, setState] = React.useState({       
        country: '',
        region: '',
    });

    const selectCountry = (text) =>{
        setState({
           ...state,
           country:text
        })
    }

    const selectRegion = (text) =>{
        setState({
            ...state,
            region:text
        })
    }

    return(
        <React.Fragment>
            <div className="weblink-content">
                <Typography variant="h6" style={{marginBottom:"20px"}}>
                    Edit "Seminars/Conferences" Information
                </Typography>                 
                <div className="seminars-contry-select">
                    <Form.Row>
                        <Form.Group as={Col} style={{marginBottom:"0"}} >
                            <CountryDropdown
                            defaultOptionLabel="Select your country"
                            value={state.country}
                            onChange={(val) => selectCountry(val)} />                            
                        </Form.Group>
                        <Form.Group as={Col} style={{marginBottom:"0"}} >
                            <RegionDropdown
                            blankOptionLabel="No country selected"
                            defaultOptionLabel="Now select a region"
                            country={state.country}
                            value={state.region}
                            onChange={(val) => selectRegion(val)} />
                        </Form.Group>                        
                    </Form.Row>
                    <Form.Control as="textarea" rows={4} style={{marginTop:"15px"}}/>                    
                </div>
                <Form.Row>
                    <Button variant="outlined" color="secondary" style={{marginTop:"15px", marginLeft:"5px"}}>
                        Save
                    </Button>
                </Form.Row>                  
            </div>
        </React.Fragment>
    )
}

export default Seminars