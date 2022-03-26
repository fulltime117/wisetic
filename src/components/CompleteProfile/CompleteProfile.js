import React, { Component } from 'react'
import styles from './CompleteProfile.module.css'
import { ProgressRing } from "../ProgressRing/ProgressRing"


import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from 'next/link'

  export default function CompleteProfile() {
        var val = 75;
        return (
            <div className="widget_body">
                <div className="widget_title">
                    <Typography variant="subtitle1" gutterBottom>
                        Complete Your Profile
                    </Typography>
                    <Divider/>
                </div>
                <div className="widget_content">
                    <div className={styles.complete_profile}>
                        <div className={styles.circle_progress}>                            
                            <ProgressRing 
                                percent={val} 
                                size={150} 
                                lineWidth={10} 
                                progressColor="#32CD32"
                                trackColor="#32CD3232"
                                >
                            </ProgressRing>
                            <div className={styles.percent_show}>
                                <Typography  variant="subtitle2">
                                    {Math.round(val)} %
                                </Typography>
                                <Typography variant="body2">
                                    Complete
                                </Typography>                                
                            </div>
                        </div>  
                        
                        <FormControlLabel disabled label="Completed Item" control={<Checkbox checked name="checkedE" />} />
                        <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Completed Item" />
                        <Link href="/profile">
                            <a>
                                UnCompleted Item
                            </a>
                        </Link>                        
                    </div>
                </div>
            </div>
        )
    
}


