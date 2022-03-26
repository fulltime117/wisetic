import React, { Component } from 'react'
import styles from './MembersActivity.module.css'


import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Link from 'next/link'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';

const listItem = [
    "active","","", "active", ""
]

const ActiveStyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#0DEB14',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
        transform: 'scale(.8)',
        opacity: 1,
        },
        '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
        },
    },
}))(Badge);

const MembersActivity = () =>{
    
    var val = 75;
    return (
        <div className="widget_body">
            <div className="widget_title">
                <Typography variant="subtitle1" gutterBottom>
                    Members Activity
                </Typography>
                <Divider/>
            </div>
            <div className="widget_content member_widget memberactivity">
                <div className="community_item">
                    <List>
                        { 
                            listItem.map((item,j)=>{
                                console.log(item)
                                return (
                                    <ListItem key={j} >
                                            <ListItemAvatar>
                                                {item==="active" 
                                                
                                                ? <ActiveStyledBadge
                                                        overlap="circle"
                                                        anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'right',
                                                        }}
                                                        variant="dot"
                                                    >
                                                        <Avatar alt="Remy Sharp" src="" />
                                                    </ActiveStyledBadge>
                                                : <Avatar alt="Remy Sharp" src="" />
                                                }
                                            </ListItemAvatar>
                                            <ListItemText>
                                                <Typography variant="body2">
                                                    Tom <span style={{fontSize:'12px', color:"var(--text-color-third)"}}>Posted a Job </span>
                                                </Typography>
                                                <div style={{fontSize:"12px",marginBottom:"2px"}}>
                                                    <span style={{fontSize:'12px', color:"var(--text-color-third)", marginRight:"6px"}}>Posted</span>
                                                    "Production Ma..."
                                                </div>
                                                <Typography style={{fontSize:"9px", color:"var(--text-color-third)"}}>2 days ago</Typography>                                                
                                            </ListItemText>
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

export default MembersActivity
