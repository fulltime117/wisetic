import React, { Component } from 'react';
import styles from "./Connections.module.css";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


import ConnectionCard  from "./ConnectionCard"

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
        plus:9
    },
    {
        follows:200,
        avartarurl:"./images/avatar/4.jpg",
        isactive:false,
        ischecked:true,
        name:"Agnieszka Sidorowiscz",
        job:"PhD Student | University of Poznan",
        text1:"Editor-in- Chief | Wisetic Biotechnology...",
        skill:["Flexibility"],
        plus:9
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
        plus:9
    },
    {
        follows:121,
        avartarurl:"./images/avatar/6.jpg",
        isactive:false,
        ischecked:false,
        name:"Agnieszka Sidorowiscz",
        job:"PhD Student | University of Poznan",
        text1:"Editor-in- Chief | Wisetic Biotechnology...",
        skill:["Problem Solving",],
        plus:9
    },
    {
        follows:333,
        avartarurl:"./images/avatar/7.jpg",
        isactive:true,
        ischecked:true,
        name:"Agnieszka Sidorowiscz",
        job:"PhD Student | University of Poznan",
        text1:"Editor-in- Chief | Wisetic Biotechnology...",
        skill:[" Emotional Intelligence", "Creativity"],
        plus:9
    },
    
]

export default function Connections() {    
    return (
        <div className="component-connection">
            <div className={styles.p_title}>
                <Typography variant="h5">
                    Connection
                </Typography>                   
            </div>
            <Divider />
            <div className={styles.connection_body}>
                { 
                    data.map((card,j)=>{
                    return ( 
                        <ConnectionCard card={card} j={j}/>
                        )
                    })
                }  
            </div>
        </div>
    )    
}


