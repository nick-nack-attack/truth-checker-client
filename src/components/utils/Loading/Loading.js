import React, { useState } from 'react';
import gif from '../../../assets/loading.gif';

import './Loading.scss';

const Loading = () => {

    const [timeOut, setTimeOut] = useState('Fetching data. Please wait...')

    setTimeout(() => {
        setTimeOut(<>
            <p>Are you even connected to the internet?</p>
            <button id="refresh-page" onClick={() => window.location.reload()}>Refresh Page</button>
            </>
        )
    }, 6000);

    return (
        <div className="loading-div">
            <img id="loading-gif" src={gif} alt="loading gif"/>
            <h1>Department of Truth and Facts</h1>
            <div className="fetching">
            { timeOut }
            </div>
            
        </div>
    )
}

export default Loading;
