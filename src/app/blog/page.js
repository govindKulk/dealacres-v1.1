import React from 'react'
import Blogcards from '@/components/blogcards/Blogcards'
import Featured from '@/components/Featured/Featured'
import Guides from '@/components/Guides/Guides'
import NewBlogHead from '@/components/allBlog/NewBlogHead'
const Blog = () => {
  return (
    <div className='bg-white '>
    {/* <Bloghead heading='Finanace' content='Something Something'/> */}
    <NewBlogHead/>
    
    
    
    <div className='p-4  md:p-8 max-w-screen-xl mx-auto'>
    <Featured/>
    <Blogcards/>
    <Blogcards/>
    <Blogcards/>
    <Blogcards/>
    <Blogcards/>
      <Guides/>
    </div>
     </div>
  )
}

export default Blog