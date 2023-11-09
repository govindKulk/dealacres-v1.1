'use client'

import React, { useEffect } from 'react'
import SingleBlogCard from './SingleBlogCard'
import src2 from '../../../public/single-website/parking.webp'
import src1 from '../../../public/single-website/room.webp'
import { useState } from 'react'
import Link from 'next/link'
const BlogsAndNews = () => {
    const [allBlogs, setAllBlogs] = useState(null) 
    const [showFull, setShowFull] = useState(false)
    const dummyBlogData = {
        title: "Luxurious Living",
        excrept: "Welcome to a world of opulence and comfort! Smart World Orchard Gurgaon, sector 61, a residential development by Smart.",
        img: '/single website/room.webp',
        tags: 'Business, Luxury, Real Estate'
    }

    useEffect(() => {
        const posts = fetch('/api/posts').then((res) => res.json()).then((data) => setAllBlogs(data) )


    }, [])

    return (
        <div className='py-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-4 items-center '>
            {
                allBlogs && allBlogs.posts.map((post, index) => {


                   
                    if(index < 3 || showFull){
                    return <Link href={`/blog/${post.slug}`} key={index} className='block col-span-1 h-full my-4 max-h-full text-black hover:text-blue-500 '> 
                            <SingleBlogCard 
                            img={allBlogs.postsThumbs[index].guid.rendered}
                        title={post.title.rendered}
                        tags={dummyBlogData.tags}
                        excrept={post.excerpt.rendered}/>
                        </Link>
                        
                    }
                  
                })
            }

            

        </div>
        <div className='text-center'>
            <button className='bg-black p-4 text-white text-xl shadow rounded'
            onClick={() => setShowFull(prev => !prev)}
            >
                View {showFull ? 'Less': 'More'}
            </button>
        </div>
        </div>
    )
}

export default BlogsAndNews
