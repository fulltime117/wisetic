import React from 'react'
import styles from "./JournalOveralBanner.module.css"

import Typography from '@material-ui/core/Typography';

const JournalOveralBanner = () => { 
    

    return (
        <>
            <div className="banner-video-wrapper">
                <video autoPlay muted loop style={{
                    width:"100%",
                    position:"absolute",
                    top:"0",
                    right:"0",    
                }}>
                    <source src="./video/cover.mp4" type="video/mp4" />
                    <source src="./video/cover.mp4" type="video/ogg" />
                    Your browser does not support the video tag.
                </video>

                <div className={styles.overalls}>
                    <div className={styles.overalls_header}>
                        <Typography className={styles.banner_text} gutterBottom>
                            Next-Generation Publishing System
                        </Typography>
                    </div>
                    <div className={styles.banner_second_text}>Artificial Intelligence & Community Powered Platform</div>
                    <div className={styles.banner_small_text}>Breaking Barriers with Open Access</div>
                </div>

            </div>
        </>
    )
}

export default JournalOveralBanner;