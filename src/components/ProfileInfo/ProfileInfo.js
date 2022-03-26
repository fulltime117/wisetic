import React, { Component } from 'react'
import styles from "./ProfileInfo.module.css";

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';


function GeneralData(name, calories) {
    return { name, calories};
}

const GeneralRow = [
    GeneralData('First Name', "Joseph"),
    GeneralData('Middle Name', "Perry"),
    GeneralData('Surname', "Lorem"),
    GeneralData('City', "Lorem"),
    GeneralData('Country', "Lorem"),
    GeneralData('Official email', "Lorem"),
];

function Biography(name, biography) {
    return { name, biography};
}

const BiographyRow = [
    Biography('Biography',"Lorem ipsum dolor sit amet sunt in culpa qui officia deserunt mollit anim id est laborum.")
]

function Workexperience(name, experience) {
    return { name, experience};
}

const WorkexperienceRow = [
    Workexperience('Job Title',"Lorem ipsum dolor"),
    Workexperience('Affiliation',"Lorem ipsum dolor"),
    Workexperience('Location',"Lorem ipsum dolor"),
    Workexperience('Duration',"Lorem ipsum dolor"),
    Workexperience('Description',"Lorem ipsum dolor sit amet sunt in culpa qui officia"),
]

function Education(name,education) {
    return {name,education}
}

const EducationRow = [
    Education("Degree Title","Lorem ipsum dolor"),
    Education('Affiliation',"Lorem ipsum dolor"),
    Education('Location',"Lorem ipsum dolor"),
    Education('Duration',"Lorem ipsum dolor"),
    Education('Description',"Lorem ipsum dolor sit amet sunt in culpa qui officia"),
]

function Skill(name,skill) {
    return {name,skill}
}

const languagebar = () =>{
    return(
        <div>
            <h1>eeeeeeeeeeeeeeeeeee</h1>
        </div>
    )
}

const SkillRow = [
    Skill("Mother Language","Lorem ipsum"),
    Skill('Othere Language',languagebar),
    Skill('Location',"Lorem ipsum dolor"),
    Skill('Duration',"Lorem ipsum dolor"),
    Skill('Description',"Lorem ipsum dolor sit amet sunt in culpa qui officia"),
]


const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 5,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#d4d4d4',
    },
  }))(LinearProgress);



export class ProfileInfo extends Component {
    render() {
        return (
            <div className={styles.p_info_content}>
                <div className={styles.p_information}>
                    <Typography variant="h6">
                        Profile
                    </Typography>
                    <Link href="/editprofile">
                        <a>
                            <Button variant="outlined" color="secondary" style={{borderRadius:"100px"}}>
                                Edit Profile
                            </Button>
                        </a>
                    </Link>                    
                </div>               
                <Divider />
                <div className={styles.p_info_wraper}>
                    <Typography variant="subtitle1"  className={styles.p_info_subtitle}>
                        Biography
                    </Typography>   
                    <Divider /> 
                    <TableContainer>
                        <Table aria-label="biography table">
                            <TableBody>
                            {BiographyRow.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="td" scope="row" width="150px" style={{color:"#7e7c7c",padding:"12px",display:"flex"}}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="left" style={{padding:"12px"}}>
                                        {row.biography}
                                    </TableCell>              
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Typography variant="subtitle1"  className={styles.p_info_subtitle}>
                        General information
                    </Typography>   
                    <Divider />                 
                    <TableContainer>
                        <Table aria-label="info table">
                            <TableBody>
                            {GeneralRow.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="td" scope="row" width="150px" style={{color:"#7e7c7c",padding:"12px"}}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="left" style={{padding:"12px"}}>
                                        {row.calories}
                                    </TableCell>              
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Typography variant="subtitle1"  className={styles.p_info_subtitle}>
                        Work experience
                    </Typography>   
                    <Divider />
                    <TableContainer>
                        <Table aria-label="experience table">
                            <TableBody>
                            {WorkexperienceRow.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="td" scope="row" width="150px" style={{color:"#7e7c7c",padding:"12px"}}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="left" style={{padding:"12px"}}>
                                        {row.experience}
                                    </TableCell>              
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>


                    <Typography variant="subtitle1"  className={styles.p_info_subtitle}>
                        Education and Training
                    </Typography>   
                    <Divider />
                    <TableContainer>
                        <Table aria-label="education table">
                            <TableBody>
                            {EducationRow.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="td" scope="row" width="150px" style={{color:"#7e7c7c",padding:"12px"}}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="left" style={{padding:"12px"}}>
                                        {row.education}
                                    </TableCell>              
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>


                    <Typography variant="subtitle1"  className={styles.p_info_subtitle}>
                        Personal Skills
                    </Typography>   
                    <Divider />
                    <TableContainer>
                        <Table aria-label="education table">
                            <TableBody>
                                <TableRow>
                                    <TableCell component="td" scope="row" width="150px" style={{color:"#7e7c7c",padding:"12px"}}>
                                        Mother Language
                                    </TableCell>
                                    <TableCell align="left" style={{padding:"12px"}}>
                                        Urdu
                                    </TableCell>              
                                </TableRow>
                                <TableRow>
                                    <TableCell component="td" scope="row" width="150px" style={{color:"#7e7c7c",padding:"12px", display:"flex", alignItems:"flex-start"}}>
                                        Othere Language
                                    </TableCell>
                                    <TableCell align="left" style={{padding:"12px"}}>
                                        <p>English</p>
                                        <Grid container spacing={3}>
                                            <Grid item xs>
                                                <div className={styles.understanding}>
                                                    <p>Understanding</p>
                                                    <BorderLinearProgress variant="determinate" value={50} />
                                                </div>
                                            </Grid>
                                            <Grid item xs>
                                                <div className={styles.speaking}>
                                                    <p>Speaking</p>
                                                    <BorderLinearProgress variant="determinate" value={35} />
                                                </div>
                                            </Grid>
                                            <Grid item xs>
                                                <div className={styles.writing}>
                                                    <p>Writing</p>
                                                    <BorderLinearProgress variant="determinate" value={45} />
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </TableCell>              
                                </TableRow>

                                <TableRow>
                                    <TableCell component="td" scope="row" width="150px" style={{color:"#7e7c7c",padding:"12px"}}>
                                        Organisational Skills
                                    </TableCell>
                                    <TableCell align="left" style={{padding:"12px"}}>
                                        <BorderLinearProgress variant="determinate" value={60} style={{height:"4px"}}/>
                                    </TableCell> 
                                </TableRow>

                                <TableRow>
                                    <TableCell component="td" scope="row" width="150px" style={{color:"#7e7c7c",padding:"12px"}}>
                                        Computer Skills
                                    </TableCell>
                                    <TableCell align="left" style={{padding:"12px"}}>
                                        <Grid container spacing={3}>
                                            <Grid item xs>
                                                <div className={styles.understanding}>
                                                    <p>Lorem ipsum</p>
                                                    <BorderLinearProgress variant="determinate" value={50} />
                                                </div>
                                            </Grid>
                                            <Grid item xs>
                                                <div className={styles.speaking}>
                                                    <p>Lorem ipsum</p>
                                                    <BorderLinearProgress variant="determinate" value={35} />
                                                </div>
                                            </Grid>
                                            <Grid item xs>
                                                <div className={styles.writing}>
                                                    <p>Lorem ipsum</p>
                                                    <BorderLinearProgress variant="determinate" value={45} />
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </TableCell> 
                                </TableRow>

                                <TableRow>
                                    <TableCell component="td" scope="row" width="150px" style={{color:"#7e7c7c",padding:"12px"}}>
                                        Seminars/Conferences
                                    </TableCell>
                                    <TableCell align="left" style={{padding:"12px"}}>
                                        Lorem ipsum dolor
                                    </TableCell> 
                                </TableRow>

                                <TableRow>
                                    <TableCell component="td" scope="row" width="150px" style={{color:"#7e7c7c",padding:"12px"}}>
                                        Honours/Awards
                                    </TableCell>
                                    <TableCell align="left" style={{padding:"12px"}}>
                                        Lorem ipsum dolor
                                    </TableCell> 
                                </TableRow>

                                <TableRow>
                                    <TableCell component="td" scope="row" width="150px" style={{color:"#7e7c7c",padding:"12px"}}>
                                        Memberships
                                    </TableCell>
                                    <TableCell align="left" style={{padding:"12px"}}>
                                        Lorem ipsum dolor
                                    </TableCell> 
                                </TableRow>

                                <TableRow>
                                    <TableCell component="td" scope="row" width="150px" style={{color:"#7e7c7c",padding:"12px"}}>
                                        Certificates
                                    </TableCell>
                                    <TableCell align="left" style={{padding:"12px"}}>
                                        Lorem ipsum dolor
                                    </TableCell> 
                                </TableRow>

                                <TableRow>
                                    <TableCell component="td" scope="row" width="150px" style={{color:"#7e7c7c",padding:"12px"}}>
                                        Weblinks
                                    </TableCell>
                                    <TableCell align="left" style={{padding:"12px"}}>
                                        <Link href="/profile">
                                            <a style={{color:"var(--text-color)"}}>http://www.example.com</a>
                                        </Link>                                        
                                    </TableCell> 
                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className={styles.info_bottom}>
                        <Button variant="outlined" color="secondary">
                            Initiate Profile Verification
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileInfo
