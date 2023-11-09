import Image from 'next/image'
import React from 'react'

const SingleBlogCard = ({
    img,
    title,
    tags,
    excrept
}) => {
  return (
    <div className='col-span-1 h-full   flex flex-col overflow-hidden '>
        <div className='h-1/2 max-h-1/2 w-full '>
            <Image className='w-full h-full object-cover' src={img} alt={title} width={300} height={900} />
        </div>
        <div className='text-sm py-4 h-1/2'>
            <h3 className='text-xl'>
                {title}
            </h3>
            <p className='font-bold'>
                {tags}
            </p>
            <p dangerouslySetInnerHTML={{__html: excrept}} className='text-justify py-2'>
                
            </p>
        </div>
      
    </div>
  )
}

export default SingleBlogCard
