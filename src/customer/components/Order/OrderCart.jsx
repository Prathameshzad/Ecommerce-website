import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCart = () => {
    return (
        <div className='mt-8 p-5 shadow-md  hover:shadow-2xl border'>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className=' flex cursor-pointer'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70" alt="" />

                        <div className='ml-5 space-y-2'>
                            <p className=''> Black clothes</p>
                            <p className='opacity-50 text-xs font-semibold'> Size: M</p>
                            <p className='opacity-50 text-xs font-semibold'> Color: yellow</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p>$199</p>
                </Grid>
                <Grid item xs={4}>
                    {true &&
                        <div>
                            <p>
                                <AdjustIcon sx={{ width: "15px", height: "15px" }} className='text-green-500 mr-2 text-sm' />
                                <span>Delivered on March 3</span>
                            </p>
                            <p className='text-xs'>
                                Your Item has been Delivered 
                            </p>
                        </div>
                    }
                    {false &&
                        <div>
                            <p>
                                <span>Expected to Delivered on March 3</span>
                            </p>
                        </div>
                    }
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCart
