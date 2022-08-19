import React, { useEffect, useState } from "react";
import GoogleMap from "../components/GoogleMap";
import Player from "../components/Player";

const video_api_endpoint =
  "https://care-box-backend.herokuapp.com/api/v1/applicant_test/get_video_link/";

const VideoPlayer = (value) => {
  const [data, setData] = useState([]);
  const [link, setLink] = useState("");

  useEffect(() => {
    const fetchVideoUrl = () =>
      fetch(video_api_endpoint)
        .then((response) => response.json())
        .then((data) => setData(data));
    fetchVideoUrl();
  }, []);

  //   console.log(data);

  return (
    <>
      <div className="video_container">
      <div className="video_player">
        <Player link={link} />
      </div>
      <div className="video_list">
        {data?.length <= 0 ? (
          <h2 style={{ color: "white" }}>Loading...</h2>
        ) : (
          data.map((btn) => {
            return (
              <button
                key={btn.id}
                className="video_select_btn"
                onClick={() => setLink(btn?.link)}
              >
                Stream Link {btn.id}
              </button>
            );
          })
        )}
      </div>
    </div>
    <GoogleMap />
    </>
  );
};

export default VideoPlayer;
