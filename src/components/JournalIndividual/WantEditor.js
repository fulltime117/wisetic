import React from 'react'
import styles from "./JournalIndividual.module.css"
import Button from '@material-ui/core/Button';


const WhatEditor = () =>{
    return(
        <>
            <div className={styles.want_editor}>
                <div className={styles.want_ediotr_text}>Want to Become Editor ?</div>
                <div className={styles.want_footer_button}>
                    <Button variant="outlined" color="secondary">Join Us</Button>
                </div>
            </div> 
        </>
    )
}

export default WhatEditor;
