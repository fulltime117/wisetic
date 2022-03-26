import React from 'react'
import styles from './GeneralInformation.module.css'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

import { Form, Col} from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const GeneralInformation = () =>{
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
        country: '',
        region: '',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
    };

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
            <div className="GeneralInfoEdit-content">
                <Typography variant="h6">
                    Edit "GeneralInformation" Information
                </Typography> 
                <Form>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <TextField id="FirstName" label="First Name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <TextField id="MiddleName" label="Middle Name" />
                        </Form.Group>                        
                    </Form.Row> 
                        
                    <Form.Row>
                        <Form.Group as={Col} >
                            <TextField id="Surname" label="Surname" />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <TextField id="Officialemail" label="Official email" />
                        </Form.Group>
                    </Form.Row> 
                    <div className={styles.countryselecter}>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <CountryDropdown
                                defaultOptionLabel="Select your country"
                                value={state.country}
                                onChange={(val) => selectCountry(val)} />                            
                            </Form.Group>
                            <Form.Group as={Col}>
                                <RegionDropdown
                                blankOptionLabel="No country selected"
                                defaultOptionLabel="Now select a region"
                                country={state.country}
                                value={state.region}
                                onChange={(val) => selectRegion(val)} />
                            </Form.Group>                        
                        </Form.Row> 
                    </div>
                    <Form.Row>
                        <Button variant="outlined" color="secondary" style={{marginTop:"15px", marginLeft:"5px"}}>
                                Save
                        </Button>
                    </Form.Row>                                       
                </Form>
            </div>
        </React.Fragment>
    )
}

export default GeneralInformation