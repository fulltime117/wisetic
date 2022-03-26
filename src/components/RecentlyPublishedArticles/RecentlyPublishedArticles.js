import React, { Component } from 'react'
import styles from './RecentlyPublishedArticles.module.css'


import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Link from 'next/link'


const listItem = [
    "Lorem ipsum","Lorem ipsum","Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"
]

export class RecentlyPublishedArticles extends Component {
    render() {
        var val = 75;
        return (
            <div className="widget_body">
                <div className="widget_title">
                    <Typography variant="subtitle1" gutterBottom>
                        Recently Published articles
                    </Typography>
                    <Divider/>
                </div>
                <div className="widget_content community_widget">
                    <div className="community_item">
                        <List>
                            { 
                                listItem.map((category,j)=>{
                                    return (
                                        <ListItem key={j} style={{padding:"0px", marginBottom:"14px"}}>
                                            <ListItemAvatar>
                                                <div className={styles.community_img_wrapper}>
                                                    <img scr="" alt="" width="100%"></img>
                                                </div>
                                            </ListItemAvatar>
                                            <div className={styles.community_item_wrapper}>
                                                <div className={styles.c_item_title}>
                                                    <Link href='/'>
                                                        <a>
                                                            <h4 style={{margin:0}}>Lorem Ipsum is simply dum...</h4>
                                                        </a>
                                                    </Link>
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
}

export default RecentlyPublishedArticles
