import React from 'react'
import styles from "./JournalIndividual.module.css"

import IconButton from '@material-ui/core/IconButton';
import CallMadeIcon from '@material-ui/icons/CallMade';
import WhyVideo from '../WhyVideo/WhyVideo'




const WhyWisetic = () =>{


    return(
        <>            
            <div className={styles.editor_borard}>
                <div className={styles.section_title} style={{justifyContent:"flex-start"}}>
                    <div className={styles.title_text}>Why Wisetic ?</div>                    
                </div>
                <div className={styles.why_video}>
                    <iframe 
                        src="https://www.youtube.com/embed/iG9CE55wbtY?rel=0;&autoplay=1&mute=1&loop=1&playlist=iG9CE55wbtY"
                        frameborder="0" 
                        allowfullscreen 
                        include
                        width="100%"
                        height="205"
                    />
                </div>
            </div>
        </>
    )
}

export default WhyWisetic;
