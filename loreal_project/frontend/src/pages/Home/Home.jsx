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
          <img
            src="src\assets\skincare.jpg"
            alt="skincare_product"
            height="200"
          />
        </div>
        <div className="product2">
          <img src="src\assets\makeup.jpg" alt="makeup_product" height="300" />
        </div>
        <div className="product3">
          <img
            src="src\assets\haircolor.jpg"
            alt="haircolor_product"
            height="300"
          />
        </div>
        <div className="product4">
          <img
            src="src\assets\shampoo.jpg"
            alt="shampoo_product"
            height="300"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
