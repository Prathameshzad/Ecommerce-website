import React from 'react'
import { Grid, Typography, Button   } from '@mui/material'

const Footer = () => {
  return (
    <div>
      <Grid className='bg-black text-white text-center mt-10' container sx={{bgcolor:'black', color:'white',py:3}}>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-2' variant='h5'>Company</Typography>
                <div><Button className='pb-2' variant='p' gutterBottom>About</Button></div>
                <div><Button className='pb-2' variant='p' gutterBottom>Blog</Button></div>
                <div><Button className='pb-2' variant='p' gutterBottom>press</Button></div>
                <div><Button className='pb-2' variant='p' gutterBottom>Jobs</Button></div>
                <div><Button className='pb-2' variant='p' gutterBottom>Partners</Button></div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>Solutions</Typography>
                <div><Button className='pb-5' variant='h6' gutterBottom>Marketing</Button></div>
                <div><Button className='pb-5' variant='h6' gutterBottom>Analytics</Button></div>
                <div><Button className='pb-5' variant='h6' gutterBottom>Commerce</Button></div>
                <div><Button className='pb-5' variant='h6' gutterBottom>Insights</Button></div>
                <div><Button className='pb-5' variant='h6' gutterBottom>Support</Button></div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>Documentation</Typography>
                <div><Button className='pb-5' variant='h6' gutterBottom>Guides</Button></div>
                <div><Button className='pb-5' variant='h6' gutterBottom>API status</Button></div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>Legel</Typography>
                <div><Button className='pb-5' variant='h6' gutterBottom>CLaim</Button></div>
                <div><Button className='pb-5' variant='h6' gutterBottom>Privacy</Button></div>
                <div><Button className='pb-5' variant='h6' gutterBottom>Terms</Button></div>
            </Grid>
            <Grid>
                <Grid className='pt-20' item xs={12}>
                    <Typography variant='body2' component="p" align='center'>&copy; 2023 Company. All rights reserved</Typography>
                    <Typography variant='body2' component="p" align='center'>Made with love by Prathamesh Zad</Typography>
                    <Typography variant='body2' component="p" align='center'>Social media</Typography>
                </Grid>
            </Grid>
      </Grid>
    </div>
  )
}

export default Footer
