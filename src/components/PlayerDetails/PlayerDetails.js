import React from 'react';
import './PlayerDtetails.css'
import {faLocationPin} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';
const PlayerDetails = (props) => {
    const { items } = props
    let forTime = 0;
    let quantity = 0;
    for (const item of items) {
        quantity = quantity + item.quantity;
        forTime = forTime + item.time *item.quantity
    }
    return (
        <div className='main-container'>
            <div className='img-container'>
                <img src="head-line.png.png" alt="" />
                <div>
                    <p style={{fontSize:"20px"}}>Zahid Hossain <br /> <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon> <span style={{fontSize:'16px'}}> Sydney, Australia</span> </p>
                </div>
            </div>
            <div className='player-details'>
               <div>
                <p style={{fontSize:"20px"}}>75 <span style={{fontSize:"12px"}}>kg</span></p>
                <p>Weight</p>
                </div>
                <div>
                <p style={{fontSize:"20px"}}>6.5</p>
                <p>Height</p>
                </div>
                <div>
                <p style={{fontSize:"20px"}}>75 <span style={{fontSize:"12px"}}>yrs</span></p>
                <p>Age</p>
               </div>
            </div>
            <div>
               <p style={{fontSize:"20px"}}>Add A Break</p>
                <Button></Button>
            </div>
            <div>
                <div className='exercise-time'>
                    <p style={{ paddingLeft: "10px", fontSize: "22px" }}>Exercise time <span style={{marginLeft:"100px", fontSize:"16px"}}>{forTime} seconds</span></p>
                </div>
                <div>
                    <button className='complete-btn'>
                        <p>Activity Completed</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlayerDetails;