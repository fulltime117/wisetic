import React, { Component } from 'react'
import styles from './SkillWidget.module.css'


import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Link from 'next/link'

import Button from '@material-ui/core/Button';

const listItem = [
    "./images/post/skill1.jpg","./images/post/skill2.jpg","./images/post/skill3.jpg", "./images/post/skill4.jpg", "./images/post/skill5.jpg"
]

const SkillWidget = () => {

    return (
        <div className="widget_body">
            <div className="widget_title">
                <Typography variant="subtitle1" gutterBottom>
                    Skills and Courses
                </Typography>
                <Divider/>
            </div>
            <div className="widget_content community_widget">
                <div className="community_item">
                    <List>
                        { 
                            listItem.map((item,j)=>{
                                // console.log(item)
                                return (
                                    <ListItem key={j} style={{padding:"0px", marginBottom:"14px"}}>
                                        
                                        <ListItemAvatar>
                                            <div className={styles.community_img_wrapper}>
                                                <img src={item} alt="" height="100%" ></img>
                                            </div>
                                        </ListItemAvatar>
                                        <div className={styles.community_item_wrapper}>
                                            <div className={styles.c_item_title}>
                                                <Link href='/'>
                                                    <a>
                                                        <h4 style={{margin:0}}>John <span style={{fontSize:"11px", pointerEvents:"none", color:"var(--text-color-third)"}}>Earned a </span></h4>
                                                    </a>
                                                </Link>
                                                <div><span style={{fontSize:"13px"}}>"3D Printing-Mo..</span> </div>
                                                <div style={{display:"flex"}}>
                                                    <p>2 days ago</p>
                                                    <Button variant="outlined" color="secondary">
                                                        Attend
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </div>
            </div>
        </div>
    )
   
}

export default SkillWidget
