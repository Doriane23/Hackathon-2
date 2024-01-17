import React from "react";
import "./Home.scss";
import bgvideohome from "../../assets/homevideo.mp4";

function Home() {
  return (
    <div>
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
      <div className="globalproduct">
        <div className="product1">
            <img src="../../assets/skincare.jpg" alt="skincare_product"/>
        </div>
        <div className="product2">
            <img src="../../assets/makeup.jpg" alt="makeup_product"/>
        </div>
        <div className="product3">
            <img src="../../assets/haircolor.jpg" alt="haircolor_product"/>
        </div>
        <div className="product3">
            <img src="../../assets/shampoo.jpg" alt="shampoo_product"/>
        </div>
      </div>
    </div>
  );
}
export default Home;
