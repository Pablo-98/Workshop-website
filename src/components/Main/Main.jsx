import React from 'react';
import videoBg from 'my-workshop-app/src/Assets/background-video.mp4';

const Main = () => {
    return (
        <div className='main'>
            <div className='overlay'> </div>
            <video src={videoBg} autoplay loop muted />
            <div className='content'>
               
            </div>
        </div>
    )
}

export default Main