import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';


import WithGraphical from "../ArticlePosts/WithGraphical/WithGraphical"
import WithOutGraphical from "../ArticlePosts/WithOutGraphical/WithOutGraphical"
import SpecialTopic from "../ArticlePosts/SpecialTopic/SpecialTopic"
import QuestionPost from "../QuestionPost/QuestionPost"
import EventPost from "../EventPost/EventPost"
import Poll from "../Poll/Poll"
import ProjectPost from "../ProjectPost/ProjectPost"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'transparent',
  },

  apptab: {
    background: 'transparent',
    color: 'var(--text-color)',
    boxShadow: 'none',
    marginTop: '24px',
    // borderBottom: '2px solid var(--border-color)',
    marginBottom: '6px'
  },

  paper: {
    marginBottom:"24px",
  }
}));

export default function PostTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="post-contents">
        <div className={classes.root} >
            <AppBar position="static" className={classes.apptab}>
                <Tabs value={value} onChange={handleChange} aria-label="post-tab">
                  <Tab label="All Updates" {...a11yProps(0)} />
                  <Tab label="Community" {...a11yProps(1)} />
                  <Tab label="Followings" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} style={{padding:"0px"}}>
                <Paper className={classes.paper}>
                  <WithGraphical/>                    
                </Paper>
                <Paper className={classes.paper}>
                  <WithOutGraphical />
                </Paper>
                <Paper className={classes.paper}>
                  <SpecialTopic />
                </Paper>
                <Paper className={classes.paper}>
                  <QuestionPost />
                </Paper>
                <Paper className={classes.paper}>
                  <EventPost />
                </Paper>
                <Paper className={classes.paper}>
                  <Poll />
                </Paper>
                <Paper className={classes.paper}>
                  <ProjectPost />
                </Paper>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Paper className={classes.paper}>
                  <SpecialTopic />
                </Paper>
                <Paper className={classes.paper}>
                  <QuestionPost />
                </Paper>
                <Paper className={classes.paper}>
                  <EventPost />
                </Paper>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Paper className={classes.paper}>
                  <EventPost />
                </Paper>
                <Paper className={classes.paper}>
                  <Poll />
                </Paper>
                <Paper className={classes.paper}>
                  <ProjectPost />
                </Paper>
            </TabPanel>
        </div>
    </div>
  );
}
