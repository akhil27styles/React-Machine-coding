import React, { useState, useEffect } from 'react';

const ProgressBar = ({ progress }) => {
    return (
        <div style={{ width: '100%', backgroundColor: '#e0e0de', borderRadius: '5px', margin: '10px 0' }}>
            <div
                style={{
                    width: `${progress}%`,
                    backgroundColor: progress > 66 ? 'green' : progress > 33 ? 'orange' : 'red',
                    height: '20px',
                    borderRadius: '5px',
                    transition: 'width 0.5s ease-in-out',
                }}
            >
            </div>
        </div>
    );
};

const ProgressBarApp = () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
     const interval=setInterval(()=>{
            setProgress((prevProgress)=>{
                if(prevProgress>=100){
                    clearInterval(interval);
                    return 100;
                }
                return prevProgress+10;
            })
     },1000);
    }, [])
    

    return (
        <div style={{ width: '50%', margin: '0 auto', textAlign: 'center' }}>
            <h2>Progress Bar Example</h2>
            <ProgressBar progress={progress}/>
            <p>{progress}%</p>
        </div>
    );
};

export default ProgressBarApp;
