import Layout from '../components/Layout/Layout'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProfileTab from '../components/ProfileTab/ProfileTab'
import JournalOveralBanner from '../components/JournalOverall/JournalOveralBanner'
import OverallTopLeft from "../components/JournalOverall/Worldmap"
import OverallTopRight from "../components/JournalOverall/RecentDevelopment"
import WhyWisecticFeature from '../components/JournalOverall/WhyWisecticFeature'
import WhyWisecticVideo from "../components/JournalOverall/WhyWisecticVideo"
import JournalContent from '../components/JournalOverall/JournalContent'

const useStyles = makeStyles((theme) => ({
  
}));

export default function Profile() {
  const classes = useStyles();
  return (
    <div className="journal-overal-page">
      <Layout>
        <JournalOveralBanner />
          <div className="journal-overal-page-content">
            <Container maxWidth="lg">
                <div className="overall_top_row">
                  <Grid container spacing={3} className={classes.contain}>
                        <Grid item xs={12} sm={5} className={classes.grid}>
                          <OverallTopLeft/>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                          <OverallTopRight/>                      
                        </Grid>   
                  </Grid>
                </div> 
                <div className="overall-middle">
                  <Grid container spacing={3} className={classes.contain}>
                      <Grid item xs={12} sm={6}>
                        <WhyWisecticFeature/>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <WhyWisecticVideo/>                      
                      </Grid>   
                  </Grid>
                </div>
                <div className="overall-bottom">
                  <JournalContent/>
                </div>
            </Container>
          </div>                
      </Layout>
    </div>
  )
}