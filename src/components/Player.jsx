import React, {useRef, useState} from "react";
import ReactPlayer from "react-player/lazy";

const Player = ({ link }) => {
  const [progress, setProgress] = useState(0)

  const playerRef = useRef(0)

  return (
    <div className="player_border">
      <button className="forward_btn" onClick={() => playerRef?.current?.seekTo(progress?.playedSeconds+10, 'seconds')}>Skip 10 seceonds</button>
      {link === "" ? (
        <h2
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          Video Player...
        </h2>
      ) : (
        <ReactPlayer
        ref={playerRef}
          className="react_player"
          url={link}
          playing={true}
          controls={true}
          width="100%"
          height="100%"
          onProgress={progress => setProgress(progress)}
        />
      )}
    </div>
  );
};

export default Player;
