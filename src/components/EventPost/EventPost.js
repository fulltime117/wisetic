import React, { useState } from 'react'
import styles from "./EventPost.module.css"
import 'react-calendar/dist/Calendar.css'; 

import PostHeader from '../PostHeader/PostHeader'
import PostType from '../PostType/PostType'
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CallMadeIcon from '@material-ui/icons/CallMade';
import PostFooter from '../PostFooter/PostFooter'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';  
import Calendar from 'react-calendar';


function EventPost() { 

    const PostHeaderData = {
        main:"Sajjad Hosen SoRon",
        subtext:"Job title | Affiliation",
        date:"4days ago"
    }

    const PostTypeData = {
        title:"Event Type: (type)",
        backColor:"#087C89"
    }

    const commenDatas = [
        {
            avatar:"./images/avatar/2.jpg",
            author:"Liam"
        },{
            avatar:"./images/avatar/3.jpg",
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
        
    const [value, onChange] = useState(new Date());

    return (
        <div className="event-post-page">
            <PostHeader PostHeaderData={PostHeaderData}/>
            <PostType PostTypeData={PostTypeData}/>
            <React.Fragment key="Post main content">
                <div className={styles.post_content}>
                    <Typography variant="subtitle1" label="post title" style={{fontWeight:"bold"}}>
                        Event Description Here: iuyiuyiyuiy uiyuiuyin  trytr y try rt y try rty rt y y tr yrt y tr yrt y rt  yry  h gf hf h t ryu h g ?
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
                    <div className={styles.post_media}>
                        <Calendar
                            onChange={onChange}
                            value={value}
                        />
                    </div>
                    <div className={styles.post_footer}>
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


export default EventPost;
