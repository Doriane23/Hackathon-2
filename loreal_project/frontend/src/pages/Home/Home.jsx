import React from "react";
import "./Home.scss";
import bgvideohome from "../../assets/homevideo.mp4";

function Home() {
  return (
    <div className="globalhome">
      <video
        className="bg-video"
        autoPlay
        loop
        controls={false}
        playInline
        muted
      >
        {" "}
        <source src={bgvideohome} type="video/mp4" />
      </video>
    </div>
  );
}
export default Home;
