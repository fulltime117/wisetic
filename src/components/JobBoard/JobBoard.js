import React, { Component } from 'react'
import styles from './JobBoard.module.css'


import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Link from 'next/link'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

const listItem = [
    "./images/post/logo1.png","./images/post/logo6.png","./images/post/logo3.png", "./images/post/logo2.png", "./images/post/logo4.png", "./images/post/logo7.png", "./images/post/logo5.png"
]

const JobBoard = () => {

    return (
        <div className="widget_body">
            <div className="widget_title">
                <Typography variant="subtitle1" gutterBottom>
                    Job Posts
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
                                                <img src={item} alt="" width="100%" ></img>
                                            </div>
                                        </ListItemAvatar>
                                        <div className={styles.community_item_wrapper}>
                                            <div className={styles.c_item_title}>
                                                <Link href='/'>
                                                    <a>
                                                        <h4 style={{margin:0}}>Lorem Ipsum..</h4>
                                                    </a>
                                                </Link>
                                                <p>Poznan, Poland &nbsp;<LocationOnOutlinedIcon /></p>
                                                <p className={styles.job_salary}> Salary <ArrowForwardIosOutlinedIcon />  350$-500$ </p>

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

export default JobBoard
