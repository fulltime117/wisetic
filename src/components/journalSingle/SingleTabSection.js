import React from 'react'
import styles from "./journalSingle.module.css"

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div p={3}>
          <div>{children}</div>
        </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        fontSize:"12px",
        boxShadow:"none"
      },
      app_bar: {
          boxShadow:"none",
          backgroundColor:"#e0e0e0",
      },
      tab:{
          fontSize:"11px", 
          minHeight: '14px',
          padding:"8px",
          minWidth:"5px", 
          
      },
      tabs:{
          minHeight:"14px",
      },   
      
      small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
      },
}));

const SingleTabSection = () =>{

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return(
        <>
            <div className="jornal-single-tabsection">
                <div className={classes.root}>  
                    <AppBar position="static" color="default" classes={classes.app_bar}>
                        <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="secondary"
                        variant="scrollable"
                        aria-label="full width tabs example"
                        className={classes.tabs}
                        >
                            <Tab label="Outline" className={classes.tab} {...a11yProps(0)} />
                            <Tab label="Figures"  className={classes.tab} {...a11yProps(1)} />
                            <Tab label="References" className={classes.tab} {...a11yProps(2)} />
                            <Tab label="Ranked References" className={classes.tab} {...a11yProps(3)} />
                            <Tab label="3D Peer Review" className={classes.tab} {...a11yProps(4)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <div className={styles.in_outlins}>
                                <Button variant="contained">Abstract</Button>
                                <Button variant="contained">1. Instroduction</Button>
                                <Button variant="contained">2. Materials and Methods</Button>
                                <Button variant="contained">3. Results and Discussion</Button>
                                <Button variant="contained">4. Conclusion of drawing</Button>
                                <Button variant="contained">5. thousand unknown plants</Button>
                                <Button variant="contained">6. countless indescribable</Button>
                                <Button variant="contained">7. drawing a single stroke</Button>
                                <Button variant="contained">Author Contribution</Button>
                                <Button variant="contained">Referece</Button>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <div className={styles.in_figures}>
                                <div className={styles.in_tab_figure}>
                                    <img src="./images/journal/edx.png" alt=""/>
                                    <div className={styles.intab_figure_text}>
                                        <span> Figure.1 </span> volutpat eget mi et,porta tincint  
                                    </div>
                                </div>
                                <div className={styles.in_tab_figure}>
                                    <img src="./images/journal/edx.png" alt=""/>
                                    <div className={styles.intab_figure_text}>
                                        <span> Figure.1 </span> volutpat eget mi et,porta tincint  
                                    </div>
                                </div>
                                <div className={styles.in_tab_figure}>
                                    <img src="./images/journal/edx.png" alt=""/>
                                    <div className={styles.intab_figure_text}>
                                        <span> Figure.1 </span> volutpat eget mi et,porta tincint  
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            <div className={styles.in_figures}>
                                <div className={styles.in_refer_text}>
                                    <span>1- </span>  Benson, J. R.; Jatoi, I. The global breast cancer burden. Future Oncol. 2012, 8, 697– 702,  DOI: 10.2217/fon.12.61 [Crossref], [PubMed], [CAS], Google Scholar 
                                </div>
                                <div className={styles.in_refer_text}>
                                    <span>2- </span>  Benson, J. R.; Jatoi, I. The global breast cancer burden. Future Oncol. 2012, 8, 697– 702,  DOI: 10.2217/fon.12.61 [Crossref], [PubMed], [CAS], Google Scholar 
                                </div>
                                <div className={styles.in_refer_text}>
                                    <span>3- </span>  Benson, J. R.; Jatoi, I. The global breast cancer burden. Future Oncol. 2012, 8, 697– 702,  DOI: 10.2217/fon.12.61 [Crossref], [PubMed], [CAS], Google Scholar 
                                </div>
                                <div className={styles.in_refer_text}>
                                    <span>4- </span>  Benson, J. R.; Jatoi, I. The global breast cancer burden. Future Oncol. 2012, 8, 697– 702,  DOI: 10.2217/fon.12.61 [Crossref], [PubMed], [CAS], Google Scholar 
                                </div>
                                <div className={styles.in_refer_text}>
                                    <span>5- </span>  Benson, J. R.; Jatoi, I. The global breast cancer burden. Future Oncol. 2012, 8, 697– 702,  DOI: 10.2217/fon.12.61 [Crossref], [PubMed], [CAS], Google Scholar 
                                </div>
                                <div className={styles.in_refer_text}>
                                    <span>6- </span>  Benson, J. R.; Jatoi, I. The global breast cancer burden. Future Oncol. 2012, 8, 697– 702,  DOI: 10.2217/fon.12.61 [Crossref], [PubMed], [CAS], Google Scholar 
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={3} dir={theme.direction}>
                            <div className={styles.in_figures}>
                                <div className={styles.circle_mark} style={{backgroundColor:"#F0D309"}}>
                                    GOLD
                                </div>
                                <div className={styles.in_refer_text}>
                                    <span>1- </span>  Benson, J. R.; Jatoi, I. The global breast cancer burden. Future Oncol. 2012, 8, 697– 702,  DOI: 10.2217/fon.12.61 [Crossref], [PubMed], [CAS], Google Scholar 
                                </div>
                                <div className={styles.in_refer_text}>
                                    <span>2- </span>  Benson, J. R.; Jatoi, I. The global breast cancer burden. Future Oncol. 2012, 8, 697– 702,  DOI: 10.2217/fon.12.61 [Crossref], [PubMed], [CAS], Google Scholar 
                                </div>
                                <div className={styles.in_refer_text}>
                                    <span>3- </span>  Benson, J. R.; Jatoi, I. The global breast cancer burden. Future Oncol. 2012, 8, 697– 702,  DOI: 10.2217/fon.12.61 [Crossref], [PubMed], [CAS], Google Scholar 
                                </div>
                                <div className={styles.circle_mark} style={{backgroundColor:"#C7C7C7"}}>
                                    SILVER
                                </div>
                                <div className={styles.in_refer_text}>
                                    <span>4- </span>  Benson, J. R.; Jatoi, I. The global breast cancer burden. Future Oncol. 2012, 8, 697– 702,  DOI: 10.2217/fon.12.61 [Crossref], [PubMed], [CAS], Google Scholar 
                                </div>
                                <div className={styles.circle_mark} style={{backgroundColor:"#D26E2C", fontSize:"8px"}}>
                                    BRONZE
                                </div>
                                <div className={styles.in_refer_text}>
                                    <span>5- </span>  Benson, J. R.; Jatoi, I. The global breast cancer burden. Future Oncol. 2012, 8, 697– 702,  DOI: 10.2217/fon.12.61 [Crossref], [PubMed], [CAS], Google Scholar 
                                </div>
                                <div className={styles.in_refer_text}>
                                    <span>6- </span>  Benson, J. R.; Jatoi, I. The global breast cancer burden. Future Oncol. 2012, 8, 697– 702,  DOI: 10.2217/fon.12.61 [Crossref], [PubMed], [CAS], Google Scholar 
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={4} dir={theme.direction}>
                            <div className={styles.in_figures}>
                                <div className={styles.peer_title}>Learn, how the 3D Peer Review Concluded Publication of this Article</div>
                                <div className={styles.peer_avatar}>
                                    <Avatar alt="Remy Sharp" src="./images/avatar/3.jpg"  className={classes.small}/>
                                    Name Surname (Reviewer-I)
                                </div>
                                <div className={styles.peer_review_title}>
                                    <div>Q-1</div>
                                    <div>  12-2-2020 (7:30 pm)</div>
                                </div>
                                <div className={styles.peer_review_text}>
                                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls mine. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. 
                                </div>

                                <div className={styles.peer_avatar}>
                                    <Avatar alt="Remy Sharp" src="./images/avatar/7.jpg"  className={classes.small}/>
                                    Name Surname (Reviewer-I)
                                </div>
                                <div className={styles.peer_review_title}>
                                    <div>Q-1</div>
                                    <div>  12-2-2020 (7:30 pm)</div>
                                </div>
                                <div className={styles.peer_review_text}>
                                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls mine. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. 
                                </div>

                                <div className={styles.peer_avatar}>
                                    <Avatar alt="Remy Sharp" src="./images/avatar/6.jpg"  className={classes.small}/>
                                    Name Surname (Reviewer-I)
                                </div>
                                <div className={styles.peer_review_title}>
                                    <div>Q-1</div>
                                    <div>  12-2-2020 (7:30 pm)</div>
                                </div>
                                <div className={styles.peer_review_text}>
                                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls mine. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. 
                                </div>
                            </div>
                        </TabPanel>
                    </SwipeableViews>
                </div>
            </div>
        </>
    )
}

export default SingleTabSection;
