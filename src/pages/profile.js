import Layout from '../components/Layout/Layout'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProfileBanner from '../components/ProfileBanner/ProfileBanner';
import ProfileTab from '../components/ProfileTab/ProfileTab'
import CompleteProfile from "../components/CompleteProfile/CompleteProfile"
import Latestupdates from '../components/Latestupdates/Latestupdates'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent:"center"
  },
  paper: {
    color: 'var(--text-color)',
    borderRadius:"0px"
  },
  contain: {
    display:"felx",
    justifyContent:"center"
  },
  profilemain :{
    paddingTop:"0px !important"
  }
}));

export default function Profile() {
  const classes = useStyles();
  return (
    <>
      <Layout>
        <Container maxWidth="lg" className="profile-page">          
          <div className={classes.root}>
            <Grid container spacing={3} className={classes.contain}>
              <Grid item xs={12} sm={9} className={classes.profilemain}>
                <Paper className={classes.paper}>
                  <ProfileBanner/>                 
                </Paper>
                <ProfileTab />
              </Grid>
              <Grid item xs={12} sm={3}>
                <div className="widget-section profile-widgets ">
                  <Paper className={classes.paper}>
                    <CompleteProfile/>
                  </Paper>
                  <Paper className={classes.paper}>
                    <Latestupdates/>
                  </Paper>
                </div>
              </Grid>   
            </Grid>
          </div>
        </Container>        
      </Layout>
    </>
  )
}