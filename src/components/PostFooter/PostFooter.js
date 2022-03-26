import React,{useState,useRef} from 'react'
import styles from "./PostFooter.module.css"

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import { Button,Tooltip,OverlayTrigger,Overlay  } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
    root: {
        
    },

    chip:{
        width:"33%",
        height:"30px",
        color:"var(--text-color)",
        fontSize:"14px",
        borderRadius:"4px",
        background:"transparent",
    },

    footericon: {
        padding:"3px",
    },

  }));

const CommentOveral = () =>{
    const classes = useStyles();

    const [show, setShow] = useState(false);
    const target = useRef(null);

    const hideOverlay = () =>{
        
    }

  
    return (
      <>
        <Chip className={classes.chip} avatar={<Avatar src="./images/post/like.svg" className={classes.footericon}></Avatar>} label="35" ref={target} onMouseEnter={() => setShow(!show)} onMouseLeave={() => hideOverlay} />
        <Overlay 
            target={target.current} 
            show={show}
            placement="top"
        >
          {(props) => (
            <div id="overlay-emojis" {...props} onMouseLeave={() => setShow(!show)} >
              <img onClick={() => hideOverlay} src="./images/like.svg" alt="Congratulations" width="30px"/>
              <img onClick={() => hideOverlay} src="./images/fire-cracker.svg" alt="appreciate" width="30px"/>
              <img onClick={() => hideOverlay} src="./images/040-sad.svg" alt="Sad" width="30px"/>
              <img onClick={() => hideOverlay} src="./images/022-disappointed.svg" alt="Disappointed" width="30px"/>
              <img onClick={() => hideOverlay} src="./images/010-disappointment.svg" alt="Support" width="30px"/>
              <img onClick={() => hideOverlay} src="./images/005-starstruck.svg" alt="Amazing" width="30px"/>
            </div>
          )}
        </Overlay>
        <Chip avatar={<Avatar src="./images/post/message.svg" className={classes.footericon}></Avatar>} label="50"  className={classes.chip} />
        <Chip avatar={<Avatar src="./images/post/share.svg" className={classes.footericon}></Avatar>} label="2"  className={classes.chip} />
      </>
    );
}

export default function PostFooter() {            
    const classes = useStyles();
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return (
        <div className={classes.root}>
            <div className="views-number">
                26 Views
            </div>
            <div className="chip_button_wrapper">
                <div className={styles.post_footer}>
                    <div className={styles.active_button_wrapper}>    
                        <CommentOveral/>
                    </div>
                </div>
            </div>
        </div>        
    )
}