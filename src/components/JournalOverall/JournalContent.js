import React,{useEffect } from 'react'
import styles from "./JournalOveralBanner.module.css"

import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import IconButton from '@material-ui/core/IconButton';
import CallMadeIcon from '@material-ui/icons/CallMade';
import CloseIcon from '@material-ui/icons/Close';

const Data = [
    {   
        id:1,
        rows:[
            {
                company:"Wisetic",
                title:"Biotechnology and Bioengineering",
                numSection:9,
                numViews:300,
                image:"./images/journal/j1.png"
            },
        
            {
                company:"Wisetic",
                title:"Chemical Sciences and Engineering",
                numSection:120,
                numViews:3000,
                image:"./images/journal/j2.png"
            }
        ]
    },

    {
        id:2,
        rows:[
            {
                company:"Wisetic",
                title:"Next Generation Materials",
                numSection:50,
                numViews:550,
                image:"./images/journal/j3.png"
            },
        
            {
                company:"Wisetic",
                title:"Environmental Sciences and Engineering",
                numSection:24,
                numViews:360,
                image:"./images/journal/j4.png"
            }
        ]
    },

    {
        id:3,
        rows:[
            {
                company:"Wisetic",
                title:"Next Generation Materials",
                numSection:50,
                numViews:550,
                image:"./images/journal/j3.png"
            },
        
            {
                company:"Wisetic",
                title:"Environmental Sciences and Engineering",
                numSection:24,
                numViews:360,
                image:"./images/journal/j4.png"
            }
        ]
    },

    {
        id:4,
        rows:[
            {
                company:"Wisetic",
                title:"Next Generation Materials",
                numSection:50,
                numViews:550,
                image:"./images/journal/j3.png"
            },
        
            {
                company:"Wisetic",
                title:"Environmental Sciences and Engineering",
                numSection:24,
                numViews:360,
                image:"./images/journal/j4.png"
            }
        ]
    },
]

const SectionData = [
    'Animal Biotechnology','Animal Biotechnology','Animal Biotechnology','Animal Biotechnology','Animal Biotechnology','Animal Biotechnology','Animal Biotechnology','Animal Biotechnology','Animal Biotechnology','Animal Biotechnology','Animal Biotechnology','Animal Biotechnology'
]

const Chifers = ["./images/avatar/2.jpg","./images/avatar/3.jpg","./images/avatar/4.jpg","./images/avatar/5.jpg","./images/avatar/6.jpg","./images/avatar/7.jpg"]




const JournalRow = (props) =>{
    const {data, j} = props

    const Rows = data.rows
    // console.log(Rows,j)

    const [checked, setChecked] = React.useState(false);
    const [collapsedata, setCollapseData] = React.useState([]);

    const handleChange = (content) => {
        setCollapseData(content); 
        setChecked(true);
    };

    const handleClose = () =>{
        setChecked(false);
    }

    const [collapse_info, setCollapseInfo] = React.useState([]);

    useEffect(() => {
      console.log(collapsedata);        
    }, [collapsedata])

    return(
        <div className={styles.j_c_row}>
            <div className={styles.j_c_card_content_row}>
                { 
                    Rows.map((data,k)=>{
                        return (
                            <div className={styles.journal_card} key={k} onClick={()=>handleChange(data)} style={{backgroundImage:`url(${data.image})`}}>    
                                <div className={styles.card_data}>
                                    <div className={styles.company_name}>{data.company}</div>
                                    <div className={styles.j_c_title}>{data.title}</div>
                                    <div className={styles.j_c_info}><span>{data.numSection}</span> Sections | <span>{data.numViews}</span> Views</div>
                                    <div className={styles.j_c_button}><Button variant="outlined" color="secondary">Submit Your Manuscript</Button></div>
                                </div>   
                            </div>  
                        )
                    })
                }
            </div>
            <div className={styles.j_c_detail}>
                <Collapse in={checked}>
                    <div className={styles.overall_collaps_contents}>
                        <div className={styles.o_c_datas}>                            
                            <div className={styles.o_c_header}>
                                <Button variant="outlined" color="primary" size="small" >
                                    Journal
                                </Button>
                                <Button variant="outlined" color="primary" size="small" >
                                    Editorial Board
                                </Button>
                                <Button variant="outlined" color="primary" size="small" >
                                    Author Guidelines
                                </Button>
                                <Button variant="outlined" color="primary" size="small" >
                                    Reviewer Guidelines
                                </Button>
                                <Button variant="outlined" color="primary" size="small" >
                                    Policies and Research
                                </Button>
                                <Button variant="outlined" color="primary" size="small" >
                                    Journal Community
                                </Button>
                            </div>
                            <div className={styles.o_c_data}>
                                <div className={styles.o_c_datainfo}>
                                    <div className={styles.company_name}>Wisetic</div>
                                    <div className={styles.o_c_datainfo_title}>{collapsedata&&collapsedata.title}</div>
                                    <div className={styles.o_c_datainfo_content}>“Wisetic reports the newest discoveries in the field of Biotechnology and Bioengineering The journal publishes high quality, 3D-Peer-Rreviewed, multidisciplinary research to worldwide public including researchers, industry leaders and students”</div>
                                    <div className={styles.o_c_datainfo_title}>Sections</div>
                                    <div className={styles.o_c_datainfo_sections}>
                                        { 
                                            SectionData.map((section,p)=>{
                                                return (
                                                    <div key={p} className={styles.o_c_datainfo_section}>{section}</div>
                                                )
                                            })
                                        }
                                    </div>                                                                       
                                </div>
                                <div className={styles.o_c_chifers}>                                    
                                    <div className={styles.o_c_datainfo_title}>Editor-In-Chief</div>
                                    <div className={styles.o_c_chifer_cards}>
                                    { 
                                        Chifers.map((chifer,i)=>{
                                            return (
                                                <div className={styles.oc_chifer_card} key={i}>
                                                    <ListItem>
                                                        <ListItemAvatar>
                                                            <Avatar src={chifer} alt="Remy Sharp"/>
                                                        </ListItemAvatar>
                                                        <ListItemText primary="Brigitte Marie" secondary="Professor | University of Cagliari, Italy" />
                                                    </ListItem>
                                                    <div className={styles.o_c_chifer_action}>
                                                        <IconButton aria-label="active show" color="inherit" className={styles.icon_button}>
                                                            <CallMadeIcon />
                                                        </IconButton>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    </div>
                                </div>
                            </div>
                            <div className={styles.o_c_data_image}>
                                <img src={collapsedata&&collapsedata.image} alt=""></img>
                            </div>
                            <div className={styles.o_c_collapse_close}>
                                <IconButton aria-label="close" onClick={()=>handleClose()}>
                                    <CloseIcon/>
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>
        </div>
    )
}



const JournalContent = () =>{
    
    return(
        <div>
           <div className={styles.journal_contents}>
                <div className={styles.journal_content_title}>Wisetic Journals</div>
                <div className={styles.journal_cards}>                      
                    { 
                        Data.map((data,j)=>{
                            return (
                                <JournalRow data={data} j={j} key={j}/>
                            )
                        })
                    }
                </div>
            </div> 
        </div>
    )
}

export default JournalContent;
