import React from "react";
import "./WebDesign.css";
import webcard_1 from "./card-img01.svg";
import webcard_2 from "./card-img02.svg"
import webcard_3 from "./card-img03.svg"
import webcard_4 from "./card-img04.svg"
import webcard_5 from "./card-img05.svg"
import webcard_6 from "./card-img06.svg"

const WebDesign = () => {
  return (
    <div className="web-design-container">
      <div className="main-title">
        <h1>Web Design</h1>
        <p>
          We build websites that serve as powerful marketing tools <br /> and bring
          memorable brand experiences.
        </p>
      </div>
      <div className="cards">
      <div className="card-place">
            <div className="card-img">
                <img src={webcard_1} alt="" />
            </div>
            <div className="card-text">
              <h1>Express</h1>
              <p>A multi-carrier shipping website for <br /> ecommerce businesses</p>
            </div>
      </div>
      <div className="card-place">
            <div className="card-img">
                <img src={webcard_2} alt="" />
            </div>
            <div className="card-text">
              <h1>Transfer</h1>
              <p>Site for low-cost money transfers and sending money within seconds</p>
            </div>
        </div>
      <div className="card-place">
            <div className="card-img">
                <img src={webcard_3} alt="" />
            </div>
            <div className="card-text">
              <h1>Photon</h1>
              <p>A state-of-the-art music player with high-resolution audio and DSP effects</p>
            </div>
        </div>
      </div>
      <div className="cards2">
      <div className="card-place">
            <div className="card-img">
                <img src={webcard_4} alt="" />
            </div>
            <div className="card-text">
              <h1>Builder</h1>
              <p>Connects users with local contractors based on their location</p>
            </div>
        </div>
      <div className="card-place">
            <div className="card-img">
                <img src={webcard_5} alt="" />
            </div>
            <div className="card-text">
              <h1>Blogr</h1>
              <p>Blogr is a platform for creating an online blog or publication</p>
            </div>
        </div>
      <div className="card-place">
            <div className="card-img">
                <img src={webcard_6} alt="" />
            </div>
            <div className="card-text">
              <h1>Camp</h1>
              <p>Get expert training in coding, data, design, and digital marketing</p>
            </div>
        </div>
      </div>
      <div className="web-main-links">
        <div className="web-link-left">
          <section className="web-link-img-0">
            <h1>Web Design</h1>
            <p>View Projects <span style={{color:"chocolate"}}>→</span></p>
          </section>
          

        </div>
        <div className="web-link-right">
          <section className="web-link-img-1">
            <h1>App Design</h1>
            <p>View Projects <span style={{color:"chocolate"}}>→</span></p>
          </section>
          <section className="web-link-img-2">
            <h1>Graphic Design</h1>
            <p>View Projects <span style={{color:"chocolate"}}>→</span></p>
          </section>
        </div>
      </div>
      <div className="web-about-project">
          <div className="web-about-left">
              <div className="web-about-text">
                <h1>Let's talk about your project</h1>
              </div>
              <div className="web-about-text-p">
                  <p> Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
              </div>
          </div>
          <div className="web-about-right"></div>
      </div>
    </div>
  );
};

export default WebDesign;
