"use client"
import React, {useState} from 'react'
import data from "../rentagreement/dummyData";
import AgentList from './AgentList';
import styles from "./agent.module.css"
import SearchCategories from '../rentagreement/SearchCategories';
import SideContentContainer from '../property/sidecontentcontainer/SideContentContainer';

const Agent = (props) => {
    // let [limit, setLimit] = useState(5);
    const filteredData = data["Experts"];
  return (
    <div className={'flex gap-8 w-[75%] mx-auto'}>
      <div>
        <h2 className={styles.Explore}>Explore our Rent Agreement Experts</h2>
      <div>
          <AgentList
            featured={true}
            limit={-1}
          />

        </div>
        </div>

        <div className={styles.sidebar} >

        <SideContentContainer Addbox={true} />

        <div className={styles.MostSearched}>
          {data["MostSearched"].map((Cate, index) => (
    <SearchCategories city={Cate.Location} category = {Cate.Categories} />
    ))}
    </div>


        </div>
    </div>
  )
}

export default Agent
