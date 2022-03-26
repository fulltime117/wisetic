import React, {useState,useEffect } from 'react'
import { ProgressBar } from 'react-bootstrap';

const TestBar = () =>{
    const now = 32;
    return(
        <div>
         <ProgressBar style={{marginTop:"60px", overflow:"visible", borderRadius:"0px"}}>
            <ProgressBar variant="success" animated label={`${now}%`} now={now} key={1} style={{backgroundColor:"#1BEA3D !important"}} />
            <ProgressBar className="bar-pointer" key={2}  />
         </ProgressBar>
        </div>
        
    )
}

export default TestBar