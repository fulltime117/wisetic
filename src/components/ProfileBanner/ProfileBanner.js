import React, { Component } from 'react'
import styles from './ProfileBanner.module.css';
import Data from "../../assets/data/user-basic-data.json"
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';


export class ProfileBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userData: Data
        };
    }


    render() {
        const data = this.state.userData;
        return (
            <div className={styles.p_banner}>
               <div className={styles.baner_image}>
                   <img src={data.overflowimage} alt="profile-background"/>
               </div>
               <div className={styles.profile_cover}>
                    <div className={styles.p_photo}>
                        <img src={data.profilephoto} alt="profile-photo"></img>
                    </div>
                    <div className={styles.profile_data}>
                        <Typography variant="h5" gutterBottom>
                            {data.name}
                            {/* {data.ismember &&
                                <Fab variant="extended" color="primary" className={styles.memberfab} size="small" color="primary"  aria-label="ismember" disabled style={{marginLeft:'20px', backgroundColor: "rgb(85 0 255 / 29%)"}}>
                                    member
                                </Fab>
                            } */}
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            {data.job}
                        </Typography>
                        <div className={styles.p_info}>                            
                            <Typography variant="body2" styele={{marginTop:"9px"}}>
                                {data.followers} Followers &nbsp;&nbsp;&nbsp; {data.following} Following
                            </Typography>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                            >
                               <img src="./images/facebook.svg" alt="" width="16px" />                                
                            </IconButton>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                            >
                               <img src="./images/instagram.svg" alt="" width="16px" />                                
                            </IconButton>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                            >
                               <img src="./images/linkedin.svg" alt="" width="16px" />                                
                            </IconButton>
                        </div>
                    </div>
               </div>
               
            </div>
        )
    }
}

export default ProfileBanner
