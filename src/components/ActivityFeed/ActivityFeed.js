import React,{useEffect} from 'react'
// import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
import styles from './ActivityFeed.module.css'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Menu from '@material-ui/core/Menu';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

import MediaPost from '../PostMedia/PostMedia'
import EventPost from '../PostEvent/PostEvent'
import BlogPost from '../PostBlog/PostBlog'
import JobPost from '../PostJob/PostJob'
import Document from '../PostDocument/PostDocument'
import Question from '../PostQuestion/PostQuestion'
import Poll from '../PostPoll/PostPoll';
import Project from '../PostProject/PostProject';

    const useStyles = makeStyles((theme) => ({
        root: {
            
        },

        activepaper:{
            border: "1px solid #70707038",
            fontSize: "1.3rem",       
        },

        useravartar:{
            width:"60px",
            height:"60px",
            margin:"0px 9px"
        }
        
    }));

    const postTooolStyles = makeStyles((theme) => ({
        input: {
        display: 'none',
        },
    }));    

    const PostToolBar = (props) =>{ 
        const { poststate, actionClose, mediaActive, eventActive, blogActive, jobActive, documentActive, questionActive, pollActive, projectActive} = props; 

        const classes = postTooolStyles();

        // toggle emoji 
        const [anchorEl, setAnchorEl] = React.useState(null);

        const open = Boolean(anchorEl);

        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };

        return(
            <div className={styles.post_action}>
                <div className="post-tool">
                    <Tooltip title="Media" placement="top" arrow>
                        <div style={{display:"inline-block"}}>
                            <IconButton 
                                aria-label="Media"                                
                                size="small"
                                onClick={() => mediaActive()}
                            >
                                <div  className={poststate.media?"postIcon active post-media":"postIcon post-media"}></div>
                            </IconButton>
                        </div>        
                    </Tooltip>
                    <Tooltip title="Event" placement="top" arrow>
                        <div style={{display:"inline-block"}}>
                            <IconButton 
                                aria-label="Event"                                
                                size="small"
                                onClick={() => eventActive()}
                            >
                                <div className={poststate.event?"postIcon active post-event":"postIcon post-event"}></div>
                            </IconButton>
                        </div>        
                    </Tooltip>
                    <Tooltip title="Blog" placement="top" arrow>
                        <div style={{display:"inline-block"}}>
                            <IconButton 
                                aria-label="Blog"                                
                                size="small"
                                onClick={() => blogActive()}
                            >
                            <div className={poststate.blog?"postIcon active post-blog":"postIcon post-blog"}></div>
                            </IconButton>
                        </div>        
                    </Tooltip>
                    <Tooltip title="Job" placement="top" arrow>
                        <div style={{display:"inline-block"}}>
                            <IconButton 
                                aria-label="Job"                                
                                size="small"
                                onClick={() => jobActive()}
                            >
                                <div className={poststate.job?"postIcon active post-job":"postIcon post-job"}></div>
                            </IconButton>
                        </div>        
                    </Tooltip>
                    <Tooltip title="Documents" placement="top" arrow>
                        <div style={{display:"inline-block"}}>
                            <IconButton 
                                aria-label="Documents"                                
                                size="small"
                                onClick={()=> documentActive()}
                            >
                                <div className={poststate.documents?"postIcon active post-documents":"postIcon post-documents"}></div>
                            </IconButton>
                        </div>        
                    </Tooltip>
                    <Tooltip title="Question" placement="top" arrow>
                        <div style={{display:"inline-block"}}>
                            <IconButton 
                                aria-label="Question"                                
                                size="small"
                                onClick={()=>questionActive()}
                            >
                                <div className={poststate.question?"postIcon active post-question":"postIcon post-question"}></div>
                            </IconButton>
                        </div>        
                    </Tooltip> 
                    <Tooltip title="Poll" placement="top" arrow>
                        <div style={{display:"inline-block"}}>
                            <IconButton 
                                aria-label="Poll"                                
                                size="small"
                                onClick={()=>pollActive()}
                            >
                                <div className={poststate.poll?"postIcon active post-poll":"postIcon post-poll"}></div>
                            </IconButton>
                        </div>        
                    </Tooltip>
                    <Tooltip title="Project" placement="top" arrow>
                        <div style={{display:"inline-block"}}>
                            <IconButton 
                                aria-label="Project"                                
                                size="small"
                                onClick={()=>projectActive()}
                            >
                                <div className={poststate.project?"postIcon active post-project":"postIcon post-project"}></div>
                            </IconButton>
                        </div>        
                    </Tooltip> 
                    <Tooltip title="Add Emoji" placement="top" arrow>
                        <div style={{display:"inline-block"}}>
                            <IconButton 
                                aria-label="add emoji"
                                aria-controls="emoji-menu" 
                                aria-haspopup="true" 
                                onClick={handleClick}
                            >
                                <div className="postIcon post-emoji"></div>
                            </IconButton>
                        </div>        
                    </Tooltip>
                    <Menu
                        id="emoji-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <div> 
                            <Picker set='apple' onClick={handleClose}/>
                        </div>
                    </Menu>
                </div>
                <div className="post-action">
                    <Button color="secondary" onClick={() => actionClose()}>Cancel</Button>
                    <Button  color="secondary">Post</Button>
                </div>
            </div>
        )
    
    }
// ---------------------------------------------------------------------------------------------------------------//

export default function Types() {

    const classes = useStyles();

    const [postactive, setpostactive] = React.useState(false);

    const[poststate, setPoststate] = React.useState({
        feed:true,
        media: false,
        event: false,
        blog: false,
        job: false,
        documents: false,
        question: false,
        poll: false,
        project: false,
    });

    useEffect(() => {
        console.log(postactive)
    }, [postactive])


    const handlePostActive = () => {
        setpostactive(true);
    }

    const actionClose = () => {
        console.log("close");
        if(poststate.feed){
            setpostactive(false);
        }else{
            setPoststate({
                ...poststate,
                feed:true,
                media: false,
                event: false,
                blog: false,
                job: false,
                documents: false,
                question: false,
                poll: false,
                project: false,
            })
        }
    }

    const mediaActive = () => {
        console.log("media");
        setPoststate({
            ...poststate,
            feed:false,
            media: true,
            event: false,
            blog: false,
            job: false,
            documents: false,
            question: false,
            poll: false,
             project: false,
        })
    }

    const eventActive = () => {
        console.log("event");
        setPoststate({
            ...poststate,
            feed:false,
            media: false,
            event: true,
            blog: false,
            job: false,
            documents: false,
            question: false,
            poll: false,
            project: false,
        })
    }

    const blogActive = () => {
        console.log("blog");
        setPoststate({
            ...poststate,
            feed:false,
            media: false,
            event: false,
            blog: true,
            job: false,
            documents: false,
            question: false,
            poll: false,
            project: false,
        })
    }
          
    const jobActive = () => {
        console.log("job");
        setPoststate({
            ...poststate,
            feed:false,
            media: false,
            event: false,
            blog: false,
            job: true,
            documents: false,
            question: false,
            poll: false,
            project: false,
        })
    }

    const documentActive = () =>{
        console.log("document");
        setPoststate({
            ...poststate,
            feed:false,
            media: false,
            event: false,
            blog: false,
            job: false,
            documents: true,
            question: false,
            poll: false,
            project: false,
        })
    }

    const questionActive = () =>{
        console.log("question");
        setPoststate({
            ...poststate,
            feed:false,
            media: false,
            event: false,
            blog: false,
            job: false,
            documents: false,
            question: true,
            poll: false,
            project: false,
        })
    }

    const pollActive = () =>{
        console.log("poll");
        setPoststate({
            ...poststate,
            feed:false,
            media: false,
            event: false,
            blog: false,
            job: false,
            documents: false,
            question: false,
            poll: true,
            project: false,
        }) 
    }

    const projectActive = () =>{
        console.log("poll");
        setPoststate({
            ...poststate,
            feed:false,
            media: false,
            event: false,
            blog: false,
            job: false,
            documents: false,
            question: false,
            poll: false,
            project: true,
        }) 
    }

    return(
        <>
            <div className={classes.root} className={styles.activity_feed}>
                <Typography variant="h4" gutterBottom className={styles.entry_title}>
                    Activity Feed 
                </Typography>
                <Paper elevation={0} className={classes.activepaper}>
                   <div className={styles.feed_top}>
                        <Avatar alt="User Photo" src="./images/avatar/1.jpg" className={classes.useravartar} style={{border:"3px solid #D9D9D9"}}/>  
                        <Typography variant="subtitle1" style={{color:"#757575"}}>
                            George Martin
                        </Typography>
                   </div>
                   <div className={styles.feed_bottom} >
                        {poststate.feed && <TextareaAutosize style={{border:'none', outline:"none", resize:"none"}} onFocus={() => handlePostActive()} aria-label="minimum height" rowsMin={3} placeholder="Hello George Martin, You Can Start posting here"/> }
                        {poststate.media && <MediaPost /> }
                        {poststate.event && <EventPost /> }
                        {poststate.blog && <BlogPost /> }
                        {poststate.job && <JobPost /> }
                        {poststate.documents && <Document />}
                        {poststate.question && <Question/>}
                        {poststate.poll && <Poll/>} 
                        {poststate.project && <Project />}

                        {postactive&& 
                            <PostToolBar 
                                poststate={poststate}
                                actionClose={actionClose}
                                mediaActive = {mediaActive}
                                eventActive = {eventActive}
                                blogActive = {blogActive}
                                jobActive = {jobActive}
                                documentActive ={documentActive}
                                questionActive = {questionActive}
                                pollActive = {pollActive}
                                projectActive = {projectActive}
                            />
                        } 
                   </div>
                </Paper>                
            </div>
        </>
    );
}
