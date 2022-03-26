import { data } from 'jquery';
import React from 'react'
import styles from "./JournalOveralBanner.module.css"

import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';


const Data = [
    {
        company:"Wisetic",
        title:"Biotechnology and Bioengineering",
        numSection:12,
        numViews:3000,
        image:"./images/journal/j1.png"
    },

    {
        company:"Wisetic",
        title:"Chemical Sciences and Engineering",
        numSection:12,
        numViews:3000,
        image:"./images/journal/j2.png"
    },

    {
        company:"Wisetic",
        title:"Next Generation Materials",
        numSection:12,
        numViews:3000,
        image:"./images/journal/j3.png"
    },

    {
        company:"Wisetic",
        title:"Environmental Sciences and Engineering",
        numSection:12,
        numViews:3000,
        image:"./images/journal/j4.png"
    },

    {
        company:"Wisetic",
        title:"Next Generation Materials",
        numSection:12,
        numViews:3000,
        image:"./images/journal/j3.png"
    },

    {
        company:"Wisetic",
        title:"Environmental Sciences and Engineering",
        numSection:12,
        numViews:3000,
        image:"./images/journal/j4.png"
    },

    {
        company:"Wisetic",
        title:"Next Generation Materials",
        numSection:12,
        numViews:3000,
        image:"./images/journal/j3.png"
    },

    {
        company:"Wisetic",
        title:"Environmental Sciences and Engineering",
        numSection:12,
        numViews:3000,
        image:"./images/journal/j4.png"
    },

]



const JournalRow = (props) =>{
    const {data, j} = props

    const [checked, setChecked] = React.useState(false);

    console.log(Data);

    const handleChange = (index) => {
        console.log(index);
        setChecked((prev) => !prev);
    };

    return(
        <div className={styles.j_c_row} key={j}>
            <div className={styles.j_c_card_content_row}>
                <div className={styles.journal_card} onClick={()=>handleChange(j)} style={{backgroundImage:`url(${data.image})`}}>    
                    <div className={styles.card_data}>
                        <div className={styles.company_name}>{data.company}</div>
                        <div className={styles.j_c_title}>{data.title}</div>
                        <div className={styles.j_c_info}><span>{data.numSection}</span> Sections | <span>{data.numViews}</span> Views</div>
                        <div className={styles.j_c_button}><Button variant="outlined" color="secondary">Submit Your Manuscript</Button></div>
                    </div>   
                </div>
            </div>                                    
            <div className={styles.j_c_detail}>
                <Collapse in={checked}>
                    <div >
                    sdfdsfdsfdssdfdsfdsfdssdfdsfdsfdssdfdsfdsfdssdfdsfdsfdssdfdsfdsfdssdfdsfdsfdssdfdsfdsfdssdfdsfdsfdssdfdsfdsfdssdfdsfdsfdssdfdsfdsfdssdfdsfdsfds
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
                        Row.map((data,j)=>{
                            return (
                                <JournalRow data={data} j={j}/>
                            )
                        })
                    }
                </div>
            </div> 
        </div>
    )
}

export default JournalContent;
