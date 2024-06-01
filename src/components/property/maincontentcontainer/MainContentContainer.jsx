'use client'
import {useState} from 'react'
import {Lato} from 'next/font/google'
import styles from './maincontent.module.css'
import {BsCurrencyRupee} from 'react-icons/bs'
import Mainoverview from './Mainoverview.jsx'
import Amenities from './Amenities.jsx'
import Specification from './Specification.jsx'
import Locality from './Locality.jsx'
import Developerinfo from './Developerinfo.jsx'

import MortgageCalculator from '../mortgagecalculator/MortGageCalculator'


const lato = Lato({
    subsets: ['latin'],
    weight: ['300','400','700','900']
})

function MainContentContainer(props) {

    const API_KEY = 'AIzaSyCLnG8KQEzHCSMW62v1Kknt95xEGKMXW-0'
    const propertyData = props.data;

    const [showFull,setShowFull] = useState(false)
    const mapSrc= `https://www.google.com/maps/embed/v1/place?q=${props.content.mapCoordinates.latitude},${props.content.mapCoordinates.longitude}&key=${API_KEY}`

    return (
      <div style={lato.style} className={styles.mainContainer}>
          <div className={styles.headerComp}>
              <h6>{props.content.currentStatus}</h6>
              <div className={styles.head}>{propertyData.title}, <p style={{display:'inline'}}>{propertyData.address}</p></div>
              <h5><BsCurrencyRupee style={{display:'inline'}}/>{propertyData.price}</h5>
          </div>
          <div className={styles.aboutProperty}>
              <h3>About this home</h3>
              <p>{showFull?propertyData.content:`${propertyData.content.substring(0,600)}`}</p>
              <h6 onClick={()=>setShowFull(!showFull)}>{showFull? 'Show Less':'Show More'}</h6>
          </div>
          <div className='text-[20px]'>
            <h1>{propertyData.title} Overview</h1>
            <Mainoverview overviewData = {props.content.overview} areaSize = {propertyData.areaSize} sizePostfix = {propertyData.sizePostfix} />
          </div>
          <div className={styles.mapContainer}>
            <iframe src={mapSrc} width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div id="#seller">
            <h1>Specification: {propertyData.title}</h1>
            <Specification specificationData = {props.content.specification}/>
          </div>
          <div id="ametities">
            <h1>Amenities</h1>
            <Amenities ameData={props.content.Amenities}/>
          </div>
          <div id="mortgageCalculator">
            <h1>Mortgage Calculator</h1>
            <MortgageCalculator/>
          </div>
          <div id="aboutDeveloper">
            <h1> About Developer</h1>
            <Developerinfo devData = {props.content.aboutDeveloper}/>
          </div>
          <div className = {styles.mainContainerLine}></div>
          <div id="localityOverview">
            <h1 className=''>Locality Overview</h1>
            <Locality localityData = {props.content.localityOverview} desc={true} hasLocalityIntro={true}/>
          </div>
          
      </div>
    )
}

export default MainContentContainer