import React from "react";
import '../styles/opalmob.css'
import { useState, useEffect } from "react";
import OpalMobDesc from "./homemobdesc";
import lockscreen from '../public/lockscreen.png'
import pearbook from '../public/pearbook.png'
import { Link } from "react-router-dom";
export default function HomeMob() {
    const [shouldAnimate, setShouldAnimate] = useState(false);


    return (
        <div>
            <OpalMobDesc />

            <div className="headersection" style={{ height: 'auto' }}>
                <h1 className="robotname" style={{ paddingBottom: '2%' }}>Get yours today</h1>

            </div>
            <div className="desc4k" style={{ backgroundImage: `url(${lockscreen})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '15rem' }} >
            </div>
            <div className="desc4k" style={{ background: '#f0f0f0', paddingBottom: '0%' }} >
                {/* <div className="desc4k" style={{marginTop: '-2%' , background:'linear-gradient(171.8deg, rgb(5, 111, 146) 13.5%, rgb(6, 57, 84) 78.6%)'}}> */}
                <div className='desc4ktext' style={{ color: 'black', padding: '10px' }}>
                    <h1 className={`descname`}>PearPhone</h1>
                    <p className="descpara" style={{ paddingLeft: '0', width: '100%', fontSize: '1.1rem' }}>Your all-in-one communication and productivity companion.</p>
                </div>
            </div>
            <div className="horizontalbuttoncontainermob" style={{ backgroundColor: '#f0f0f0' }}>
            <Link to='/products/pearphone'>
                <button className="transparentbutton">MORE INFO</button>
                </Link>
            </div>
            <div className="desc4k" style={{ backgroundImage: `url(${pearbook})`, backgroundSize: 'cover', backgroundPosition: 'center', paddingTop:'400px' }} >
            </div>
            <div className="desc4k" style={{ background: '#f0f0f0', paddingBottom: '0%', paddingTop:'0%' }} >
                {/* <div className="desc4k" style={{marginTop: '-2%' , background:'linear-gradient(171.8deg, rgb(5, 111, 146) 13.5%, rgb(6, 57, 84) 78.6%)'}}> */}
                <div className='desc4ktext' style={{ color: 'black', padding: '10px' }}>
                    <h1 className={`descname`}>PearBook</h1>
                    <p className="descpara" style={{ paddingLeft: '0', width: '100%', fontSize: '1.1rem' }}>Powerful computing for work and play, anytime, anywhere.</p>
                </div>
            </div>
            <div className="horizontalbuttoncontainermob" style={{ backgroundColor: '#f0f0f0' }}>
            <Link to='/products/pearbook'>
                <button className="transparentbutton">MORE INFO</button>
                </Link>
            </div>
        </div>
    );
}