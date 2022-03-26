import React from 'react'
import styles from "./JournalIndividual.module.css"

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const IndividualBanner = (props) =>{    
    const {single} = props
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <>
            <div className="individual-bannders">
                <video autoPlay muted loop style={{
                    height:"100%",
                    position:"absolute",
                    top:"0",
                    right:"0",    
                }}>
                    <source src="./video/7.mp4" type="video/mp4" />
                    <source src="./video/7.mp4" type="video/ogg" />
                    Your browser does not support the video tag.
                </video>

                <div className={styles.overalls}>
                    <div className={styles.overall_texts}>
                        <div className={styles.banner_pre_text}>Wisetic</div>
                        <div className={styles.overalls_header}>Biotechnology and Bioengineering</div>
                    </div>                    
                    <div className={styles.overall_dropdown} onClick={handleClick}>12 Sections &nbsp; <ExpandMoreIcon/></div>
                    
                    <Menu
                        id="journal-individual-section-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Plant Biotechnology</MenuItem>
                        <MenuItem onClick={handleClose}>Plant Biotechnology</MenuItem>
                        <MenuItem onClick={handleClose}>Plant Biotechnology</MenuItem>
                        <MenuItem onClick={handleClose}>Plant Biotechnology</MenuItem>
                        <MenuItem onClick={handleClose}>Plant Biotechnology</MenuItem>
                        <MenuItem onClick={handleClose}>Plant Biotechnology</MenuItem>
                        <MenuItem onClick={handleClose}>Plant Biotechnology</MenuItem>
                        <MenuItem onClick={handleClose}>Plant Biotechnology</MenuItem>
                        <div className="menu-footer-button-wrapper" onClick={handleClose}>
                            <Button variant="outlined" color="secondary">
                                Jornal
                            </Button>
                        </div>
                        
                    </Menu>
                </div>

                <div className={styles.overall_shape}>
                    <div className={styles.overall_shape_wraper}>
                        <div className={styles.white_shapes}>
                            <img src="./images/journal/banner-overall-white-shape.png"></img>
                        </div>
                        {!single&&<img className={styles.second_overall_image} src="./images/journal/j1.png"></img>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndividualBanner;
