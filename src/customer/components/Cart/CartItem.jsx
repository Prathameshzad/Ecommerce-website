import React from 'react'
import { IconButton, Button} from '@mui/material'
import { RemoveCircleOutline, AddCircleOutline } from '@mui/icons-material'
import { color } from '../Product/FilterData'

const CartItem = () => {
    return (
        <div className='p-5 shadow-lg border rounded-md'>

            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img className="w-full h-full object-cover object-top" src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70" alt="" />
                </div>

                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'>Hello wordl</p>
                    <p className='opacity-70'>daffsdfn efdfndfasdf</p>
                    <p className='opacity-70 mt-2'>  qwfakfnl wede nf</p>
                    <div className='flex space-x-5 items-center text-lg lg:text-xl text-grey-900 pt-6'>
                        <p className='font-semibold'> rs 199</p>
                        <p className='opacity-50 line-through'>$2000</p>
                        <p className='text-green-500'>50%</p>
                    </div>

                </div>
            </div>
            
            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                <IconButton>
                    <RemoveCircleOutline/>
                </IconButton>
                <span className='py-1 px-7 border rounded-sm'>3</span>
                    <IconButton sx={{color:"RGB(145 85 253)"}}>
                        <AddCircleOutline/>
                    </IconButton>
                
                </div>
                <Button sx={{color:"RGB(145 85 253)"}}>Remove</Button>
            </div>
        </div>
        
    )
}

export default CartItem
