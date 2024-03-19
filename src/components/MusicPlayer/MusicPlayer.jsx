import React, { useState, useEffect } from 'react';
import audioFilesData from './songFiles.json';
import MusicVisualizer from './MusicVisualizer';
import './MusicPlayer.css'
import playIcon from '../../assets/images/playicon.png'
import pauseIcon from '../../assets/images/pauseicon.png'
import prevIcon from '../../assets/images/previcon.png'
import nextIcon from '../../assets/images/nexticon.png'
import voldownIcon from '../../assets/images/volumeicondown.png'
import volupIcon from '../../assets/images/volumeiconup.png'



function MusicPlayer() {
  const [audioFiles, setAudioFiles] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [audio] = useState(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    setAudioFiles(audioFilesData.audioFiles);
    loadSong(audioFilesData.audioFiles[currentSongIndex]);
  }, []);

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener('timeupdate', updateCurrentTime);

    return () => {
      audio.removeEventListener('timeupdate', updateCurrentTime);
    };
  }, [audio]);

  // Add an effect for handling the loop functionality
  useEffect(() => {
    const handleLoop = () => {
      // If it's the last song, go back to the first song in the list
      if (currentSongIndex === audioFiles.length - 1) {
        setCurrentSongIndex(0); // Go to the first song
        loadSong(audioFiles[0]);
      } else {
        handleNext(); // Otherwise, just play the next song
      }

      if (isPlaying) {
        setTimeout(() => audio.play(), 100); // Play after a brief delay to ensure the song is loaded
      }
    };

    audio.addEventListener('ended', handleLoop);

    return () => {
      audio.removeEventListener('ended', handleLoop);
    };
  }, [audio, currentSongIndex, isPlaying, audioFiles]);

  const loadSong = (url) => {
    if (!url) return; // Check if the URL is valid
    audio.src = url;
    audio.load(); // Load the audio
  };

  const togglePlay = () => {
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handlePrevious = () => {
    const newIndex = (currentSongIndex - 1 + audioFiles.length) % audioFiles.length;
    setCurrentSongIndex(newIndex);
    loadSong(audioFiles[newIndex]);
    if (isPlaying) {
      audio.play();
    }
    setCurrentTime(0); // Reset currentTime
  };

  const handleNext = () => {
    const newIndex = (currentSongIndex + 1) % audioFiles.length;
    setCurrentSongIndex(newIndex);
    loadSong(audioFiles[newIndex]);
    if (isPlaying) {
      audio.play();
    }
    setCurrentTime(0);
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    setCurrentTime(newTime);
    audio.currentTime = newTime;
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audio.volume = newVolume;
  };

  return (
    <div id='musicPlayerDiv'>
        <MusicVisualizer audio={audio} isPlaying={isPlaying} />
        <input
        id='songProgressBar'
        type="range"
        min={0}
        max={audio.duration || 0}
        value={currentTime}
        onChange={handleTimeChange}
      />
      <div id='trackControlsDiv'>
        <button onClick={handlePrevious}><img src={prevIcon} alt="Prev" /></button>
        <button onClick={togglePlay}><img src={isPlaying ? pauseIcon : playIcon} alt={isPlaying ? "Pause" : "Play"} /></button>
        <button onClick={handleNext}><img src={nextIcon} alt="Next" /></button>
      </div>
        <div id='volumeDiv'>
        <img src={voldownIcon} alt="Down" />
      <input
      id='volumeRange'
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={handleVolumeChange}
      />
    <img src={volupIcon} alt="up" />
      </div>

    </div>
  );
}

export default MusicPlayer;
