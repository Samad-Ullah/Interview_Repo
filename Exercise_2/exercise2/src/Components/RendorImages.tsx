import { type } from 'os';
import React, { useState } from 'react'
import {album } from './../Types/AlbumTypes'
import './Question_card.css';

const RendorImages: React.FC<album> = ({ title}) => {
    let [submitans, setsubmitans] = useState("");

    const submithandle = (ev: any) => {
        setsubmitans(ev.target.value);

    }

    return (
        
        <div className="rendorImage" >
            
            <div className="title">
                <h4>{title}</h4>
            </div>
            <div className="option">
               
            </div>

        </div>
    )
}

export default RendorImages
