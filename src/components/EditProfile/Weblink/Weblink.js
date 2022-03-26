import React from 'react'
import styles from './Weblink.module.css'

import { Form, Col} from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';



const Weblink = () =>{
    // skill add field
    const [skillFields, setSkillFields] = React.useState([
        {id:1, linkname:""}
    ]);

    const handleAddWeblink = () => {
        const skillFieldValue = [...skillFields];
        const newField = {id:skillFields[skillFields.length-1].id+1, linkname:""}
        skillFieldValue.push(newField);
        setSkillFields(skillFieldValue);
        console.log(skillFields);
    };

    const removeskillLimit = 1    
   
    const handleRemovelink = rowId => { 
        const values = [...skillFields];
        if (values.length === removeskillLimit) {
            return;
        }

        const newField = skillFields.filter(skillrow => skillrow.id !== rowId);
        setSkillFields(newField);
    };    

    const handleChangeWeblink = (id, e) => { 
        const _skillFields = skillFields.filter( row => {
            if (row.id === id) {
                row.linkname = e.target.value
            }
            return true;
        })
        
        setSkillFields(_skillFields)
    }


    return(
        <React.Fragment>
            <div className="weblink-content">
                <Typography variant="h6">
                    Edit "Weblinks" Information
                </Typography>                 

                {skillFields.map((skillField, ik) => (  
                    <Form.Row key={`${skillField}~${ik}`}>
                        <Form.Group as={Col}>
                            <TextField label="Input your website url" style={{width:"100%"}} value={skillField.linkname} onChange={(e) => handleChangeWeblink(skillField.id, e)} />
                        </Form.Group>
                        <div className={styles.action_buttons}>
                            <IconButton aria-label="add row" onClick={(e) => handleAddWeblink()}>
                                <AddOutlinedIcon fontSize="small" />
                            </IconButton>
                            <IconButton aria-label="delete row" onClick={(e) => handleRemovelink(skillField.id)}>
                                <DeleteIcon fontSize="small" />
                            </IconButton>
                        </div>
                    </Form.Row>
                ))}

                <Form.Row>
                    <Button variant="outlined" color="secondary" style={{marginTop:"15px", marginLeft:"5px"}}>
                            Save
                    </Button>
                </Form.Row>                  
            </div>
        </React.Fragment>
    )
}

export default Weblink