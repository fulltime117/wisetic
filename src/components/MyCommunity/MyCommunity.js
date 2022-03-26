import React, { Component } from 'react';
import styles from "./MyCommunity.module.css";


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';


const data = [
    {},{},{},{},{},{}
]


const useStyles = makeStyles({
    root: {
      width: "100%",      
    },

    
    media: {
    height: 140,
    },

    content: {
        height: 140,
        display: "flex",
        flexDirection: "column",
        justifyContent:'center',
        alignItems:'center',
    }
});

export default function Connections() {

    const classes = useStyles();
    
        return (
            <div className="my-community-page" >
                <div className={styles.p_title}>
                    <Typography variant="h5">
                        Community
                    </Typography>                   
                </div>
                <Divider />
                <div className={styles.community_body}>
                    { 
                        data.map((card,j)=>{
                        return ( 
                            <div className={styles.community_card} key={j}>
                                <Card className={classes.root}>
                                    <CardMedia
                                        className={classes.media}
                                        image="./images/post/blog1.jpg"
                                    />
                                    <CardContent className={classes.content} style={{paddingTop:"64px"}}>                                       
                                        <Typography  variant="subtitle1"  style={{marginTop:"15px"}}>
                                            Group Name Here
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Location of Company
                                        </Typography>
                                        <div style={{display:"flex",width:"100%", justifyContent:"space-between", marginTop:"14px",marginBottom:"7px", alignItems:"center"}}>
                                            <Typography variant="caption" component="p">
                                                40 Posts/Month
                                            </Typography> 
                                            <Typography variant="caption" component="p" style={{fontWeight:"bold"}}>
                                                300 Followers
                                            </Typography>
                                        </div>                                                                                                                      
                                    </CardContent>
                                    <CardActions className={styles.cardaction}>
                                        <Button aria-label="state" style={{borderRight:"1px solid var(--border-color)"}} >
                                            <div className="add-friend-icon"></div>
                                        </Button>
                                        <Button aria-label="state" >
                                            <div className="conversation-icon"></div>
                                        </Button>
                                    </CardActions>
                                </Card>
                                <div className={styles.card_center}>
                                    <div className={styles.mark_image}>
                                        <img src="./images/post/logo3.png"></img>
                                    </div>
                                </div>
                            </div> 
                        )
                        })
                    } 
                </div>
            </div>            
            
        )
    
}


