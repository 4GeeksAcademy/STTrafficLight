 import React, { useState } from 'react';
export const TrafficLight = () => {
    const [redLight, setRedLight] = useState(false);
    const [yellowLight, setYellowLight] = useState(false);
    const [greenLight, setGreenLight] = useState(false);
    let lastNum = 0;
    
    const redOn = () => {
        setRedLight(!redLight);
        setYellowLight(false); 
        setGreenLight(false); 
    };

    const yellowOn = () => {
        setYellowLight(!yellowLight);
        setRedLight(false); 
        setGreenLight(false); 
    }

    const greenOn = () => {
        setGreenLight(!greenLight);
        setRedLight(false);
        setYellowLight(false);
    };
    
    function randomNum(min, max) {
        let num = 0;
        do {
            num = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (num === lastNum);
        lastNum = num;
        console.log(num)
        return num;
    }


    const randomice = () => {
        let randomColorNum = randomNum(1, 3); 
        if(randomColorNum == 1){greenOn()}
        if(randomColorNum == 2){yellowOn()}
        if(randomColorNum == 3){redOn()}

    }

    return(
        <div className="container d-flex flex-column align-items-center">
            <div className="post bg-dark">
            </div>
			<div className="trafficLight bg-dark d-flex flex-column rounded ">
                <div>
                   <button type="button" onClick={redOn} className={`sice btn btn-danger rounded-circle mt-1 ${redLight ? 'lightOn' : ''}`}></button> 
                </div>
                <div>
                   <button type="button" onClick={yellowOn} className={`sice btn btn-warning rounded-circle ${yellowLight ? 'lightOn' : ''}`}></button> 
                </div>
                <div>
                    <button type="button" onClick={greenOn} className={`sice btn btn-success rounded-circle ${greenLight ? 'lightOn' : ''}`} ></button>
                </div>
                <div>
                    <button type="button" onClick={randomice} className="btn btn-info mt-4">Random</button>
                </div>
                
            </div>
         </div>
    );
}