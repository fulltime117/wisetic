import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CloseIcon from '@material-ui/icons/Close';
import Link from 'next/link'
import Tooltip from '@material-ui/core/Tooltip';


export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isMobile:false,
      leftHide:false,
    };
    this.HandleOpen = this.HandleOpen.bind(this); 
  }


  componentDidMount(){
    var win_width = window.innerWidth;
    if(win_width<768){
      this.setState({
        open:true,
        isMobile:true,        
      })
    }
  }

  HandleOpen(){    
    this.setState({open:!this.state.open});
    this.props.Reduse("open");
  }

  render() {
    return (
      <div className={ !(this.state.open)? 'side-content':'side-content open'}>
        <div className="side-header">
            {
              !(this.state.isMobile)?
              (
                <IconButton onClick={this.HandleOpen}>
                  {!(this.state.open)?<MenuIcon />:<ChevronLeftIcon />}
                </IconButton>
              ):(
                <IconButton onClick={()=>this.props.mobilesideclose('close')}>
                  <CloseIcon />
                </IconButton>
              )
            }         
        </div>
        <div className="side-body">
          <List component="nav" aria-label="main mailbox folders">

            {(this.state.isMobile)?
              <>
                <Link href="/">
                  <a>
                    <ListItem button>
                      <ListItemText primary="Home" />
                    </ListItem>
                  </a>
                </Link>                
                <ListItem button>
                  <ListItemText primary="Members" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Journals" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Jobs" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Blogs" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Skill Test & Courses" />
                </ListItem>      

                <Divider style={{background:"#b8c5d3", margin:"10px 24px"}}/>
                <Link href="/profile">
                  <a>
                    <ListItem button>
                      <ListItemText primary="Profile" />
                    </ListItem>
                  </a>
                </Link>
                <ListItem button>
                  <ListItemText primary="Publications" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Submit Article" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Create a Blog Post" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Edit Your CV" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="My Community" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="My Connections" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Editorial Board" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Policies" />
                </ListItem>
              </>
              :
              <>
              <Link href="/profile">
                <a>
                  <ListItem button>
                    <ListItemIcon>
                      <div className="side-icon profile-icon"></div>
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                  </ListItem>
                </a>
              </Link>
              <ListItem button>
                  <ListItemIcon>
                    <div className="side-icon public-icon"></div>
                  </ListItemIcon>
                <ListItemText primary="Publications" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <div className="side-icon submit-icon"></div>
                </ListItemIcon>
                <ListItemText primary="Submit Article" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <div className="side-icon create-icon"></div>
                </ListItemIcon>
                <ListItemText primary="Create a Blog Post" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <div className="side-icon edit-cv-icon"></div>
                </ListItemIcon>
                <ListItemText primary="Edit Your CV" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <div className="side-icon dashboard-icon"></div>
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <div className="side-icon community-icon"></div>
                </ListItemIcon>
                <ListItemText primary="My Community" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <div className="side-icon connection-icon"></div>
                </ListItemIcon>
                <ListItemText primary="My Connections" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <div className="side-icon edit-board-icon"></div>
                </ListItemIcon>
                <ListItemText primary="Editorial Board" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <div className="side-icon policy-icon"></div>
                </ListItemIcon>
                <ListItemText primary="Policies" />
              </ListItem>
            </>

            }
            
          </List>
          <Divider />
          {/* <List component="nav" aria-label="secondary mailbox folders">
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            <ListItemLink href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemLink>
          </List> */}
        </div>
      </div>
    )
  }
}

export default Sidebar
