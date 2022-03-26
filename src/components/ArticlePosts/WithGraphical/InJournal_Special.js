import React, { Component } from 'react'
import styles from "./WithGraphical.module.css"

import PostHeader from '../../PostHeader/PostHeader'
import PostType from '../../PostType/PostType'
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

function JournalRearch(props) {
    const {article, review, methods } = props

    const PostHeaderData = {
        main:"Journal Name",
        subtext:"Open Access | Wisetic International Journal",
        date:"2days ago"
    }

    

    const commenDatas = [
        {
            avatar:"./images/avatar/6.jpg",
            author:"Liam"
        },{
            avatar:"./images/avatar/5.jpg",
            author:"Noah"
        },{
            avatar:"./images/avatar/4.jpg",
            author:"Oliver"
        }
    ]

    const authorData = {
        time:'14, March 2020',
        DOI:"Submission Open"
    }
        
    

    return (
        <div className="journal-paper">
            <React.Fragment key="Post main content">
            <div className="post-main-content widthgraphycal">
                <div className={styles.post_content}>
                    <Typography variant="subtitle1" label="post title" style={{fontWeight:"bold", padding:"0px 32px"}}>
                        Why COVID-19 is effecting people with the blood group +ve (Antigen)
                    </Typography>
                    <div className={styles.comment_items}>
                        { 
                            commenDatas.map((comment,j)=>{
                            return (
                                <div key={j} className={styles.comment_meta}>
                                    <Avatar alt="user photo" src={comment.avatar} style={{width:"32px", height:"32px"}}/>
                                    <Typography variant="body2" style={{marginLeft:"6px"}}>{comment.author}</Typography>
                                </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.comment_media}>
                        <img src="./images/post/1.jpg" alt="post media" width="100%"/>
                    </div>
                    <div className={styles.comemt_info}>
                        Published on March 31st, 2019 What is Business Blogging? Business blogging is as essential to marketing a business as the yellowpages.  blogging is as essential to marketing a business as the yellowpages. 
                    </div>
                    <div className={styles.post_footer} style={{marginBottom:"20px", position:"relative"}}>
                        <div className={styles.author_data}>
                            <Typography variant="body2" style={{marginLeft:"6px"}}><strong>Created: </strong>{authorData.time}</Typography>
                            <Typography variant="body2" style={{marginLeft:"6px"}}>{authorData.DOI}</Typography>
                        </div>
                        <div className={styles.author_submit}>
                            <Button variant="outlined" color="secondary">
                                Submit Your Manuscript
                            </Button>
                        </div>                        
                    </div>
                </div>
            </div>
                
            </React.Fragment>           
        </div>
    )
}


export default JournalRearch;
