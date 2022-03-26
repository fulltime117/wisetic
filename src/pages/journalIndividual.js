import Layout from '../components/Layout/Layout'
import { makeStyles } from '@material-ui/core/styles';

import JournalIndividualBanner from '../components/JournalIndividual/Banner'
import TabLink from '../components/JournalIndividual/TabLink'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import EditorialBoard from "../components/JournalIndividual/EditorialBoard"
import Publications from '../components/JournalIndividual/Publications'
import JournalScope from '../components/JournalIndividual/JournalScope'
import WhyWisetic from '../components/JournalIndividual/WhyWisetic'
import SpecialJournal from '../components/JournalIndividual/SpecialTopic'
import WantEditor from "../components/JournalIndividual/WantEditor"
import HaveIdea from "../components/JournalIndividual/HaveIdea"

const useStyles = makeStyles((theme) => ({
  
}));

export default function Profile() {
  const classes = useStyles();
  return (
    <div className="journal-individual-page">
      <Layout>
        <JournalIndividualBanner /> 
        <TabLink/>  
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <EditorialBoard/>
              <WantEditor/>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Publications/>                    
            </Grid> 
            <Grid item xs={12} sm={4} style={{zIndex:"3"}}>
              <JournalScope/>                   
              <WhyWisetic/>  
              <SpecialJournal/> 
              <HaveIdea/>                
            </Grid>   
          </Grid>
        </Container>                     
      </Layout>
    </div>
  )
}