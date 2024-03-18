import React from 'react'
import video from '../assets/videos/bgvideo.mp4'
import './Home.css'

function Home() {
  return (
    <>
      <header>
        <div id='vidContainer'>
          <video id="background-video" autoPlay loop muted>
          <source src={video} type='video/mp4' />
          </video>
        </div>
        
        <span id='heroTitle'>Break Through Your Creative Block</span>

      </header>
      
    </>
  )
}

export default Home