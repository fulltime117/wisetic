import React, { Component } from 'react'
import styles from './Latestupdates.module.css'


import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


const listItem = [
    "Lorem ipsum","Lorem ipsum","Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"
]

export class Latestupdates extends Component {
    render() {
        var val = 75;
        return (
            <div className="widget_body">
                <div className="widget_title">
                    <Typography variant="subtitle1" gutterBottom>
                        Latest updates
                    </Typography>
                    <Divider/>
                </div>
                <div className="widget_content">
                    <div className={styles.latest_updates}>
                        <List style={{padding:'0px'}}>
                            { 
                                listItem.map((category,j)=>{
                                    return (
                                        <ListItem key={j} style={{paddingLeft:"0", paddingTop:"0"}}>
                                            <ListItemAvatar>
                                                <Avatar src="./images/avatar/5.jpg" alt=""/>
                                            </ListItemAvatar>
                                            <ListItemText primary="Lorem ipsum dolor sit amet, adipiscing." secondary="Posted Jan 9, 2014" />
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

export default Latestupdates
