import React, { useEffect, useRef, useState } from 'react';

function MusicVisualizer({ audio, isPlaying }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [hue, setHue] = useState(Math.random() * 360);

  useEffect(() => {
    const hueInterval = setInterval(() => {
      setHue((prevHue) => (prevHue + 1) % 360); 
    }, 1000);

    return () => clearInterval(hueInterval);
  }, []);

  useEffect(() => {
    if (!audio || !isPlaying) return;

    let context = audio.context;
    let src = audio.sourceNode;

    if (!context) {
      context = new (window.AudioContext || window.webkitAudioContext)();
      src = context.createMediaElementSource(audio);
      audio.context = context;
      audio.sourceNode = src;
    }

    const analyser = context.createAnalyser();

    src.connect(analyser);
    analyser.connect(context.destination);
    analyser.fftSize = 512;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext('2d');
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;

    const draw = () => {
      animationRef.current = requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);

      canvasContext.clearRect(0, 0, WIDTH, HEIGHT);

      let barWidth = (WIDTH / bufferLength) * 2.5;
      let barHeight;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];

        canvasContext.fillStyle = `hsl(${hue}, 100%, 50%)`;
        canvasContext.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight / 2);

        x += barWidth + 1;
      }
    };

    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
      analyser.disconnect();
      src.disconnect();
    };
  }, [audio, isPlaying, hue]);

  return <canvas ref={canvasRef} width="640" height="200" style={{ width: '90%', height: 'auto' }} />;
}

export default MusicVisualizer;
