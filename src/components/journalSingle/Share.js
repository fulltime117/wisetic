import React from 'react'
import styles from './journalSingle.module.css'

const Data = [
    "./images/twitter icon.png",
    "./images/faceBook.png",
    "./images/youtube.png",
    "./images/whatsApp.png"
]

const Share = () =>{
    return(
        <>
            <div className={styles.share_contents}>
                {/* <div className={styles.share_text}>Share</div> */}
                <div className={styles.share_tools}>
                    { 
                        Data.map((data,j)=>{
                            return (
                                <div className={styles.social_icons}>
                                    <div className={styles.social_mam_icon}>
                                        <img src={data} alt="social-icons"/>
                                    </div>
                                    <div className={styles.social_badge_icon}>
                                        <div className={styles.badge_num}>112</div>
                                    </div>                        
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Share;
