import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Container from '@material-ui/core/Container';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import Avatar from '@material-ui/core/Avatar';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import Link from 'next/link'
import MenuIcon from '@material-ui/icons/Menu';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GroupIcon from '@material-ui/icons/Group';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ImageIcon from '@material-ui/icons/Image';
import ListItemText from '@material-ui/core/ListItemText';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },

  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  headericongroup: {
    display: 'flex',
  }



}));

export default function Header({mobilesideopen}) {
  const classes = useStyles();
  const [isMobile, setMobile] = React.useState(false)
  const router = useRouter()

  

 
  // open profile menu
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuProfileMenuClose = () => {
    setAnchorEl(null);
  };

  // open message menu  
  const [anchorMail, setAnchorMail] = React.useState(null);

  const isMessageMenuOpen = Boolean(anchorMail);

  const [messageData,setMessageData] = React.useState([
    {},{},{},{},{}
  ])

  const handleClickMessageBadge = (event) => {
    setAnchorMail(event.currentTarget);
  };

  const handleMessageMenuClose = () => {
    setAnchorMail(null);
  };


  // remove message
  const handleMessageRemove = (index) =>{ 
    let arr = [...messageData];
    arr.splice(index,1);
    setMessageData(arr);
  }

  // open alram menu
  const [anchorAlram, setAnchorAlram] = React.useState(null);
  const isAlramMenuOpen = Boolean(anchorAlram);
  const [alramData,setAlramData] = React.useState([
    {},{},{}
  ])

  const handleClickAlarmBadge = (event) =>{
    setAnchorAlram(event.currentTarget);
  }

  const handleAlarmMenuClose = () => {
    setAnchorAlram(null);
  };

  // remove alram
  const handleAlramRemove = (index) => {
    let arr = [...alramData];
    arr.splice(index,1);
    setAlramData(arr); 
  }



  // device recognize and if that is mobile set mobile state

  React.useEffect(() => {  
    var win_width = window.innerWidth;
    if(win_width<768){
         setMobile(true);
    } 
  },[]);





  // profile menu content

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
        id={menuId}
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        open={isMenuOpen}
        onClose={handleMenuProfileMenuClose}
    >
      <Link href="/profile">
        <a><MenuItem onClick={handleMenuProfileMenuClose}><AccountCircleIcon/>My Profile</MenuItem></a>
      </Link>
      <Link href="/">
        <a> <MenuItem className="menu-link" onClick={handleMenuProfileMenuClose}><GroupIcon/>My Communities</MenuItem></a>
      </Link>
      <Link href="/">
        <a>  <MenuItem className="menu-link" onClick={handleMenuProfileMenuClose}><SchoolIcon/>My Skills & Courses</MenuItem></a>
      </Link>
      <Link href="/">
        <a> <MenuItem className="menu-link" onClick={handleMenuProfileMenuClose}><WorkIcon/>My CV</MenuItem></a>
      </Link>
      <Link href="/">
        <a> <MenuItem className="menu-link" onClick={handleMenuProfileMenuClose}><DashboardIcon/>My Dashboard</MenuItem></a>
      </Link>
      <Link href="/">
        <a> <MenuItem className="menu-link" onClick={handleMenuProfileMenuClose}><AccountBalanceWalletIcon/>My Invoices</MenuItem></a>
      </Link>
      <Link href="/">
        <a> <MenuItem className="menu-link" onClick={handleMenuProfileMenuClose}><SettingsIcon/>Settings</MenuItem></a>
      </Link>
      <Link href="/">
        <a> <MenuItem className="menu-link" onClick={handleMenuProfileMenuClose}><ExitToAppIcon/>Log Out</MenuItem></a>
      </Link>  
    </Menu>
  );


  // message menu content 

  const renderMessageMenu = (
    <React.Fragment>
    <Menu
        id="header-message-menu"
        anchorEl={anchorMail}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        open={isMessageMenuOpen}
        onClose={handleMessageMenuClose}
      >
        
        <MenuItem className="message-menu-header">
            <div style={{display:'flex', justifyContent:"space-between", alignItems:'center', width:"100%"}}>
              <Typography variant="overline" display="block" className="pointer-text hover-effect-a">
                Message
              </Typography>
              <Typography variant="caption" display="block" className="pointer-text hover-effect-a">
                ViewAll
              </Typography>
            </div>
        </MenuItem>

        { 
          messageData.map((data,j)=>{
          return (
            
              <MenuItem className="message-list" key={j}>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText onClick={handleMessageMenuClose}>
                    <Typography variant="body2" display="block" >
                      Message Title Here
                    </Typography>
                    <Typography variant="caption" display="block" >
                      Message content
                    </Typography>
                    <Typography variant="caption" display="block" >
                      time line
                    </Typography>
                </ListItemText>
                <div className="message-notification-close">
                  <IconButton aria-label="delete" className={classes.margin} size="small" onClick={()=>handleMessageRemove(j)}>
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                </div>
              </MenuItem> 
            
            )
          })
        }               
      </Menu> 
    </React.Fragment>    
  )

  // alram menu content 

  const renderAlramMenu = (
    <React.Fragment>
    <Menu
        id="header-alram-menu"
        anchorEl={anchorAlram}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        open={isAlramMenuOpen}
        onClose={handleAlarmMenuClose}
      >
        { 
          alramData.map((data,j)=>{
          return (
              <MenuItem className="message-list" key={j}>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText onClick={handleAlarmMenuClose}>
                    <Typography variant="body2" display="block" >
                      User Name
                    </Typography>
                    <Typography variant="caption" display="block" >
                      content
                    </Typography>
                    <Typography variant="caption" display="block" >
                      time line
                    </Typography>
                </ListItemText>                
                <div className="message-notification-close">
                  <IconButton aria-label="delete" className={classes.margin} size="small" onClick={()=>handleAlramRemove(j)}>
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                </div>
              </MenuItem>
            )
          })
        }  
        <MenuItem className="alram-menu-footer">
            <div style={{display:'flex', justifyContent:"space-between", alignItems:'center', width:"100%"}}>
              <Typography variant="overline" display="block" className="pointer-text hover-effect-a"> 
                 {alramData.length>0?"See all notification":"No notification"}
              </Typography>
            </div>
        </MenuItem>             
      </Menu> 
    </React.Fragment>    
  )




  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Container maxWidth="lg">
            <Toolbar> 
                {isMobile&&
                  <IconButton
                    aria-label="show side menu"
                    onClick={() => {
                      mobilesideopen("open");
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                }
                <div className="sigt-logo">
                  <Link href="/">
                    <a><img src="./images/Logo-with-text.png" alt=""/></a> 
                  </Link>   
                </div> 

                <div className="nav-menu-link">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                  <Link href="/">
                    <a>Members</a>
                  </Link>
                  <Link href="/journalOverall">
                    <a>Journals</a>
                  </Link>
                  <Link href="/">
                    <a>Community</a>
                  </Link>
                  <Link href="/">
                    <a>Jobs</a>
                  </Link>
                  <Link href="/blogpage">
                    <a>Blogs</a>
                  </Link>
                  <Link href="/">
                    <a>Skills & Courses</a>
                  </Link>
                </div>

                <div className={classes.headericongroup}>
                    <IconButton aria-label="show 4 new mails" color="inherit" aria-haspopup="true" onClick={handleClickMessageBadge}>
                      <Badge badgeContent={4} color="secondary">
                          <EmailOutlinedIcon />
                      </Badge>
                    </IconButton>
                    <IconButton aria-label="show 17 new notifications" color="inherit" aria-haspopup="true" onClick={handleClickAlarmBadge}>
                      <Badge badgeContent={17} color="secondary">
                          <NotificationsNoneOutlinedIcon />
                      </Badge>
                    </IconButton>
                    <IconButton aria-label="show 10 new event" color="inherit" className={classes.sectionDesktop}>
                      <Badge badgeContent={10} color="secondary" onClick={() => router.push('/calendar')}>
                          <EventAvailableOutlinedIcon />
                      </Badge>
                    </IconButton>
                    <div className="avatar-wrapper">
                        <Avatar alt="John" src="./images/avatar/1.jpg" />
                        <Typography variant="subtitle2" className={classes.sectionDesktop}>
                            George Martin
                        </Typography>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <KeyboardArrowDownOutlinedIcon />
                        </IconButton>
                    </div>                    
                </div>
                
            </Toolbar>
        </Container>
      </AppBar>
      {renderMessageMenu}
      {renderMenu}
      {renderAlramMenu}
    </div>
  );
}
