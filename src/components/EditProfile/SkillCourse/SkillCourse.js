import React ,{Fragment} from 'react'
import styles from './SkillCourse.module.css'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

import { Form, Col} from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';


const SkillCourse = () =>{  
    
    

    const [understanding,setUnderstanding] = React.useState('');
    const [understandingOpen, setOpenUnderstanding] = React.useState(false);

    const [speaking, setSpeaking] = React.useState('');
    const [speakingOpen, setOpenSpeaking] = React.useState(false);

    const [writing, setWriting] = React.useState('');
    const [writingOpen, setOpenWriting] = React.useState(false); 

    
    const handleChange = (te,e) =>{
        console.log(e.target.value);
        if(te=="Understanding"){
            setUnderstanding(e.target.value);
        }else if(te=="Speaking"){
            setSpeaking(e.target.value);
        }else if(te=="Writing"){
            setWriting(e.target.value);
        }else if(te=="Communication"){
            setCommunication(e.target.value);
        }else if(te=="Organisational"){
            setOrganisational(e.target.value);
        }
    }      
    
    const handleOpen= (openIndex) => {
        console.log(openIndex);
        if(openIndex=="Understanding"){
            setOpenUnderstanding(true);
        }else if(openIndex=="Speaking"){
            setOpenSpeaking(true);
        }else if(openIndex=="Writing"){
            setOpenWriting(true);
        }else if(openIndex=="Communication"){
            setOpenCommunication(true);
        }
        else if(openIndex=="Organisational"){
            setOpenOrganisational(true);
        }
        // setOpen1(true);
    }; 

    const handleClose = (text) => {
        if(text=="Understanding"){
            setOpenUnderstanding(false)
        }else if(text=="Speaking"){
            setOpenSpeaking(false)
        }else if(text=="Writing"){
            setOpenWriting(false)
        }else if(text=="Communication"){
            setOpenCommunication(false)
        }
        else if(text=="Organisational"){
            setOpenOrganisational(false);
        }
        // setOpen1(false);
    };  

    
    // other language add field
    const [inputFields, setInputFields] = React.useState([
        {}
    ]);

    const handleAddFields = () => {        
        const values = [...inputFields];  
        values.push({});
        setInputFields(values);
    };

    const removeLimit = 1;
   
    const handleRemoveFields = index => {
        const values = [...inputFields];
        if (values.length === removeLimit) {
            return;
        }
        values.splice(index, 1);
        setInputFields(values);
    };

    const handleChangeLanguageName = () =>{
        console.log("changeLanguagename")
    }


    // skill add field
    const [skillFields, setSkillFields] = React.useState([
        {id:1, skillname:"", skilllevel:"", levelopen:false}
    ]);

    const handleAddSkill = () => {
        const skillFieldValue = [...skillFields];
        const newField = {id:skillFields[skillFields.length-1].id+1, skillname:"", skilllevel:"", levelopen:false}
        skillFieldValue.push(newField);
        setSkillFields(skillFieldValue);
        console.log(skillFields);
    };

    const removeskillLimit = 1    
   
    const handleRemoveSkill = rowId => { 
        const values = [...skillFields];
        if (values.length === removeskillLimit) {
            return;
        }

        const newField = skillFields.filter(skillrow => skillrow.id !== rowId);
        setSkillFields(newField);
    };    

    const handleChangeSkillName = (id, e) => {       

        const _skillFields = skillFields.filter( row => {
            if (row.id === id) {
                row.skillname = e.target.value
            }
            return true;
        })
        
        setSkillFields(_skillFields)
    }

    const handleOpenSkillLevel = (id,e) => {
        const _skillFields = skillFields.filter( row => {
            if (row.id === id) {
                row.levelopen = true
            }
            return true;
        })

        setSkillFields(_skillFields)
    }

    const handleCloseSkillLevel = (id,e) => {
        const _skillFields = skillFields.filter( row => {
            if (row.id === id) {
                row.levelopen = false
            }
            return true;
        })

        setSkillFields(_skillFields)        
    }

    const handleChangeSkillLevel = (id,e) => {
        const _skillFields = skillFields.filter( row => {
            if (row.id === id) {
                row.skilllevel = e.target.value
            }
            return true;
        })

        setSkillFields(_skillFields)        
    }



    const Items = [1,2,3,4,5]  
    const LanguageSkill = [
        {
            title:"Understanding",
            val:understanding,
            open:understandingOpen,
        },
        {
            title:"Speaking",
            val:speaking,
            open:speakingOpen,
        },
        {
            title:"Writing",
            val:writing,
            open:writingOpen,
        }
    ]

    


   
    
    return(
        <React.Fragment>
            <div className="SkillCourse-content">
                <Typography variant="h6" style={{marginBottom:'10px'}}>
                    Edit "Personal Skills" Information
                </Typography> 

                <Form className={styles.skill_edit_form}>
                    <Form.Row style={{columnGap:"0px"}}>
                        <Form.Group as={Col} md={3}>
                            <Typography variant="body2" className={styles.item_title}>
                                Language
                            </Typography>
                        </Form.Group>
                        <Form.Group as={Col} md={9}>
                            <div aria-label="mother-language">
                                <Form.Row>
                                    <Form.Group as={Col} md={6} style={{paddingRight:"16px"}}>
                                        <TextField id="motherlanguage" label="Mother language" />
                                    </Form.Group>
                                </Form.Row>
                            </div>
                            <div aria-label="other-language">
                                {inputFields.map((inputField, index) => (
                                    <Fragment key={`${inputField}~${index}`}> 
                                        <Form.Row>
                                            <Form.Group as={Col} style={{minWidth:"116px"}}>
                                                <TextField id="otherlanguage" label="Other languages" onChange={(e) => handleChangeLanguageName()} />
                                            </Form.Group>
                                            { 
                                                LanguageSkill.map((Language,i)=>{
                                                        return (
                                            <Form.Group as={Col} key={i} >
                                                <FormControl>
                                                    <InputLabel id={Language.title}>{Language.title}</InputLabel>
                                                    <Select
                                                    open={Language.open}
                                                    onClose={()=>handleClose(Language.title)}
                                                    onOpen={()=>handleOpen(Language.title)}
                                                    value={Language.val}
                                                    onChange={(e)=>handleChange(Language.title,e)}
                                                    >
                                                    <MenuItem value="">
                                                        <em>Slect your level !</em>
                                                    </MenuItem>
                                                    { 
                                                        Items.map((comment,j)=>{
                                                        return (
                                                            <MenuItem value={j} key={j}>
                                                                <div className='skill-level-dot-wraper'>
                                                                    <span className={j>=0?'level-dot active-dot':'level-dot'}></span>
                                                                    <span className={j>=1?'level-dot active-dot':'level-dot'}></span>
                                                                    <span className={j>=2?'level-dot active-dot':'level-dot'}></span>
                                                                    <span className={j>=3?'level-dot active-dot':'level-dot'}></span>
                                                                    <span className={j>=4?'level-dot active-dot':'level-dot'}></span>
                                                                </div>
                                                            </MenuItem>                                        
                                                            )
                                                        })
                                                    }                                
                                                    </Select>
                                                </FormControl>
                                            </Form.Group>                            
                                                        )
                                                })
                                            }  
                                            <div className={styles.action_buttons}>
                                                <IconButton aria-label="add row" onClick={(e) => handleAddFields()}>
                                                    <AddOutlinedIcon fontSize="small" />
                                                </IconButton>
                                                <IconButton aria-label="delete row" onClick={(e) => handleRemoveFields(index)}>
                                                    <DeleteIcon fontSize="small" />
                                                </IconButton>
                                            </div>                           
                                        </Form.Row>
                                    </Fragment>
                                ))}
                            </div>
                        </Form.Group>                        
                    </Form.Row>
                    
                    <Form.Row style={{columnGap:"0px"}}>
                        <Form.Group as={Col} md={3}>
                            <Typography variant="body2" className={styles.item_title}>
                                Skills
                            </Typography>
                        </Form.Group>

                        <Form.Group as={Col} md={9}>
                            {skillFields.map((skillField, ik) => (                                
                                <div aria-label="skills section" key={`${skillField}~${ik}`}>
                                    <Form.Row>
                                        <Form.Group as={Col} style={{display:"flex",alignItems:"flex-end"}}>
                                            <TextField label="Skill name" value={skillField.skillname} onChange={(e) => handleChangeSkillName(skillField.id, e)} />
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <FormControl>
                                                <InputLabel id="Communication">Skill level</InputLabel>
                                                <Select
                                                    open={skillField.levelopen}
                                                    onClose={()=>handleCloseSkillLevel(skillField.id)}
                                                    onOpen={()=>handleOpenSkillLevel(skillField.id)}
                                                    value={skillField.skilllevel}
                                                    onChange={(e)=>handleChangeSkillLevel(skillField.id,e)}
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    { 
                                                        Items.map((comment,j)=>{
                                                        return (
                                                            <MenuItem value={j} key={j} >
                                                                <div className='skill-level-dot-wraper'>
                                                                    <span className={j>=0?'level-dot active-dot':'level-dot'}></span>
                                                                    <span className={j>=1?'level-dot active-dot':'level-dot'}></span>
                                                                    <span className={j>=2?'level-dot active-dot':'level-dot'}></span>
                                                                    <span className={j>=3?'level-dot active-dot':'level-dot'}></span>
                                                                    <span className={j>=4?'level-dot active-dot':'level-dot'}></span>
                                                                </div>
                                                            </MenuItem>                                        
                                                            )
                                                        })
                                                    }                                
                                                </Select>
                                            </FormControl>                            
                                        </Form.Group>                                        
                                        <div className={styles.action_buttons}>
                                            <IconButton aria-label="add row" onClick={(e) => handleAddSkill()}>
                                                <AddOutlinedIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton aria-label="delete row" onClick={(e) => handleRemoveSkill(skillField.id)}>
                                                <DeleteIcon fontSize="small" />
                                            </IconButton>
                                        </div>
                                    </Form.Row> 
                                </div>
                            ))}
                        </Form.Group>                        
                    </Form.Row>

                    <Form.Row>
                        <Button variant="outlined" color="secondary" style={{marginTop:"15px", marginLeft:"5px"}}>
                            Save
                        </Button>
                    </Form.Row> 
                </Form>
            </div>
        </React.Fragment>
    )
}

export default SkillCourse