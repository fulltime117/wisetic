import React, { useEffect } from 'react';
import styles from "./SkillCourse.module.css";


import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { ProgressBar } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Ribon from '../StyleRibon/StyleRibon'
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const c_data = [
    {
        stepvalue:35,
        ribon:{
            title:"In progress",
            backColor:"#144BCD"
        },    
        statustext1:"2 / 5 Lessons",      
        statustext2:"Certificate on Completion"      
        
    },
    {
        stepvalue:100,
        ribon:{
            title:"Completed",
            backColor:"#04C456"
        }, 
        statustext1:"5 / 5 Lessons",
        statustext2:"Download Certificate"      

    },
    {
        stepvalue:0,
        ribon:{
            title:"Start Course",
            backColor:"#C4AC04"
        }, 
        statustext1:"0 / 5 Lessons",
        statustext2:"Certificate on Completion"   
    },
    {
        stepvalue:60,
        ribon:{
            title:"In progress",
            backColor:"#144BCD"
        },    
        statustext1:"5 / 7 Lessons",      
        statustext2:"Certificate on Completion"      
        
    },
    {
        stepvalue:100,
        ribon:{
            title:"Completed",
            backColor:"#04C456"
        }, 
        statustext1:"5 / 5 Lessons",
        statustext2:"Download Certificate"      

    },
    {
        stepvalue:0,
        ribon:{
            title:"Start Course",
            backColor:"#C4AC04"
        }, 
        statustext1:"5 / 5 Lessons",
        statustext2:"Certificate on Completion"   
    },
]
const s_data = [
    {
        stepvalue:45,
        ribon:{
            title:"Skill Added",
            backColor:"#144BCD"
        },    
        statustext1:"Added on 12-12-2020",      
        statustext2:"Download Certificate"      
    },

    {
        stepvalue:0,
        ribon:{
            title:"Not Added",
            backColor:"#A62F9D"
        },    
        statustext1:"It will be Added on Successful Completion of Skill Test",      
        statustext2:""      
    },
    {
        stepvalue:70,
        ribon:{
            title:"Skill Added",
            backColor:"#144BCD"
        },    
        statustext1:"Added on 12-12-2020",      
        statustext2:"Download Certificate"      
    },
    {
        stepvalue:0,
        ribon:{
            title:"Not Added",
            backColor:"#A62F9D"
        },    
        statustext1:"It will be Added on Successful Completion of Skill Test",      
        statustext2:""      
    },
    {
        stepvalue:45,
        ribon:{
            title:"Skill Added",
            backColor:"#144BCD"
        },    
        statustext1:"Added on 12-12-2020",      
        statustext2:"Download Certificate"      
    },
    {
        stepvalue:100,
        ribon:{
            title:"Skill Added",
            backColor:"#144BCD"
        },    
        statustext1:"Added on 12-12-2020",      
        statustext2:"Download Certificate"      
    },
]




const useStyles = makeStyles((theme) => ({
    avartar: {
        width: theme.spacing(6),
        height: theme.spacing(6), 
        border:"3px solid #fff",
        boxShadow:"0px 3px 6px #00000035" ,
    },

    listText:{
        fontSize:'12px',
    },

    skill_avatar: {
        marginLeft:"-20px",
        width: theme.spacing(6),
        height: theme.spacing(6), 
        border:"3px solid #fff",
        boxShadow:"0px 3px 6px #00000035"
    }
}));



export default function Connections() {
    const classes = useStyles();
    const now = 35;
    const [coursechecked, setCourseChecked] = React.useState(false);
    const [courseallview, setCourseAllView] = React.useState(false);
    const [coursedata, setCourseData] = React.useState([]);

    const [skilldata, setSkillData] = React.useState([]);    
    const [skillchecked, setSkillChecked] = React.useState(false);
    const [skillallview, setSkillAllView] = React.useState(false);


    useEffect(() => {
        setCourseData(c_data),
        setSkillData(s_data)
    }, [])

    const handleViewAll = (index) =>{
        if(index==="course"){
            setCourseChecked(true);
            setCourseAllView(true);
        }else{
            setSkillChecked(true)
            setSkillAllView(true)
        }        
    }

    const handleExpend = (index) =>{
        if(index==="course"){
            setCourseChecked(false);
            setCourseAllView(false);
        }else{
            setSkillChecked(false)
            setSkillAllView(false)
        } 
    }



    


    return (
        <div className="my-profileTab-page" >
            <div className={styles.p_title}>
                <Typography variant="h5">
                    Skills & Courses
                </Typography>                   
            </div>
            <Divider />
            <div className={styles.sc_body}>
                <div className={styles.courses_section}>
                    <div className={styles.courses_title}>My Courses</div>
                    <Collapse in={coursechecked} collapsedHeight={322}>
                    <div className={styles.courses_cards}>
                    { 
                        coursedata.map((data,i)=>{
                            console.log(data);
                            return (
                                    <div className={styles.courses_card} key={i}>
                                        <Ribon RibonData={data.ribon}/>
                                        <div className={styles.corse_card_image}>
                                            <img src="./images/post/micro.png" alt='course_cord_image'/>
                                        </div>
                                        <div className={styles.style_progressbar}>
                                            <ProgressBar style={{overflow:"visible", borderRadius:"0px", height:"10px"}}>
                                                {data.stepvalue !== 100
                                                    ?<ProgressBar variant="success" animated  label={`${data.stepvalue}%`} now={data.stepvalue} key={1} style={{backgroundColor:"#1bea3d !important"}} />
                                                    :<ProgressBar variant="success" label={`${data.stepvalue}%`} now={data.stepvalue} key={1} style={{backgroundColor:"#1bea3d !important"}} />
                                                }
                                                {data.stepvalue !== 100 && <ProgressBar className="bar-pointer" key={2}  />}                                                
                                            </ProgressBar>
                                        </div>
                                        <div className={styles.course_card_contents}>
                                            <div className={styles.course_sub_info}>
                                                <div>{data.statustext1}</div>
                                                <div>Certificate on Completion</div>
                                            </div>
                                            <div className={styles.course_name}>How to Create a Sample for TEM</div>
                                            <div className={styles.course_card_footer}>
                                                <div className={styles.course_creator}>
                                                    <ListItem>
                                                        <ListItemAvatar>
                                                            <Avatar src="./images/avatar/1.jpg" alt="uu" className={classes.avartar}/>
                                                        </ListItemAvatar>
                                                        <ListItemText className={classes.listText} >
                                                        <div className="list-item-subtitle">Tutor</div>
                                                        <div className="list-item-title">Prof. Josef Harley</div>
                                                        </ListItemText>
                                                    </ListItem>                                        
                                                    <div className={styles.small_comment_react}>
                                                        <div className={styles.small_comment}>
                                                            <Button>
                                                                <div className="add-friend-icon"></div>
                                                            </Button>
                                                        </div>
                                                        <div className={styles.small_between_line}></div>
                                                        <div className={styles.small_react}>
                                                            <Button>
                                                                <div className="conversation-icon"></div>
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>                                    
                                            </div>                                
                                        </div>
                                    </div>
                                )
                        })
                    }
                    </div>
                    </Collapse>
                    
                    <div className={styles.showall_button}>
                        {courseallview
                            ?<Tooltip title="ExpandLess" arrow placement="top">
                                <IconButton aria-label="View all" size="small" onClick={()=>handleExpend("course")}>
                                    <ExpandLessIcon />                                            
                                </IconButton>
                            </Tooltip>
                            :<Tooltip title="View all" arrow placement="top">
                                <IconButton aria-label="View all" size="small" onClick={()=>handleViewAll("course")}>
                                    <ExpandMoreIcon />                                                            
                                </IconButton>
                            </Tooltip>
                        }
                    </div>
                </div>

                <Divider style={{width:"80%"}}/>

                <div className={styles.courses_section}>
                    <div className={styles.courses_title}>My Courses</div>   
                    <Collapse in={skillchecked} collapsedHeight={264}>
                    <div className={styles.courses_cards}>
                    { 
                        skilldata.map((data,j)=>{
                            return (
                                <div className={styles.courses_card}>
                                    <Ribon RibonData={data.ribon}/>
                                    <div className={styles.corse_card_image}>
                                        <img src="./images/post/micro.png" alt='course_cord_image'/>
                                        <div className={styles.skil_overall_text}>
                                            Electron Microscopy TEM
                                        </div>
                                    </div>
                                    <div className={styles.course_sub_info} style={{margin:"8px 0", padding:"0 12px"}}>
                                        <div>Added on 12-12-2020</div>
                                        <div>Download Certificate</div>
                                    </div>
                                    <div className={styles.style_progressbar}>
                                            <ProgressBar style={{overflow:"visible", borderRadius:"0px", height:"10px"}}>
                                                {data.stepvalue !== 100
                                                    ?<ProgressBar variant="success" animated  label={`Score ${data.stepvalue}%`} now={data.stepvalue} key={1} style={{backgroundColor:"#1bea3d !important"}} />
                                                    :<ProgressBar variant="success" label={`Score ${data.stepvalue}%`} now={data.stepvalue} key={1} style={{backgroundColor:"#1bea3d !important"}} />
                                                }
                                                {data.stepvalue !== 100 && <ProgressBar className="bar-pointer" key={2}  />}                                                
                                            </ProgressBar>
                                    </div>
                                    <div className={styles.course_card_contents}>                               
                                        <div className={styles.course_card_footer}>
                                            <div className={styles.skill_attentor}>
                                                <Avatar src="./images/avatar/2.jpg" alt="uu" className={classes.skill_avatar}/>
                                                <Avatar src="./images/avatar/3.jpg" alt="uu" className={classes.skill_avatar}/>
                                                <Avatar src="./images/avatar/4.jpg" alt="uu" className={classes.skill_avatar}/>
                                            </div>
                                            <div className={styles.also}>30K Others Added also</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                    </Collapse>                    
                    <div className={styles.showall_button}>
                        {skillallview
                            ?<Tooltip title="ExpandLess" arrow placement="top">
                                <IconButton aria-label="View all" size="small" onClick={()=>handleExpend("skill")}>
                                    <ExpandLessIcon />                                            
                                </IconButton>
                            </Tooltip>
                            :<Tooltip title="View all" arrow placement="top">
                                <IconButton aria-label="View all" size="small" onClick={()=>handleViewAll("skill")}>
                                    <ExpandMoreIcon />                                                            
                                </IconButton>
                            </Tooltip>
                        }
                    </div>
                </div>
            </div>
        </div>            
        
    )
    
}


