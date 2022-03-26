import React from 'react'
import styles from "./ProfileSectionCardHeader.module.css"

import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import EditIcon from '@material-ui/icons/Edit';
import PostAddIcon from '@material-ui/icons/PostAdd';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import ReportIcon from '@material-ui/icons/Report';
import DeleteIcon from '@material-ui/icons/Delete';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

const useStyles = makeStyles((theme) => ({
    root: {
        
    },

    useravartar:{
        width:"60px",
        height:"60px",
        marginRight:"10px",
        border:"3px solid #D9D9D9",
    },

    posttitle: {
        color: "var(--text-color)",
    }

  }));

  const ProfileSectionCardHeader = (props) => { 
    //get header data form parents
    const {PostHeaderData} = props;
      
    // drodown menu
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    
    const classes = useStyles();
    return (
        <div className={classes.root} className="post-header">
            <div className={styles.post_header}>
                <div className={styles.post_header_left}>
                    <div className={classes.posttitle}>
                        <Typography variant="subtitle1" style={{fontWeight:"bold"}}>
                            {PostHeaderData?.main}
                        </Typography>                        
                        <Typography variant="caption">
                            {PostHeaderData?.date}    
                        </Typography>
                    </div>
                </div>                

                <div className={styles.post_header_right}>                                       
                    <IconButton
                        aria-label="post action"
                        color="inherit"
                        onClick={handleClick}
                    >
                        <KeyboardArrowDownOutlinedIcon />
                    </IconButton>
                    <Menu
                        id="post-menu"
                        anchorEl={anchorEl}
                        getContentAnchorEl={null}
                        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                        transformOrigin={{ vertical: "top", horizontal: "center" }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}                        
                    >
                        <MenuItem onClick={handleClose}><TrendingUpOutlinedIcon/>Boost this Post</MenuItem>
                        <MenuItem onClick={handleClose}><EditIcon/>Edit</MenuItem>
                        <MenuItem onClick={handleClose}><FileCopyIcon/>Copy link to post</MenuItem>
                        <MenuItem onClick={handleClose}><PostAddIcon/>Embed this post</MenuItem>
                        <MenuItem onClick={handleClose}><NotInterestedIcon/>Unfollow</MenuItem>
                        <MenuItem onClick={handleClose}><VolumeOffIcon/>Mute</MenuItem>
                        <MenuItem onClick={handleClose}><VisibilityOffIcon/>I don't want to see this</MenuItem>
                        <MenuItem onClick={handleClose}><ReportIcon/>Report</MenuItem>
                        <MenuItem onClick={handleClose}><DeleteIcon/>Delete</MenuItem>
                    </Menu>
                </div>                            
            </div>
            <Divider />                   
        </div>
    )
}

export default ProfileSectionCardHeader