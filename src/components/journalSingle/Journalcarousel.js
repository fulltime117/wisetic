import React from 'react'
import styles from "./journalSingle.module.css"

import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const JournalCarousel = () =>{
    const defaultProps = {
        color: 'secondary',
        children: <ExpandMoreOutlinedIcon />,
    };


    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
        <>
            <div className={styles.journal_carousel}>
                <div className={styles.j_c_title}><strong>Article Type: </strong> Article Type: Research Article</div>
                <div className={styles.j_c_content}>
                    <div className={styles.j_c_content_title}>Title: Green synthesis of ZnO Nanoparticles using Plant extract and Biomedical Applications</div>
                    <div className={styles.j_c_author_avatar}>   
                        <div><Avatar alt="" src="./images/avatar/2.jpg" />&nbsp;&nbsp;sdsdasd</div>                   
                        <div><Avatar alt="" src="./images/avatar/3.jpg" />&nbsp;&nbsp;asdasdas</div>                   
                        <div><Avatar alt="" src="./images/avatar/4.jpg" />&nbsp;&nbsp;asdasdas</div>                   
                        <div><Avatar alt="" src="./images/avatar/5.jpg" />&nbsp;&nbsp;asdasd</div>
                        <div> 
                            <IconButton onClick={handleClick}>
                                <Badge badgeContent={100} max={6}  {...defaultProps} />                                
                            </IconButton> 
                            <Menu
                            id="author-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}><Avatar alt="" src="./images/avatar/2.jpg" />&nbsp;&nbsp;Author Name</MenuItem>
                                <MenuItem onClick={handleClose}><Avatar alt="" src="./images/avatar/2.jpg" />&nbsp;&nbsp;Author Name</MenuItem>
                                <MenuItem onClick={handleClose}><Avatar alt="" src="./images/avatar/2.jpg" />&nbsp;&nbsp;Author Name</MenuItem>
                                <MenuItem onClick={handleClose}><Avatar alt="" src="./images/avatar/2.jpg" />&nbsp;&nbsp;Author Name</MenuItem>
                                <MenuItem onClick={handleClose}><Avatar alt="" src="./images/avatar/2.jpg" />&nbsp;&nbsp;Author Name</MenuItem>
                                <MenuItem onClick={handleClose}><Avatar alt="" src="./images/avatar/2.jpg" />&nbsp;&nbsp;Author Name</MenuItem>
                            </Menu>                           
                        </div>

                    </div>
                    <div className={styles.corresponding_names}><strong>Corresponding Author(s)  : </strong> <span>John</span>, <span>Amit</span>,<span>Toufik</span></div>
                    <div className={styles.author_info}>
                        <div className={styles.author_info_row}>
                            <div className={styles.author_info_left}><strong>Date of Submission: </strong> 11 March, 2020</div>
                            <div className={styles.author_info_right}><strong>Date of Online Publication:</strong> 11 March, 2020</div>
                        </div>
                        <div className={styles.author_info_row}>
                            <div className={styles.author_info_left}><strong>Article Unique Number:</strong> XBC1234</div>
                            <div className={styles.author_info_right}><strong>Article Identification Database: </strong> XBC1234</div>
                        </div>
                        <div className={styles.author_info_row}>
                            <div className={styles.author_info_left}><strong>Academic Editor: </strong> Name Surname</div>
                            <div className={styles.author_info_right}><strong>Reviewed by: </strong> Name Surname, Name Surname, Name Surname</div>
                        </div>
                        <div className={styles.author_info_row}>
                            <strong>Open Access:  </strong> Creative Common License (CC by4.0)
                        </div>
                    </div>
                    <div className={styles.journal_carousel_buttons}>
                        <div className={styles.journal_carousel_download_button}>
                            <Button
                                variant="contained"
                                color="secondary"                                
                                startIcon={<AssignmentIcon />}
                            >
                                PDF
                            </Button>
                        </div>
                        <div className={styles.journal_carousel_keyword_buttons}>
                            <strong>Keywords:  </strong>
                            <Button variant="outlined" color="secondary">
                                Surface Electron Microscopy
                            </Button>
                            <Button variant="outlined" color="secondary">
                                Surface Electron Microscopy
                            </Button>
                            <Button variant="outlined" color="secondary">
                                Surface Electron Microscopy
                            </Button>
                            <Button color="secondary">
                                + more Keywords
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JournalCarousel;
