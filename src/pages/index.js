import React, {useState,useEffect } from 'react'
import { useRouter } from 'next/router'

import Layout from '../components/Layout/Layout'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CompleteProfile from "../components/CompleteProfile/CompleteProfile"
import Community from "../components/Community/Community"
import ActivityFeed from "../components/ActivityFeed/ActivityFeed"
import PostTab from "../components/PostTab/PostTab"
import JournalCursoule from "../components/JournalCursoule/JournalCursoule"
import RecentlyPublishedArticles from '../components/RecentlyPublishedArticles/RecentlyPublishedArticles'
import WhyVideo from "../components/WhyVideo/WhyVideo";
import JobBoard from "../components/JobBoard/JobBoard"
import SkillWidget from '../components/SkillWidget/SkillWidget'
import MembersWidget from '../components/MembersWidget/MembersWidget'
import RecentBlogPosts from '../components/RecentBlogPosts/RecentBlogPosts'
import MembersActivity from '../components/MembersActivity/MembersActivity.js'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    if(!localStorage){
      router.push('/sign')
    }    
  },[]);

    
  return (
    <>
      <Layout>
        <Container maxWidth="lg">
          <Grid container spacing={3} style={{ marginTop: "12px" }}>                       
            <Grid item xs={12} md={3}>
              <div className="widget-section">
                <Paper >
                  <CompleteProfile />
                </Paper>
                <Paper style={{ marginTop: "24px" }}>
                  <MembersWidget />
                </Paper>
                <Paper style={{ marginTop: "24px" }}>
                  <RecentBlogPosts />
                </Paper>
                <Paper style={{ marginTop: "24px" }}>
                  <MembersActivity />
                </Paper>
                <Paper style={{ marginTop: "24px" }}>
                  <Community />
                </Paper>
              </div>             
            </Grid>
            <Grid item xs={12} md={6}>
              <ActivityFeed />
              <PostTab />
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="widget-section">
                <JournalCursoule />
                <Paper className="" style={{ marginTop: "24px" }}>
                  <WhyVideo/>
                </Paper>
                <Paper className="" style={{ marginTop: "24px" }}>
                  <RecentlyPublishedArticles />
                </Paper>
                <Paper className="" style={{ marginTop: "24px" }}>
                  <JobBoard/>
                </Paper>  
                <Paper className="" style={{ marginTop: "24px" }}>
                  <SkillWidget/>
                </Paper>                
              </div> 
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  )
}
