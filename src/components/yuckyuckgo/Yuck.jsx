import React, { useState, useEffect } from 'react';

const WeirdEasterEgg = () => {
  const [clicked, setClicked] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const [bgColor, setBgColor] = useState('#ff00ff');
  const [eggCount, setEggCount] = useState(0);
  const [showFaces, setShowFaces] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 5) % 360);
      setBgColor(`hsl(${Math.random() * 360}, 100%, 50%)`);
    }, 200);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    if (clicked) {
      const interval = setInterval(() => {
        setPosition({
          x: Math.random() * 80 + 10,
          y: Math.random() * 80 + 10
        });
        setScale(Math.random() * 2 + 0.5);
      }, 500);
      
      return () => clearInterval(interval);
    }
  }, [clicked]);
  
  const handleEggClick = () => {
    setClicked(true);
    setEggCount(prev => prev + 1);
    if (eggCount >= 3) {
      setShowFaces(true);
    }
  };

  // Raw CSS styles as objects
  const containerStyle = {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    background: bgColor,
    transition: 'background 0.5s ease',
    position: 'relative',
    fontFamily: '"Comic Sans MS", cursive'
  };
  
  const eggStyle = {
    position: 'absolute',
    left: `${position.x}%`,
    top: `${position.y}%`,
    transform: `rotate(${rotation}deg) scale(${scale})`,
    transition: 'transform 0.3s ease, left 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55), top 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
    width: '100px',
    height: '150px',
    background: 'radial-gradient(ellipse at center, white 0%, #ffffcc 30%, #ffcc00 100%)',
    borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
    boxShadow: '0 0 30px rgba(255,255,255,0.8)',
    cursor: 'pointer',
    zIndex: 10
  };
  
  const nameStyle = {
    position: 'absolute',
    fontSize: clicked ? '8rem' : '2rem',
    fontWeight: 'bold',
    color: '#fff',
    textShadow: '0 0 10px #000, 0 0 20px #ff0000, 0 0 30px #ff00ff',
    transition: 'all 0.3s ease',
    animation: clicked ? 'bounce 0.5s infinite alternate' : 'none',
    zIndex: 5
  };
  
  const tanmayStyle = {
    ...nameStyle,
    top: clicked ? `${Math.sin(Date.now() / 500) * 40 + 50}%` : '20%',
    left: clicked ? `${Math.cos(Date.now() / 700) * 40 + 50}%` : '20%',
    transform: `rotate(${clicked ? rotation : 0}deg)`,
  };
  
  const sahilStyle = {
    ...nameStyle,
    bottom: clicked ? `${Math.cos(Date.now() / 600) * 40 + 50}%` : '20%',
    right: clicked ? `${Math.sin(Date.now() / 800) * 40 + 50}%` : '20%',
    transform: `rotate(${clicked ? -rotation : 0}deg)`,
  };
  
  const faceStyle = {
    position: 'absolute',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    background: '#ffddcc',
    display: showFaces ? 'block' : 'none',
    animation: 'spin 3s infinite linear',
    boxShadow: '0 0 50px rgba(255, 255, 0, 0.8)',
    overflow: 'hidden',
    zIndex: 15
  };
  
  const face1Style = {
    ...faceStyle,
    top: '30%',
    left: '20%',
  };
  
  const face2Style = {
    ...faceStyle,
    bottom: '30%',
    right: '20%',
  };
  
  const eyeStyle = {
    position: 'absolute',
    width: '30px',
    height: '30px',
    background: 'black',
    borderRadius: '50%',
    animation: 'blink 2s infinite'
  };
  
  const mouthStyle = {
    position: 'absolute',
    width: '80px',
    height: '40px',
    border: '5px solid black',
    borderRadius: '0 0 40px 40px',
    borderTop: 'none',
    bottom: '30px',
    left: '35px'
  };
  
  // Keyframes are implemented via CSS animation property above
  // In a real app you'd use styled-components or emotion for keyframes
  
  const explosionStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    background: 'radial-gradient(circle, transparent 20%, #ff00ff 21%, transparent 21%)',
    backgroundSize: '10% 10%',
    animation: clicked ? 'explode 0.5s forwards' : 'none',
    opacity: clicked ? 1 : 0,
    zIndex: 1
  };
  
  // Easter eggs flying around randomly
  const miniEggs = Array(20).fill(0).map((_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    size: Math.random() * 30 + 20
  }));
  
  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.5); }
            100% { transform: rotate(360deg) scale(1); }
          }
          
          @keyframes blink {
            0%, 90%, 100% { transform: scaleY(1); }
            95% { transform: scaleY(0.1); }
          }
          
          @keyframes bounce {
            0% { transform: translateY(0) rotate(0deg); }
            100% { transform: translateY(-20px) rotate(5deg); }
          }
          
          @keyframes float {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-100px) rotate(180deg); }
            100% { transform: translateY(0) rotate(360deg); }
          }
          
          @keyframes explode {
            0% { background-position: 0% 0%; }
            100% { background-position: 100% 100%; }
          }
        `}
      </style>
      
      {clicked && miniEggs.map((egg, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: egg.left,
          top: egg.top,
          width: `${egg.size}px`,
          height: `${egg.size * 1.3}px`,
          background: 'radial-gradient(ellipse at center, white 0%, #ffddaa 50%, #ff9900 100%)',
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          animation: 'float 5s infinite alternate',
          animationDelay: egg.animationDelay,
          zIndex: 3
        }} />
      ))}
      
      <div style={explosionStyle}></div>
      
      <h1 style={tanmayStyle}>TANMAY</h1>
      <h1 style={sahilStyle}>SAHIL</h1>
      
      <div style={eggStyle} onClick={handleEggClick}></div>
      
      <div style={face1Style}>
        <div style={{...eyeStyle, top: '30px', left: '30px'}}></div>
        <div style={{...eyeStyle, top: '30px', right: '30px'}}></div>
        <div style={mouthStyle}></div>
        <div style={{
          position: 'absolute',
          top: '5px',
          width: '100%',
          textAlign: 'center',
          fontSize: '18px',
          fontWeight: 'bold'
        }}>TANMAY</div>
      </div>
      
      <div style={face2Style}>
        <div style={{...eyeStyle, top: '30px', left: '30px'}}></div>
        <div style={{...eyeStyle, top: '30px', right: '30px'}}></div>
        <div style={mouthStyle}></div>
        <div style={{
          position: 'absolute',
          top: '5px',
          width: '100%',
          textAlign: 'center',
          fontSize: '18px',
          fontWeight: 'bold'
        }}>SAHIL</div>
      </div>
      
      {clicked && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '24px',
          color: 'white',
          textShadow: '0 0 10px red',
          fontWeight: 'bold',
          animation: 'bounce 0.5s infinite alternate',
          zIndex: 20
        }}>
          CLICK THE EGG {eggCount}/5 TIMES FOR MORE WEIRDNESS!
        </div>
      )}
    </div>
  );
};

export default WeirdEasterEgg;