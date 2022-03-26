import Layout from '../components/Layout/Layout'
import { makeStyles } from '@material-ui/core/styles';

import JournalIndividualBanner from '../components/JournalIndividual/Banner'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Share from '../components/journalSingle/Share'
import Journalcarousel from "../components/journalSingle/Journalcarousel"
import JournalDetail from '../components/journalSingle/JournalDetail'
import Abstract from '../components/journalSingle/Abstract'
import Instruction from '../components/journalSingle/Instruction'
import References from '../components/journalSingle/References' 
import Powered from '../components/journalSingle/Powered'
import SingleTabSection from '../components/journalSingle/SingleTabSection.js'
import RecentlyPublishedArticles from '../components/RecentlyPublishedArticles/RecentlyPublishedArticles'


const useStyles = makeStyles((theme) => ({
    container:{
        display:"flex",
        flexDirection:"column",        
        
    },

    singleRow:{
        boxShadow:"0px 1px 6px #00000025",
        marginTop:"24px",
        background: 'white',
    },

    dobleRow:{

    },

    whitepaper:{
        marginTop:"36px",
        padding:'0px !important'
    },

    paperTab:{
        marginTop:"24px" ,
        paddingRight:"0 !important"
    }
}));

export default function Profile() {
  const classes = useStyles();
  return (
    <div className="journal-single-page">
      <Layout>
        <JournalIndividualBanner single/> 
        <div className="single-page-container">
            <Container maxWidth="lg" className={classes.container}>
                <div className="journal-single-top-row">
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={1}>
                            <Share/>
                        </Grid>  
                        <Grid item xs={12} sm={9}>
                            <Journalcarousel/>
                        </Grid> 
                        <Grid item xs={12} sm={2}>
                            <JournalDetail/>
                        </Grid>            
                    </Grid>
                </div>
                <Grid container spacing={3} className={classes.singleRow} style={{borderLeft:"12px solid #37B910"}}>
                    <Grid item xs={12}>
                        <Abstract/>
                    </Grid>   
                </Grid>
                <Grid container spacing={3} className={classes.dobleRow} style={{marginBottom:"24px"}}>
                    <Grid item xs={12} sm={9} className={classes.whitepaper}>
                        <Instruction/>
                        <References/>
                        <Powered />
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.paperTab}>
                        <SingleTabSection/>
                        <div className="single-journal-widget">
                            <RecentlyPublishedArticles/>
                        </div>
                    </Grid>                
                </Grid>
            </Container> 
        </div>                            
      </Layout>
    </div>
  )
}