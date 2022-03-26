import React from 'react';
import styles from "./Connections.module.css";
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import Chip from '@material-ui/core/Chip';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

const ActiveStyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#0DEB14',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
        position: 'absolute',        
        width:"20px",
        height:"20px",
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

const SmallAvatar = withStyles((theme) => ({
    root: {
      width: 17,
      height: 17,
      border: `2px solid ${theme.palette.background.paper}`,
    },
  }))(Avatar);



const useStyles = makeStyles({
    root: {
      width: "100%",      
    },

    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },

    large: {
       width: 120,
       height:120,
       margin:"auto"
    },

    follow_row: {
        display: "flex",
        justifyContent:"space-between",
        width:"100%"
    },

    cardcontent:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        paddingTop:"12px"
    },

    chip: {
        height:'24px',
        fontSize:"9px"
    }
});

const ConnectionCard = (props) =>{
    const {card,j} = props
    const classes = useStyles();

    return(
        <div className={styles.connection_card} key={j}>
            <Card className={classes.root}>
                <CardContent className={classes.cardcontent}>
                    <div style={{display:"flex", justifyContent:"space-between",width:"100%", alignItems:"center"}}>
                        <Typography style={{fontSize:"12px", fontWeight:"bold"}}>
                            <span>{card.follows}</span> follows
                        </Typography> 
                        <Typography >
                            <MoreHorizOutlinedIcon fontSize="small" />
                        </Typography>                           
                    </div>
                    {card.isactive
                    
                    ?<ActiveStyledBadge
                        overlap="circle"
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                        }}
                        variant="dot"
                    >
                        <Avatar alt="user photo" src={card.avartarurl} className={classes.large} />
                    </ActiveStyledBadge>

                    :<Badge
                        overlap="circle"
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                        }}
                        badgeContent={<SmallAvatar alt="Remy Sharp"  className="offline-badge"/>}
                        >
                        <Avatar alt="Travis Howard" src={card.avartarurl} className={classes.large} />
                    </Badge>
                    }
                    
                    <div className="card-name-wrapper">
                        <Typography variant="subtitle2"  style={{marginTop:"10px", fontWeight:"bold"}}>
                            {card.name}
                        </Typography>
                        <Typography variant="caption" gutterBottom>
                            {card.job}
                        </Typography>
                        {card.ischecked && <div class="c_widget_item_check"></div> }
                    </div>


                    <Typography variant="caption" gutterBottom style={{marginTop:"16px"}}>
                        Editor-in- Chief | Wisetic Biotechnology...
                    </Typography>

                    <div className="card-chip-wrapper">
                    { 
                        card.skill.map((skill,i)=>{
                        return (
                                <Chip key={i} label={skill} variant="outlined" className={classes.chip}/>
                            )
                        })
                    }
                        <div className="pluse-icon-wraper">
                            <AddOutlinedIcon/><span>{card.plus}</span>
                        </div>
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
        </div> 
    )
}

export default ConnectionCard