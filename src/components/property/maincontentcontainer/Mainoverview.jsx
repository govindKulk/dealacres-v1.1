import styles from './mainoverview.module.css'
import {BiArea,BiBuildingHouse} from 'react-icons/bi'
import {LuCalendarSearch} from 'react-icons/lu'
import {PiSquaresFour} from 'react-icons/pi'
import {MdPhotoSizeSelectActual} from 'react-icons/md'
import {BsFillHeartFill} from 'react-icons/bs'
import {GiBarrier} from 'react-icons/gi'
import {IoIosShareAlt} from 'react-icons/io'
import { FaRupeeSign } from "react-icons/fa";

function Mainoverview(props) {
    return (
      <div className={`${styles.mainOverviewContainer} `}>
        <div className={styles.overviewContent}>   
            <div className={styles.overviewData}>
                <BiArea size={15} style={{marginTop: '10px', minWidth: '15px' , minHeight: '15px'}}/>
                <div>
                    <h5>Project Area</h5>
                    {/* <h6>{props.overviewData.projectArea}</h6> */}
                    <h6>{props.areaSize + " " + props.sizePostfix} </h6>
                </div>
            </div>
            <div className={styles.overviewData}>
                <MdPhotoSizeSelectActual size={15} style={{marginTop: '10px', minWidth: '15px' , minHeight: '15px'}}/>
                <div>
                    <h5>Sizes</h5>
                    <h6>{props.overviewData.sizes}</h6>
                </div>
            </div>
            <div className={styles.overviewData}>
                <BiBuildingHouse size={15} style={{marginTop: '10px', minWidth: '15px' , minHeight: '15px'}}/>
                <div>
                    <h5>Project Size</h5>
                    <h6>{props.overviewData.projectSize}</h6>
                </div>
            </div>
            <div className={styles.overviewData}>
                <LuCalendarSearch size={15} style={{marginTop: '10px', minWidth: '15px' , minHeight: '15px'}}/>
                <div>
                    <h5>Launch Date</h5>
                    <h6>{props.overviewData.launchDate}</h6>
                </div>
            </div>
            <div className={styles.overviewData}>
                <FaRupeeSign size={15} style={{marginTop: '10px', minWidth: '15px' , minHeight: '15px'}}/>
                <div>
                    <h5>Avg. Price</h5>
                    <h6>{props.overviewData.avgPrice}</h6>
                </div>
            </div>
            <div className={styles.overviewData}>
                <GiBarrier size={15} style={{marginTop: '10px', minWidth: '15px' , minHeight: '15px'}}/>
                <div>
                    <h5>Possession Status</h5>
                    <h6>{props.overviewData.possessionStatus}</h6>
                </div>
            </div>
            <div className={styles.overviewData}>
                <PiSquaresFour size={15} style={{marginTop: '10px', minWidth: '15px' , minHeight: '15px'}}/>
                <div>
                    <h5>Configuration</h5>
                    <h6>{props.overviewData.configuration}</h6>
                </div>
            </div>
        </div>
        <div className={styles.overviewActions}>
            <button><IoIosShareAlt style={{display:'inline'}}/>Share</button>
            <button><BsFillHeartFill style={{display:'inline'}}/> SAVE</button>
            <button>Ask For Details</button>
        </div>
      </div>
    )
}

export default Mainoverview