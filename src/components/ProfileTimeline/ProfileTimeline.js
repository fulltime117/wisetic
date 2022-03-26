import React, { Component } from 'react'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Community from "../Community/Community"
import ActivityFeed from "../ActivityFeed/ActivityFeed"
import PostTab from "../PostTab/PostTab"

export default function Home() {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3}>                       
          <Grid item xs={12} sm={4}>
            <div className="widget-section">
              <Paper style={{ marginTop: "24px" }}>
                <Community />
              </Paper>
            </div>             
          </Grid>
          <Grid item xs={12} sm={8}>
            <ActivityFeed />
            <PostTab />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
