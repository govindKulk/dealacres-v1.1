"use client"
import React from 'react'
import data from "../rentagreement/dummyData";
import AgentLayout from './AgentLayout';
import styles from "./agent.module.css";
import { useEffect } from 'react';
import { useState } from 'react';

const Agent = (props) => {
  const filteredData = data["Experts"].slice(0, -1);

  const [agentsData, setAgentsData] = useState(null)
  const [agentsThumbs, setAgentsThumbs] = useState(null)


  useEffect(() => {
    fetch('/api/agents').then((res) => res.json()).then(data => {
      setAgentsData(data.agents)
      setAgentsThumbs(data.agentsThumbs)
    }).catch(err => console.log(err));
  }, [])

  console.log(agentsData)

  /*
  title.rendered
  agentsThumbs.guid.rendered
  agent_meta.fave_agent_address []
  agent_meta.rank_math_focus_keyword []
  agent_meta.fave_agent_whatsapp []
  slug

  */

  if(!agentsData){
    return null
  }

  return (
    <div className={''}>
      <div className='flex flex-col gap-2'>

        {/* {filteredData.map((dt, index) => (
          <AgentLayout
            // key={index}
            dt = {dt}
            filteredData={filteredData}
            // limit={props.limit}
            featured={props.featured}
          />
      ))} */}

        {
          agentsData.map((agent, i) => {
            return <AgentLayout
              key={i}
              dt={agent}
              thumb={agentsThumbs[i].guid.rendered}
              featured={props.featured}
              />
          })
        }
      </div>

    </div>
  )
}

export default Agent
