import React, { Component, useState, useEffect } from 'react';
import styles from "./Media.module.css";
import { getLatestImages } from "./imageService";
import ImageGallary from "./Gallary";


import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';





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
          <Box p={3}>
            <div>{children}</div>
          </Box>
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
      'aria-controls': `media gallay panel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: "100%",
    },
    appbar:{
        backgroundColor: "transparent",
        boxShadow:'none',
        marginBottom:'24px',
    }
  }));


  


const Media = () => { 

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };


    // imagae gallry 
    const [imageData, setImageData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState("");

    useEffect(() => {
        searchData();
    }, [query]);

    const searchData = query => {
        setIsLoading(true);
                
        getLatestImages()
            .then(res => res.json())
            .then(data => {
            setIsLoading(false);
            setImageData(data);
        });
        
    };

    const handleOnChange = e => {
        setQuery(e.target.value);
        searchData(e.target.value);
    };

    
    
    
    return (
        <div className="my-profileTab-page" >
            <div className={styles.p_title}>
                <Typography variant="h5">
                    media
                </Typography>                   
            </div>
            <Divider />
            <div className="in_profile_mediabody">
                <div className={classes.root}>
                    <AppBar position="static" color="default" className={classes.appbar}>
                        <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        style={{fontSize:"14px"}}
                        variant="fullWidth"
                        aria-label="photo and video tab"
                        >
                            <Tab label="Photo" {...a11yProps(0)}/>
                            <Tab label="Video" {...a11yProps(1)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <div className={styles.images_wraper}>
                                <ImageGallary imageData={imageData} isLoading={isLoading}/>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <div className={styles.images_wraper}>

                            </div>
                        </TabPanel>                        
                    </SwipeableViews>
                </div> 
            </div>
        </div>            
        
    )
    
}

export default Media


