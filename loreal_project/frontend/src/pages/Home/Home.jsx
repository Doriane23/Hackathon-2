import React from "react";
import "./Home.scss";
import bgvideohome from "../../assets/homevideo.mp4";
import { Link } from "react-router-dom";

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
          <Link to="/producttype">
            <img
              className="imgproduct"
              src="src\assets\skincare2.png"
              alt="skincare_product"
            />
          </Link>
          <p className="producttype">Skincare</p>
        </div>

        <div className="product1">
          <img
            className="imgproduct"
            src="src\assets\makeup2.png"
            alt="makeup_product"
          />
          <p className="producttype">Makeup</p>
        </div>
        <div className="product1">
          <img
            className="imgproduct"
            src="src\assets\haircolor2.png"
            alt="haircolor_product"
          />
          <p className="producttype">Haircolor</p>
        </div>
        <div className="product1">
          <img
            className="imgproduct"
            src="src\assets\shampoo2.png"
            alt="shampoo_product"
          />
          <p className="producttype">Shampoo</p>
        </div>
      </div>
    </div>
  );
}
export default Home;
