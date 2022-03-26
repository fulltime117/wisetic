import React from 'react'
import styles from './Info.module.css'

import { Form, Col} from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';



const Info = () =>{
    // skill add field
    
    return(
        <React.Fragment>
            <div className="weblink-content">
                <Typography variant="h6">
                    Edit "Honours/Awards, Memberships, Certificates" Information
                </Typography>
                <Form.Row>
                    <Form.Group as={Col}>
                        <TextField label="Honours/Awards Information here" style={{width:"100%"}}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>                        
                        <TextField label="Memberships Information here" style={{width:"100%"}}/>                        
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>                        
                        <TextField label="Certificates Information here" style={{width:"100%"}}/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Button variant="outlined" color="secondary" style={{marginTop:"15px", marginLeft:"5px"}}>
                        Save
                    </Button>
                </Form.Row>                  
            </div>
        </React.Fragment>
    )
}

export default Info