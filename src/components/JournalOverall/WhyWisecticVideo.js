import React from 'react'
import styles from "./JournalOveralBanner.module.css"

const WhyVideo = () =>{
    return(
        <>
            <div className={styles.why_video}>
                <div className={styles.video_screen}>                    
                    <iframe 
                        src="https://www.youtube.com/embed/iG9CE55wbtY?rel=0;&autoplay=1&mute=1&loop=1&playlist=iG9CE55wbtY"
                        frameborder="0" 
                        allowfullscreen 
                        include
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        </>
    )
}

export default WhyVideo;
