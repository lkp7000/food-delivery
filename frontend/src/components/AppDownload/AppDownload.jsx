import React from 'react';
import './AppDownload.css';
import play_store from '../../assets/frontend_assets/play_store.png';
import app_store from '../../assets/frontend_assets/app_store.png';


const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
       <p>For Better Experience Download <br/>foodie App</p>
       <div className="app-download-platforms">
       <img src={play_store} alt="" />
       <img src={app_store} alt="" />
       </div>
       
    </div>
  )
}

export default AppDownload