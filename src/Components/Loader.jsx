import React from 'react';
import './Loader.css'

const Loader = () => {
    return(
        <div className='loader_container'>
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        <h1>Please have patience as this demo employs a cold start API,<br/> If the process extends beyond 1 minute and 30 seconds, please do not hesitate to contact me.</h1>
        </div>
    )
}

export default Loader
