import React, {useState,useEffect } from 'react'
import { useRouter } from 'next/router'

import Layout from '../components/Layout/Layout'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import BlogBanner from '../components/BlogPage/BlogBanner'


export default function RecentBlogPosts() {
  const router = useRouter()
  return (
    <>
      <Layout>
        <BlogBanner />
        <Container maxWidth="lg">
          <Grid container spacing={3} style={{ marginTop: "12px" }}>                       
            <Grid item xs={12} md={2}>
              <div className="widget-section">
                sdf
              </div>             
            </Grid>
            <Grid item xs={12} md={7}>
              sfds
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="widget-section">
                  sdfdsf
                {/* <Paper className="" style={{ marginTop: "24px" }}> */}

                {/* </Paper>                 */}
              </div> 
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  )
}
