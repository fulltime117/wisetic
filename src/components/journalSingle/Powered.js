import React from 'react'
import styles from "./journalSingle.module.css"

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

const Powered = () =>{
    return(
        <>
            <div className={styles.powereds}>
                <div className={styles.int_contents}>
                    <div className={styles.ab_title} style={{marginBottom:"12px"}}>Powered Community Index (PCI) <span>How do you want to rate this Article?</span></div>
                    <div className={styles.po_cards}>
                        <div className={styles.po_card_header}>
                            <div className={styles.po_card_avatar}>
                                <Avatar alt="" src="./images/avatar/2.jpg" />
                            </div>
                            <div className={styles.po_card_user_info}>                            
                                <div className={styles.po_card_name}> Reader Name Surname <span>02 Hours ago</span> </div>
                                <div className={styles.po_card_job}> Job title | Affiliation </div>
                            </div>
                        </div>
                        <div className={styles.po_card_text}>
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existe
                        </div>  
                        <div className={styles.po_card_footer}>
                            <IconButton aria-label=""  size="small">
                                <img src="./images/post/like.svg" alt="" />
                            </IconButton>
                            <IconButton aria-label=""  size="small">
                                <img src="./images/post/message.svg" alt="" />
                            </IconButton>
                        </div>
                        <div className={styles.re_card_marks}>
                            <div className={styles.re_card_mark} style={{backgroundColor:"#D26E2C"}}></div>                      
                        </div>                      
                    </div>
                    <div className={styles.po_cards}>
                        <div className={styles.po_card_header}>
                            <div className={styles.po_card_avatar}>
                                <Avatar alt="" src="./images/avatar/5.jpg" />
                            </div>
                            <div className={styles.po_card_user_info}>                            
                                <div className={styles.po_card_name}> Reader Name Surname <span>02 Hours ago</span> </div>
                                <div className={styles.po_card_job}> Job title | Affiliation </div>
                            </div>
                        </div>
                        <div className={styles.po_card_text}>
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existe
                        </div>  
                        <div className={styles.po_card_footer}>
                            <IconButton aria-label=""  size="small">
                                <img src="./images/post/like.svg" alt="" />
                            </IconButton>
                            <IconButton aria-label=""  size="small">
                                <img src="./images/post/message.svg" alt="" />
                            </IconButton>
                        </div>
                        <div className={styles.re_card_marks}>
                            <div className={styles.re_card_mark} style={{backgroundColor:"#F0D309"}}></div>                      
                        </div>                       
                    </div>
                    <div className={styles.reply_cards}>
                        <div className={styles.po_card_header}>
                            <div className={styles.po_card_avatar}>
                                <Avatar alt="" src="./images/avatar/1.jpg" />
                            </div>
                            <div className={styles.po_card_user_info}>                            
                                <div className={styles.po_card_name}> Author Name Surname <span>02 Hours ago</span> </div>
                                <div className={styles.po_card_job}> Job title | Affiliation </div>
                            </div>
                        </div>
                        <div className={styles.po_card_text}>
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existe
                        </div>  
                        <div className={styles.po_card_footer}>
                            <IconButton aria-label=""  size="small">
                                <img src="./images/post/like.svg" alt="" />
                            </IconButton>
                            <IconButton aria-label=""  size="small">
                                <img src="./images/post/message.svg" alt="" />
                            </IconButton>
                        </div>                      
                    </div>
                </div>

                <div className={styles.content_type_images}>
                    <div className={styles.content_types}>
                        <img src='./images/journal/Gold.svg'></img>
                        <div className={styles.type_text}>
                            33K <br/> <span style={{color:"#F0D309"}}> 97%</span>
                        </div>
                    </div>
                    <div className={styles.content_types}>
                        <img src='./images/journal/Silver.svg'></img>
                        <div className={styles.type_text}>
                            14 <br/> <span style={{color:"#C7C7C7"}}> 6%</span>
                        </div>
                    </div>
                    <div className={styles.content_types}>
                        <img src='./images/journal/Bronze.svg'></img>
                        <div className={styles.type_text}>
                            03 <br/> <span style={{color:"#D26E2C"}}> 9%</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Powered;