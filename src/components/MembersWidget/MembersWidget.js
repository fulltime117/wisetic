import React, {} from 'react'
import styles from './MembersWidget.module.css'



import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';


const listItem = [
    "active","","", "active", ""
]

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`w-member-${index}`}
        aria-labelledby={`simple-tab-${index}`}
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
      id: `simple-tab-${index}`,
      'aria-controls': `w-member-${index}`,
    };
  }

const ActiveStyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#0DEB14',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        
        '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
        transform: 'scale(.8)',
        opacity: 1,
        },
        '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
        },
    },
}))(Badge);
  

const Members = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <div className="widget_body">
            <div className="widget_title">
                <Typography variant="subtitle1">
                   Members
                </Typography>
                <div className="widget_tab">
                    <div position="static">
                        <Tabs value={value} onChange={handleChange}>
                            <Tab label="Popular" {...a11yProps(0)} />
                            <Tab label="Active" {...a11yProps(1)} />
                        </Tabs>
                    </div>
                    <Divider/>
                </div>
            </div>
            <div className="widget_content member_widget">
                <div>
                    <TabPanel value={value} index={0}>
                        <List>
                            { 
                                listItem.map((item,j)=>{
                                    return (
                                        <ListItem key={j}>
                                            <ListItemAvatar>
                                                {item==="active" 
                                                
                                                ? <ActiveStyledBadge
                                                        overlap="circle"
                                                        anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'right',
                                                        }}
                                                        variant="dot"
                                                    >
                                                        <Avatar alt="Remy Sharp" src="" />
                                                    </ActiveStyledBadge>
                                                : <Avatar alt="Remy Sharp" src="" />
                                                }
                                            </ListItemAvatar>
                                            <ListItemText primary="User Name" />
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        { 
                            listItem.map((item,j)=>{
                                if (item=="active"){
                                    return (
                                        <ListItem key={j}> 
                                            <ListItemAvatar>
                                                <ActiveStyledBadge
                                                        overlap="circle"
                                                        anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'right',
                                                        }}
                                                        variant="dot"
                                                    >
                                                        <Avatar alt="Remy Sharp" src="" />
                                                    </ActiveStyledBadge>                                                
                                            </ListItemAvatar>
                                            <ListItemText primary="User Name" />
                                        </ListItem> 
                                     )
                                }
                            })
                        }
                    </TabPanel>
                </div>                
            </div>            
        </div>
    )
}

export default Members