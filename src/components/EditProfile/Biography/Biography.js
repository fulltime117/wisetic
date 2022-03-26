import React from 'react'
import styles from './Biography.module.css'

import { Form,} from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const EditProfile = () =>{
    return(
        <React.Fragment>
            <div className="bioEdit-content">
                <div className={styles.bioEdit}>
                    <Form.Group controlId="bioEdit.ControlTextarea1">
                        <Typography variant="h6">
                            Edit "Biography" Information
                        </Typography>                    
                        <Form.Control as="textarea" rows={4} />
                        <Button variant="outlined" color="secondary">
                            Save
                        </Button>
                    </Form.Group>
                </div>                
            </div>
        </React.Fragment>
    )
}

export default EditProfile