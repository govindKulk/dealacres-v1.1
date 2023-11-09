"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import styles from "../rentagreement/expert.module.css"
// import style from "./agent.module.css"
import { Rating } from '@mui/material';
import Link from 'next/link';

const ExpertLayout = ({ dt, thumb }) => {
    const [fvt, setFvt] = useState(false)
    const {title, agent_meta, slug} = dt;

    // title.rendered
    // agentsThumbs.guid.rendered
    // agent_meta.fave_agent_address []
    // agent_meta.rank_math_focus_keyword []
    // agent_meta.fave_agent_whatsapp []
    return (
        <Link href={`agent/${slug}`}>
            {
                <div className='max-w-[300px]'>
                    <div className={styles.parentLayout}>
                        <div className={styles.ExpertLayout}>

                            <div className={`${styles.ExpertImg} h-1/2 w-full`}>
                                <Image
                                    src={thumb}
                                    alt='Experts'
                                    width={200}
                                    height={200}
                                    className='w-full h-full object-cover'
                                />
                            </div>

                            <div className={styles.ExpertInfo}>
                                <h3 className={styles.ExpertName}>{title.rendered}</h3>
                                <Rating value={dt.rating} />
                                <p className={styles.ExpertPosition}>{agent_meta.fave_agent_address}</p>
                                {/* <div className={styles.ExpertStatus}>
                                    <span> {dt.tags.tag1} </span>
                                    <span> {dt.tags.tag2} </span>
                                    <span> {dt.tags.tag3} </span>
                                </div>
                                <p className={styles.ExpertTime}>Open untill {dt.availableTime}</p>
                                <div className={styles.ExpertContact}>
                                    <button>Contact</button>
                                    <button>Send Enquiry</button>
                                </div>
                                <div className={styles.featured}>
                                    {(dt.featured) ? <button>Featured</button> : <button style={{ visibility: "hidden" }}>Featured</button>}
                                    <span onClick={() => {
                                        setFvt(!fvt);
                                    }}>
                                        {fvt ? "❤️" : "🤍"}
                                    </span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </Link>
    )
}

export default ExpertLayout


// {  (dt.featured == featured)?
//     <div>
//     <div className={styles.parentLayout}>
//     <div className={styles.ExpertLayout}>

//   <div className={styles.ExpertImg}>
//       <Image
//           src={dt.src}
//           alt='Experts'
//       />
//   </div>

//   <div className={styles.ExpertInfo}>
//       <h3 className={styles.ExpertName}>{dt.name}</h3>
//       <Rating value={dt.rating} />
//       <p className={styles.ExpertPosition}>{dt.location}</p>
//       <div className={styles.ExpertStatus}>
//           <span> {dt.tags.tag1} </span>
//           <span> {dt.tags.tag2} </span>
//           <span> {dt.tags.tag3} </span>
//       </div>
//       <p className={styles.ExpertTime}>Open untill {dt.availableTime}</p>
//       <div className={styles.ExpertContact}>
//           <button>Contact</button>
//           <button>Send Enquiry</button>
//       </div>
//   <div className={styles.featured}>
//       {(dt.featured)? <button>Featured</button> : <button style = {{visibility: "hidden"}}>Featured</button> }
//       <span onClick={()=> {
//           setFvt(!fvt);
//       }}>
//       {fvt? "❤️" : "🤍"}
//       </span>
//   </div>
//   </div>
//   </div>
//   </div>
//   </div>
//    : ""}