import React from 'react'
import styles from "./JournalOveralBanner.module.css"

const WhyWisecticFeature = () =>{
    return(
        <>
           <div className={styles.whyfeatures}>
                <div className={styles.feature_text}> Why Wisetic ?</div>  
                <div className={styles.feature_icons}>
                    <div className={styles.feature_icons_row}>
                        <img src="./images/journal/Group 112.svg" alt="icon svg"/>
                        <img src="./images/journal/Group 114.svg" alt="icon svg"/>
                    </div>
                    <div className={styles.feature_icons_row}>
                        <img src="./images/journal/Group 118.svg" alt="icon svg"/>
                        <img src="./images/journal/Group 116.svg" alt="icon svg"/>
                    </div>
                </div> 
            </div> 
        </>
    )
}

export default WhyWisecticFeature;