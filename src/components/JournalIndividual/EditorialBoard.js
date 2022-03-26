import React from 'react'
import styles from "./JournalIndividual.module.css"
import ConnectionCard from "../Connections/JornalConectionCard"
import Button from '@material-ui/core/Button';


const data = [
    {
        follows:300,
        avartarurl:"./images/avatar/2.jpg",
        isactive:true,
        ischecked:true,
        name:"Agnieszka Sidorowiscz",
        job:"PhD Student | University of Poznan",
        text1:"Editor-in- Chief | Wisetic Biotechnology...",
        skill:["Problem Solving","Creativity"],
        plus:9
    },
    {
        follows:100,
        avartarurl:"./images/avatar/3.jpg",
        isactive:true,
        ischecked:false,
        name:"Agnieszka Sidorowiscz",
        job:"PhD Student | University of Poznan",
        text1:"Editor-in- Chief | Wisetic Biotechnology...",
        skill:["Teamwork", "Creativity"],
        plus:5
    },
    {
        follows:200,
        avartarurl:"./images/avatar/4.jpg",
        isactive:false,
        ischecked:true,
        name:"Agnieszka Sidorowiscz",
        job:"PhD Student | University of Poznan",
        text1:"Editor-in- Chief | Wisetic Biotechnology...",
        skill:["Flexibility", "Research Skills"],
        plus:3
    },
    {
        follows:212,
        avartarurl:"./images/avatar/5.jpg",
        isactive:true,
        ischecked:false,
        name:"Agnieszka Sidorowiscz",
        job:"PhD Student | University of Poznan",
        text1:"Editor-in- Chief | Wisetic Biotechnology...",
        skill:["Organization", "Critical Thinking"],
        plus:10
    },
    {
        follows:150,
        avartarurl:"./images/avatar/6.jpg",
        isactive:true,
        ischecked:false,
        name:"Agnieszka Sidorowiscz",
        job:"PhD Student | University of Poznan",
        text1:"Editor-in- Chief | Wisetic Biotechnology...",
        skill:["Teamwork", "Creativity"],
        plus:5
    },
]

const EditorialBoard = () =>{
    return(
        <>
            <div className={styles.editor_borard}>
                <div className={styles.section_title}>
                    <div className={styles.title_text}>Editorial Board</div>
                    <div className={styles.title_info}>
                        <p>128</p>
                        <p>MEMBERS</p>
                    </div>
                </div>
                { 
                    data.map((card,j)=>{
                    return ( 
                            <ConnectionCard card={card} j={j}/>
                        )
                    })
                } 

                <div className={styles.section_footer_button}>
                    <Button variant="outlined" color="secondary">Editorial Board</Button>
                </div>
            </div>
        </>
    )
}

export default EditorialBoard;
