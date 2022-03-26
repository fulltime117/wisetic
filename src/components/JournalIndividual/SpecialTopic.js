import React from 'react'
import styles from "./JournalIndividual.module.css"

import SpecialTopic from '../ArticlePosts/WithGraphical/InJournal_Special'





const WhyWisetic = () =>{


    return(
        <>            
            <div className={styles.editor_borard}>
                <div className={styles.section_title} style={{justifyContent:"flex-start"}}>
                    <div className={styles.title_text}>Special Topics</div>                    
                </div>
                <SpecialTopic/>
                <SpecialTopic/>
            </div>
        </>
    )
}

export default WhyWisetic;
