import React from 'react'
import styles from "./JournalOveralBanner.module.css"
import { useRouter } from 'next/router'

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Data = [
    {
        coverimage:"./images/post/1.jpg",
        title:"The Truth About Business Blogging",
        content:"Published on March 31st, 2019 What is Business Blogging? Business blogging is as essential to marketing a business as the yellowpages. A business blog is a marketing…",
        authorphoto:"./images/avatar/2.jpg",
        authorname:"Brigtte Marie",
        authorjob:"Professor | University of Cagliari, Italy"
    },
    {
        coverimage:"./images/post/2.jpg",
        title:"The Truth About Business Blogging",
        content:"Published on March 31st, 2019 What is Business Blogging? Business blogging is as essential to marketing a business as the yellowpages. A business blog is a marketing…",
        authorphoto:"./images/avatar/4.jpg",
        authorname:"Brigtte Marie",
        authorjob:"Professor | University of Cagliari, Italy"
    }
]


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      padding:"0px"
    },
    inline: {
      display: 'inline',
    },
  }));
  

const RecentDevelopment = () => {
    const classes = useStyles();
    const router = useRouter()
    return (
        <>
            <div className={styles.recent_developments}>
                <div className={styles.development_title}>
                    Recent Development in Research Publishing
                </div>
                <div className={styles.development_cards}>
                    { 
                        Data.map((data,j)=>{
                            return (
                                <div className={styles.cards} key={j}>
                                    <div className={styles.card_cover}>
                                        <img src={data.coverimage}/>
                                    </div>
                                    <div className={styles.card_title}>{data.title}</div>
                                    <div className={styles.card_content}>{data.content}</div>
                                    <div className={styles.authore_cards}>
                                        <div className={styles.authore_avatar}>
                                            <List className={classes.root}>      
                                                <ListItem alignItems="flex-start">
                                                    <ListItemAvatar>
                                                    <Avatar alt="Cindy Baker" src={data.authorphoto} />
                                                    </ListItemAvatar>
                                                    <ListItemText
                                                        style={{fontSize:"12px", paddingTop:"4px"}}
                                                        primary={data.authorname}
                                                        secondary={data.authorjob}
                                                    />
                                                </ListItem>
                                            </List>
                                        </div>
                                        <div className={styles.authore_link}>

                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
                <div className={styles.development_footer}>
                    <div className={styles.footer_button}>                    
                        <Button variant="outlined" color="secondary" onClick={() => router.push('/journalIndividual')}>Read More</Button>
                    </div>
                    <div className={styles.footer_button}>
                        <Button variant="outlined" color="secondary" onClick={() => router.push('/journalIndividual')}>Read More</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecentDevelopment;