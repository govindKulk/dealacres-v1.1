'use client'

// data imports
import BlogSideBar from "@/components/blog/blogsidebar/BlogSidebar";
import postData from "./blogData.json"
// import topicsData from '@/data/topicsData.json'
// import allPostsData from '@/data/allPostsData.json';

// ui imports
import BlogPost from "@/components/blog/post/BlogPost";
import Tabularposts from "@/components/blog/tabularposts/Tabularposts";
import Guides from "@/components/blog/guides/Guides";
import { useEffect } from "react";
import { fetcher } from "@/app/libs/fetcher";
import { useParams } from "next/navigation";
import { ClipLoader } from "react-spinners";
import { useState } from "react";

// style imports
import styles from './blogStyles.module.css'
import './styles.css'
import { Roboto } from "next/font/google";
import Image from "next/image";


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300','400','700','900']
})

const topicsData = [
  "RENTAL",

  "Delhi NCR",

  "HOME Decor",

  "HELP GUIDE",

  "construction",

  "LifeSTYLE",

  "TRends",

  "CO-workation",

  "legal and taxation",

  "packers and movers",

  "Retail and Hospitality"
]

const allPostsData = [
  {
    "title": "Preparing Your Home for a Loved One with Alzheimer’s: A Caregiver’s Guide",
    "img": "article-thumb-1.jpg"
  }
  ,
  {
    "title": "Why is My House So Dusty? 5 Easy Ways to Eliminate Dust",
    "img": "article-thumb-2.webp"
  }
  ,
  {
    "title": "Preparing Your Home for a Loved One with Alzheimer’s: A Caregiver’s Guide",
    "img": "article-thumb-1.jpg"
  }
  ,
  {
    "title": "Why is My House So Dusty? 5 Easy Ways to Eliminate Dust",
    "img": "article-thumb-2.webp"
  }
  ,
  {
    "title": "Preparing Your Home for a Loved One with Alzheimer’s: A Caregiver’s Guide",
    "img": "article-thumb-1.jpg"
  }
  ,
  {
    "title": "Why is My House So Dusty? 5 Easy Ways to Eliminate Dust",
    "img": "article-thumb-2.webp"
  }
]

const articlesData = [
  {
    "title": "Solar Panels for Apartments: The Complete Guide for Renters",
    "img": "solar-panels.webp"
  },
  {
    "title": "Solar Panels for Apartments: The Complete Guide for Renters",
    "img": "solar-panels.webp"
  },
  {
    "title": "Solar Panels for Apartments: The Complete Guide for Renters",
    "img": "solar-panels.webp"
  },
  {
    "title": "Solar Panels for Apartments: The Complete Guide for Renters",
    "img": "solar-panels.webp"
  }
]

const guidesData = [
  {
    "title": "Buyer's Guide",
    "img": "buyers-guide.png",
    "bgColor": "#FADDC6",
    "borderColor": "#F6C094",
    "textColor": "#F6A05A",
    "content": "Are you looking to buy your first home? Our Buyer's Guide will help you make informed decisions. Whether you prefer a luxurious apartment or a cozy villa, this guide covers it all. Explore financing options, understand the home buying process, and gain valuable insights into property inspections and negotiations."
  },
  {
    "title": "Seller's Guide",
    "img": "sellers-guide.png",
    "bgColor": "#FFF5D8",
    "borderColor": "#FFEBB0",
    "textColor": "#FDBD00",
    "content": "Ready to sell your property? Our Seller's Guide provides valuable insights and tips to maximize your property's value. Get started with confidence. Learn about pricing strategies, home staging, and marketing techniques to attract potential buyers. Navigate the selling process with ease."
  },
  {
    "title": "Rental Guide",
    "img": "rental-guide.png",
    "bgColor": "#F1F8D7",
    "borderColor": "#D3E1A0",
    "textColor": "#95BD00",
    "content": "Looking for a rental property? Our Rental Guide simplifies the process, helping you find the perfect place. Explore your options with ease. Learn about rental agreements, tenant rights, and tips for a smooth move-in process. Make informed decisions when renting your next home."
  },
  {
    "title": "Home Interior",
    "img": "home-interior-guide.png",
    "bgColor": "#F6E6FA",
    "borderColor": "#CB6CE6",
    "textColor": "#CB6CE6",
    "content": "Transform your home's interior with our Home Interior Guide. Discover trendy decor ideas and create a space you'll love. Explore the latest interior design trends, color schemes, and furniture selection tips. Turn your house into a stylish and comfortable haven."
  },
  {
    "title": "Home Vastu",
    "textColor": "#38B6FF",
    "img": "home-vastu-guide.png",
    "bgColor": "#E4FAFA",
    "borderColor": "#38B6FF",
    "content": "Enhance the harmony of your home with Vastu principles. Our Home Vastu Guide offers insights for a balanced and positive living environment. Learn about the significance of directions, Vastu dos and don'ts, and practical tips for a Vastu-compliant home."
  }
]
export default function SingleBlogPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [blogData, setBlogData] = useState(null)
  
  const params = useParams();

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      
      fetch(`/api/posts/${params.id}`).then((res) => res.json()).then((data) => {
        setBlogData(data.formatedPost);
        setIsLoading(false);
      })
    }, 1000)
  }, [])



  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className='flex flex-col min-h-screen min-[960px]:grid min-[960px]:grid-cols-6'>

        {isLoading ? <div className="items-center justify-center flex min-[960px]:col-span-4 px-2 py-2 max-h-screen bg-gray-200/40 shadow-md rounded  ">
          <ClipLoader  size={300} />
        </div> : <>
          {!blogData ? <div className="min-[960px]:col-span-4 px-2 py-2" >
            {/* Post Section */}
            <BlogPost postData={postData} />
          </div>: 


          <div style={roboto.style} className = {`min-[960px]:col-span-4 px-2 py-2 ${styles.blogContainer} px-4 `}>
   
          <h1>{blogData.title.rendered}</h1>

          <Image src={blogData.coverImage.guid.rendered} width={600} height={400} className="w-full max-h-[300px] object-cover" alt={blogData.title.rendered}/>
          <div dangerouslySetInnerHTML={{ __html: blogData.content.rendered }} className="text-justify"></div>
        </div>}

        </>}
          <div className="min-[960px]:col-span-2 px-2 py-2">
            {/* Feeds section */}
            <BlogSideBar allPosts={allPostsData} topics={topicsData} />
          </div>

      </div>

      <Tabularposts
        posts={allPostsData}
        articles={articlesData} />

      <Guides showHeading guides={guidesData} align="center" />


    </div>
  )
}


