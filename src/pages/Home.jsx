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
        <button id='heroButton'>Explore Now</button>

      </header>

      <main id='homeMainSection'>
        <section id="introSection">
            <p><span>Staring at a blank page?</span><br /><br /> Creavara is your muse in the digital age, designed to banish writer's block to the shadows. Dive into an oasis of creativity, where inspiration is endless and your imagination knows no bounds.</p>
        </section><br /><br /><br /><br />
        <section id="featureSection">
            <h2>Features at a Glance:</h2>

            <ul>
                <li><strong>Image Generator:</strong> Visual wonders await to spark your storytelling.</li>
                <li><strong>Quote Generator:</strong> Words of wisdom to steer your narrative course.</li>
                <li><strong>Name Generator:</strong> Discover the perfect names for your characters and settings.</li>
                <li><strong>Music Player with Visualization:</strong> Tune into the rhythm of creativity.</li>
                <li><strong>Timer Function:</strong> Challenge yourself and transform pressure into inspiration.</li>
            </ul>

        </section>
        <section id="ctaSection">
            <p>Creavara isn't just a tool, it's a journey! Explore the uncharted territories of your creativity. <br /><br /><strong>Are you ready to embark?</strong></p>
            <button>Start Your Journey</button>
        </section>
    </main>
      
    </>
  )
}

export default Home