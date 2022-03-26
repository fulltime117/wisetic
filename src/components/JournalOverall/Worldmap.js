import React from 'react'
import styles from "./JournalOveralBanner.module.css"

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
     
    },
    
    large: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
  }));

const WorldMap = () => { 
    const classes = useStyles();
    return (
        <>
            <div className={styles.worldmap_secton}>
                <div className={styles.map_wrapper}>
                    <div className={styles.world_map}>
                        <img src="./images/journal/map.png" alt="map"/>
                    </div>
                    <div className={styles.registered_graph}>
                        <div className={styles.users_info_section}>
                            <div className={styles.mutilple_avatar}>
                                <AvatarGroup max={5} className={classes.root}>
                                    <Avatar alt="Remy Sharp" className={classes.large} src="./images/avatar/2.jpg" />
                                    <Avatar alt="Travis Howard" className={classes.large} src="./images/avatar/3.jpg" />
                                    <Avatar alt="Cindy Baker" className={classes.large} src="./images/avatar/4.jpg" />
                                    <Avatar alt="Cin Baker" className={classes.large} src="./images/avatar/5.jpg" />
                                </AvatarGroup>
                            </div>
                            <div className={styles.registerd_num}> 3,137</div>
                            <div className={styles.registerd_member}>
                                <div className={styles.member_num}>2.3% <ArrowRightAltIcon style={{transform:"rotate(-90deg)", fontSize:"18px"}}/></div>
                                <div className={styles.member_text}> Registered Member</div>
                            </div>
                        </div>
                        <div className={styles.register_state_section}>
                            <div className={styles.register_graph}>
                                <img src="./images/journal/Chart.svg" alt="graph"/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.map_section_footer}>
                        <Button variant="outlined" color="secondary">Become The Member of Editorial Board</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorldMap;
