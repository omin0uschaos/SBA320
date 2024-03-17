import React from 'react'
import video from '../assets/videos/bgvideo.mp4'
import './Home.css'

function Home() {
  return (
    <>
      <header>
        <video id="background-video" autoPlay loop muted>
      <source src={video} type='video/mp4' />
        </video>
        <h1>Feeling Stuck?</h1>

      </header>
      
    </>
  )
}

export default Home