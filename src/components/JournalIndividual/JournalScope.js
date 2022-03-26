import React from 'react'
import styles from "./JournalIndividual.module.css"

import IconButton from '@material-ui/core/IconButton';
import CallMadeIcon from '@material-ui/icons/CallMade';




const JournalScope = () =>{


    return(
        <>            
            <div className={styles.editor_borard}>
                <div className={styles.section_title} style={{justifyContent:"flex-start"}}>
                    <div className={styles.title_text}>Journal Scope</div>                    
                </div>
                <div className={styles.scope_card}>
                    <div className={styles.scope_text}>
                        Published on March 31st, 2019 What is Business Blogging? Business blogging is as essential to marketing a business as the yellowpages.  blogging is as essential to marketing a business as the yellowpages... 
                    </div>
                    <div className={styles.scope_date_info}>Last Updated: 14, March 2020</div>
                    <div className={styles.active_item}>
                        <IconButton aria-label="active show" color="inherit" className={styles.icon_button}>
                            <CallMadeIcon />
                        </IconButton>
                    </div>
                </div>
                               
            </div>
        </>
    )
}

export default JournalScope;
