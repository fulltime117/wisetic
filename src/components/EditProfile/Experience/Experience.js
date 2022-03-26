import React, { useState, Fragment } from "react";
import styles from './Experience.module.css'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

import "bootstrap/dist/css/bootstrap.css";
import { Form, Col} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';


const Experience = () => {
    //start date 
    const [startDate, setStartDate] = React.useState(new Date());
    const startDateChange = (date) => {
        setStartDate(date);
    };
    //end date
    const [endDate, setEndDate] = React.useState(new Date());
    const EndDateChange = (date) => {
        setEndDate(date);
    };

    //add accordion
    const [inputFields, setInputFields] = useState([
        { firstName: '', lastName: '' }
    ]);

    const [expanded, setExpanded] = useState(false);
    

    const hanChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleAddFields = () => {
        const values = [...inputFields];    
        values.push({ firstName: '', lastName: '' });
        setInputFields(values);
    };

    const handleRemoveFields = index => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    };

    const handleInputChange = (index, event) => {
        const values = [...inputFields];
        if (event.target.name === "firstName") {
        values[index].firstName = event.target.value;
        } else {
        values[index].lastName = event.target.value;
        }

        setInputFields(values);
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log("inputFields", inputFields);
    };

    //country and region select
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
  return (
    <React.Fragment>
        <div className="editExperience-content">
            <Typography variant="h6" style={{marginBottom:"15px"}}>
                Edit "Work experience" Information
            </Typography>  
            <form onSubmit={handleSubmit}>
                <div className="experience-add-section">
                    {inputFields.map((inputField, index) => (
                        <Fragment key={`${inputField}~${index}`}>
                            <div className={styles.experience_row}>                                
                                <Accordion expanded={expanded === index} onChange={hanChange(index)} style={{marginBottom:"15px"}} className={styles.experience_accordion}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"                                        
                                        id={`panel-${index}-header`}
                                        className="accordionsummary"
                                        style={{position:"relative"}}
                                    >
                                        <div className={styles.rowdelete} className="experienceshow">
                                            <IconButton aria-label="delete" fontSize="small" onClick={() => handleRemoveFields(index)} >
                                                <DeleteIcon fontSize="inherit" />
                                            </IconButton>
                                        </div>
                                        <Typography variant="body2">Work Experience # {index+1}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Form.Row>
                                            <Form.Group as={Col}>
                                                <TextField id="FirstName" label="Job Title" />
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridPassword">
                                                <TextField id="Affiliation" label="Affiliation" />
                                            </Form.Group>                        
                                        </Form.Row>  
                                        <Form.Row>
                                            <Form.Group as={Col}>
                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                    <KeyboardDatePicker
                                                    disableToolbar
                                                    variant="inline"
                                                    format="MM/dd/yyyy"
                                                    // margin="normal"
                                                    id="start-date-picker-inline"
                                                    label="Time period start date"
                                                    value={startDate}
                                                    onChange={startDateChange}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                    />      
                                                </MuiPickersUtilsProvider>
                                            </Form.Group>
                                            <Form.Group as={Col}>
                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                    <KeyboardDatePicker
                                                    disableToolbar
                                                    variant="inline"
                                                    format="MM/dd/yyyy"
                                                    // margin="normal"
                                                    id="end-date-picker-inline"
                                                    label="Time period end date "
                                                    value={endDate}
                                                    onChange={EndDateChange}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                    />      
                                                </MuiPickersUtilsProvider>
                                            </Form.Group>                                                                    
                                        </Form.Row>                                             
                                        <div className={styles.countryselecter}>
                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <CountryDropdown
                                                    defaultOptionLabel="Country"
                                                    value={state.country}
                                                    onChange={(val) => selectCountry(val)} />                            
                                                </Form.Group>
                                                <Form.Group as={Col}>
                                                    <RegionDropdown
                                                    blankOptionLabel="No country selected"
                                                    defaultOptionLabel="Region"
                                                    country={state.country}
                                                    value={state.region}
                                                    onChange={(val) => selectRegion(val)} />
                                                </Form.Group>                        
                                            </Form.Row> 
                                        </div>
                                        <Form.Row style={{padding:"0 5px"}}>
                                            <Form.Control as="textarea" rows={4} placeholder="Description here" style={{fontSize:"14px"}} />
                                        </Form.Row>
                                    </AccordionDetails>
                                </Accordion>                                
                            </div>
                        </Fragment>
                    ))}
                </div>
                <div className={styles.add_experience}>
                    <Button variant="outlined" color="secondary" type="submit" onClick={() => handleAddFields()} style={{marginTop:"15px", marginLeft:"5px"}}>
                        + Add Work Experience
                    </Button> 
                </div>
                <div className="submit-button">                    
                    <Button variant="outlined" color="secondary" type="submit" onSubmit={handleSubmit} style={{marginTop:"15px", marginLeft:"5px"}}>
                        Save
                    </Button>               
                </div>
                <br/>
                {/* <pre>
                    {JSON.stringify(inputFields, null, 2)}
                </pre> */}
            </form>
        </div>
      
    </React.Fragment>
  );
};

export default Experience;
