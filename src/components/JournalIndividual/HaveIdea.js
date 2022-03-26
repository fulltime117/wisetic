import React from 'react'
import styles from "./JournalIndividual.module.css"
import Button from '@material-ui/core/Button';


const WhatEditor = () =>{
    return(
        <>
            <div className={styles.have_idea}>
                <div className={styles.have_idea_text}>Have an idea?</div>
                <div className={styles.have_idea_text}>Propose a Research  <br/>Topic</div>
                <div className={styles.section_footer_button}>
                    <Button variant="outlined" color="secondary">Suggest Now</Button>
                </div>
            </div> 
        </>
    )
}

export default WhatEditor;
