import React, { Component } from 'react'
import styles from "./QuestionPost.module.css"

import PostHeader from '../PostHeader/PostHeader'
import PostType from '../PostType/PostType'
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CallMadeIcon from '@material-ui/icons/CallMade';
import PostFooter from '../PostFooter/PostFooter'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';  


function QuestionPost() { 

    const PostHeaderData = {
        main:"Sajjad Hosen SoRon",
        subtext:"Job title | Affiliation",
        date:"3days ago"
    }

    const PostTypeData = {
        title:"Question",
        backColor:"#9B5D8D"
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
        <div>
            <PostHeader PostHeaderData={PostHeaderData}/>
            <PostType PostTypeData={PostTypeData}/>
            <React.Fragment key="Post main content">
                <div className={styles.post_content}>
                    <Typography variant="subtitle1" label="post title" style={{fontWeight:"bold", paddingLeft:"32px"}}>
                        How we can create Graphene from Biochar through green chemistry method only using plant extract?
                    </Typography>
                    <div className={styles.comment_items}>
                        { 
                            commenDatas.map((comment,j)=>{
                            return (
                                <div key={j} className={styles.comment_meta2}>
                                    <Avatar alt="user photo" src={comment.avatar} style={{width:"32px", height:"32px"}} className="comment_avatar"/>                                    
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
                            <VisibilityOutlinedIcon /> 35
                        </div>
                        <div className={styles.active_item}>
                            <IconButton aria-label="active show" color="inherit" className={styles.icon_button}>
                                <CallMadeIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </React.Fragment>           
            <PostFooter />
        </div>
    )
}


export default QuestionPost;
