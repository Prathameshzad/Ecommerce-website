import React from 'react'

const HomeSectionCard = ({product}) => {
    return (
        <div className='w-[15rem] bg-white mx-auto cursor-pointer flex flex-col items-center rounded-lg shadow-lg overflow-hidden'>
            <div className='h-[auto] w-[auto]'>
                <img className='object-cover object-top w-full h-[15rem]' src={product.imageUrl} alt="" />
                <div className='p-4'>
                    <h3 className='text-grey-900 text-lg font-medium'>{product.brand}</h3>
                    <p className='text-grey-500 text-sm'>{product.title}</p>
                </div>
            </div>
        </div>
    )
}

export default HomeSectionCard
