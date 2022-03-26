import React from 'react'
import styles from "./JournalIndividual.module.css"

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Research from '../ArticlePosts/WithGraphical/InJournal_Research '
import Button from '@material-ui/core/Button';


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
          <div p={0}>
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
      fontSize:"12px"
    },
    app_bar: {
        fontSize:"12px",
        marginBottom:"12px"
    },
    tab:{
        fontSize:"11.28px", 
        minHeight: '14px',
        padding:"8px",
        minWidth:"5px",

    },
    tabs:{
        minHeight:"14px"
    },

    
  }));

const EditorialBoard = () =>{

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
            <div className={styles.editor_borard}>
                <div className={styles.section_title}>
                    <div className={styles.title_text}>Publications</div>
                    <div className={styles.title_info}>
                        <p>12,00</p>
                        <p>Articles Online</p>
                    </div>
                </div>

                <div className={styles.section_tab}>
                    <div className={classes.root}>
                        <AppBar position="static" color="default" className={classes.app_bar}>
                            <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="secondary"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                            className={classes.tabs}                           
                            >
                                <Tab className={classes.tab} label="Recent" {...a11yProps(0)} />
                                <Tab className={classes.tab} label="Most Cited" {...a11yProps(1)} />
                                <Tab className={classes.tab} label="Most Downloaded" {...a11yProps(2)} />
                                <Tab className={classes.tab} label="Most Viewed" {...a11yProps(3)} />
                            </Tabs>
                        </AppBar>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={value}
                            onChangeIndex={handleChangeIndex}
                            className={styles.swip_view}
                        >
                            <TabPanel value={value} index={0} dir={theme.direction}>
                                <div className="j-tab-content">
                                    <Research article={"article"} />
                                    <Research review={"review"}/>
                                    <Research methods={"methods"}/>
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                                <div className="j-tab-content">
                                    <Research review={"review"}/>
                                    <Research methods={"methods"}/>
                                    <Research article={"article"} />
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={2} dir={theme.direction}>
                                <div className="j-tab-content">
                                    <Research methods={"methods"}/>
                                    <Research review={"review"}/>
                                    <Research article={"article"} />
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={3} dir={theme.direction}>
                                <div className="j-tab-content">
                                    <Research article={"article"} />
                                    <Research review={"review"}/>
                                    <Research methods={"methods"}/>
                                </div>
                            </TabPanel>
                        </SwipeableViews>
                    </div>
                </div>
                <div className={styles.section_footer_button}>
                    <Button variant="outlined" color="secondary">View all Publications</Button>
                </div>
            </div>
        </>
    )
}

export default EditorialBoard;
