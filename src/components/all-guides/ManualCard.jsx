'use state'

import React from 'react'
import styles from './allguides.module.css'
import { useState } from 'react';
import bg from '../../../public/all-guides/card-bg.jpg'
import Image from 'next/image';
const content = 'Choosing between a home that is ready to move into now or one that is still under construction is a decision that almost all prospective home buyers struggle with. It is essential to understand the specific advantages and disadvantages of both of these property categories because they serve and suit various purposes and goals. Here is a ready-made handbook to aid in your decision-making. READ MORE…Choosing between a home that is ready to move into now or one that is still under construction is a decision that almost all prospective home buyers struggle with. It is essential to understand the specific advantages and disadvantages of both of these property categories because they serve and suit various purposes and goals. Here is a ready-made handbook to aid in your decision-making. '

const ManualCard = () => {

    const [showFull, setShowFull] = useState(false);
    return (
        <div className={`flex flex-col bg-white md:flex-row gap-2  md:gap-8 z-10  p-4 ${styles.cardContainer}`}>
            <div className='min-w-full
            h-[180px]
            md:min-w-[120px] md:min-h-[120px] py-2 self-start aspect-square relative'>
                <Image 
                fill
                className='object-cover ' src={bg} />
            </div>
            <div>
                <h4 className='pb-2 font-bold text-lg md:text-xl'> Under Construction Property vs Ready to Move Property.</h4>

                <p className='text-justify text-sm md:text-base'>
                    {showFull ? content : content.slice(0, 200)}
                    <span className='cursor-pointer font-bold text-blue-500' onClick={() => setShowFull(prev => !prev)}>
                        {showFull ? ' Read Less' : ' Read More'}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default ManualCard
