import React, { useState } from 'react'
import styles from "./ProjectPost.module.css"

import PostHeader from '../PostHeader/PostHeader'
import PostType from '../PostType/PostType'
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CallMadeIcon from '@material-ui/icons/CallMade';
import PostFooter from '../PostFooter/PostFooter';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


function Poll() { 
    const PostHeaderData = {
        main:"Sajjad Hosen SoRon",
        subtext:"Job title | Affiliation",
        date:"6days ago"
    }

    const PostTypeData = {
        title:"Research Project",
        backColor:"#087C89"
    }

    const commenDatas = [
        {
            avatar:"./images/avatar/6.jpg",
            author:"Liam"
        },{
            avatar:"./images/avatar/2.jpg",
            author:"Noah"
        },{
            avatar:"./images/avatar/5.jpg",
            author:"Oliver"
        }
    ]

    const authorData = {
        time:'2300',       
    }
        
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
        checkedD: true,
        checkedE: true,
        checkedF: true,
        checkedG: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
   

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
                        <div className={styles.task_box}>
                            <div className={styles.task_title}>
                                <Typography variant="subtitle1">Tasks (Key Words)</Typography>
                            </div>
                            <Divider/>
                            <div className={styles.task_items}>
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={state.checkedA}
                                        onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                    }
                                    label="Lorem ipsum dolor sit amet"
                                />
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={state.checkedB}
                                        onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                        
                                    />
                                    }
                                    label="Lorem ipsum dolor sit amet"
                                />
                                <FormControlLabel 
                                    control={
                                    <Checkbox 
                                        name="checkedC" 
                                        color="default"
                                    />
                                    } 
                                    label="Lorem ipsum dolor sit amet" 
                                />
                                <FormControlLabel 
                                    control={
                                    <Checkbox 
                                        name="checkedC" 
                                        color="default"
                                    />
                                    } 
                                    label="Lorem ipsum dolor sit amet" 
                                />
                                <FormControlLabel 
                                    control={
                                    <Checkbox 
                                        name="checkedC" 
                                        color="default"
                                    />
                                    } 
                                    label="Lorem ipsum dolor sit amet" 
                                />
                            </div>
                            
                        </div>
                    </div>
                    <div className={styles.post_footer}>                        
                        <div className={styles.author_data}>
                            <Typography variant="body2" style={{marginLeft:"6px"}}><strong>Vot: </strong>{authorData.time}</Typography>
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


export default Poll;
