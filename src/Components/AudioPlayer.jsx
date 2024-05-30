import React, { useRef } from "react";
// import { song } from "";

export const AudioPlayer = () => {
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button onClick={playAudio}>Play Audio</button>
      <audio ref={audioRef} src={"."}></audio>
    </div>
  );
};

// export default AudioPlayer;
