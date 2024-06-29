import React from 'react'
import { Grid, Box, Avatar, Rating} from '@mui/material'

const ProductCardReview = () => {
  return (
    <div>
      <Grid spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white' sx={{width:56,height:56, bgcolor:'#9155fd'}}>P</Avatar>
                </Box>
            </Grid>
            <Grid xs={9}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg '>Pratham</p>
                        <p className='opacity-70'>29/6/2024</p>
                    </div>
                </div>
                <Rating value={1} name='half-rating' readOnly></Rating>
                <p>not that good product highly not recommended</p>
            </Grid>
      </Grid>
    </div>
  )
}

export default ProductCardReview
