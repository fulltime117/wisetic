import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import ProfileInfo from '../ProfileInfo/ProfileInfo'
import Connections from '../Connections/Connections'
import ProfileTimeline from '../ProfileTimeline/ProfileTimeline'
import WithGraphical from '../ArticlePosts/WithGraphical/WithGraphical';
import WithOutGraphical from "../ArticlePosts/WithOutGraphical/WithOutGraphical"
import ProjectCard from '../ProjectCard/ProjectCard'
import MyCommunity from '../MyCommunity/MyCommunity'
import SkillCourse from '../SkillCourse/SkillCourse'
import MyDocuments from '../MyDocuments/MyDocuments'
import Media from '../MyMedia/Media'
import PublicationCard from '../PublicationCard/PublicationCard'
import EditorialContibutionCard from '../EditorialContibutionCard/EditorialContibutionCard';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'transparent',
  },

  tab_header: {
    marginBottom:"24px",
    boxShadow:"none",
    backgroundColor: "white",
    border:"1px solid #ebe9e6",
    borderTop:"0px solid",
    borderRadius:'4px',
  },
  
  info_paper: {
    padding:"0px"
  }

}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.tab_header}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab style={{textTransform:"none"}} label="Timeline" {...a11yProps(0)} />
          <Tab style={{textTransform:"none"}} label="Profile" {...a11yProps(1)} />
          <Tab style={{textTransform:"none"}} label="Connections" {...a11yProps(2)} />
          <Tab style={{textTransform:"none"}} label="Publications" {...a11yProps(3)} />
          <Tab style={{textTransform:"none"}} label="Projects" {...a11yProps(4)} />
          <Tab style={{textTransform:"none"}} label="Editorial Contributions" {...a11yProps(5)} />
          <Tab style={{textTransform:"none"}} label="Community" {...a11yProps(6)} />
          <Tab style={{textTransform:"none"}} label="Skills & Courses" {...a11yProps(7)} />
          <Tab style={{textTransform:"none"}} label="CV" {...a11yProps(8)} />
          <Tab style={{textTransform:"none"}} label="Documents" {...a11yProps(9)} />
          <Tab style={{textTransform:"none"}} label="Media" {...a11yProps(10)} />
          <Tab style={{textTransform:"none"}} label="Settings" {...a11yProps(11)} />
        </Tabs>
      </AppBar>

      <div>
        <TabPanel value={value} index={0}>
          <ProfileTimeline />
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.info_paper}>
          <ProfileInfo />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Connections />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Paper style={{marginBottom:"24px"}}>
            <PublicationCard />
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Paper style={{marginBottom:"24px"}}>
            <ProjectCard />
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Paper style={{marginBottom:"24px"}}>
            <EditorialContibutionCard />
          </Paper>
          
        </TabPanel>
        <TabPanel value={value} index={6}>
          <MyCommunity />
        </TabPanel>
        <TabPanel value={value} index={7}>
          <SkillCourse />
        </TabPanel>

        <TabPanel value={value} index={8}>
          <h1>CV content here</h1>
        </TabPanel>

        <TabPanel value={value} index={9}>
          <MyDocuments/>
        </TabPanel>

        <TabPanel value={value} index={10}>
          <Media/>
        </TabPanel>

        <TabPanel value={value} index={11}>
          <h1>Settings content here</h1>
        </TabPanel>
      </div>     
    </div>
  );
}
