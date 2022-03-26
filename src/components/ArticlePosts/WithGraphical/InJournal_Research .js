import React, { Component } from 'react'
import styles from "./WithGraphical.module.css"

import PostHeader from '../../PostHeader/PostHeader'
import PostType from '../../PostType/PostType'
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CallMadeIcon from '@material-ui/icons/CallMade';
import PostFooter from '../../PostFooter/PostFooter'
    


function JournalRearch(props) {
    const {article, review, methods } = props

    const PostHeaderData = {
        main:"Journal Name",
        subtext:"Open Access | Wisetic International Journal",
        date:"2days ago"
    }

    const PostTypeData = {
        title: article ? "Research Article" : (review ? 'Comprehensive Review' : 'Innovative Methods'),
        backColor: article ? "#CDBD14" : (review ? '#564B89' : '#4DBD55'),
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
        DOI:"dsfd56456h767"
    }
        
    

    return (
        <div className="journal-paper">
            <PostType PostTypeData={PostTypeData}/>
            <React.Fragment key="Post main content">
            <div className="post-main-content widthgraphycal">
                <div className={styles.post_content}>
                    <Typography variant="subtitle1" label="post title" style={{fontWeight:"bold", padding:"0px 32px"}}>
                        Antimicrobial Potential of Green Synthesized CeO Nanoparticles in Callus Induction Root Regeneration of Green Onion
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
                    <div className={styles.post_footer}>
                        <div className={styles.author_data}>
                            <Typography variant="body2" style={{marginLeft:"6px"}}><strong>Accepted: </strong>{authorData.time}</Typography>
                            <Typography variant="body2" style={{marginLeft:"6px"}}><strong>DIO: </strong>{authorData.DOI}</Typography>
                        </div>
                        <div className={styles.active_item}>
                            <IconButton aria-label="active show" color="inherit" className={styles.icon_button}>
                                <CallMadeIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>                
            </React.Fragment>           
            <PostFooter />
        </div>
    )
}


export default JournalRearch;
